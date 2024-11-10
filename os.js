const os = require('os');
const { exec } = require('child_process');

// Function to display system information
function displaySystemInfo() {
    console.log('=== System Information ===');
    console.log('Operating System:', os.type());
    console.log('Platform:', os.platform());
    console.log('Architecture:', os.arch());
    console.log('Home Directory:', os.homedir());
    console.log('System Uptime:', (os.uptime() / 3600).toFixed(2), 'hours');
}

// Function to list running applications and services based on the OS
function listRunningApplicationsAndServices() {
    const platform = os.platform();

    let command;
    let servicesCommand;

    if (platform === 'win32') {
        command = 'tasklist'; // Windows command to list running applications
        servicesCommand = 'sc query state= all | findstr "SERVICE_NAME"'; // Windows command to list services
    } else if (platform === 'darwin') {
        command = 'ps -ax'; // macOS command to list running applications
        servicesCommand = 'launchctl list'; // macOS command to list services
    } else if (platform === 'linux') {
        command = 'ps -eo pid,comm'; // Linux command to list running applications with PID
        servicesCommand = 'systemctl list-units --type=service --state=running'; // Linux command to list running services
    } else {
        console.log('Unsupported operating system');
        return;
    }

    // Execute the command to list running applications
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error output: ${stderr}`);
            return;
        }

        const applications = stdout.split('\n').filter(line => line.trim() !== '');
        
        // Process applications to format for table
        const appList = applications.map((app, index) => {
            const parts = app.trim().split(/\s+/);
            return {
                'ID': index + 1,
                'Session Name': parts[0], // Usually, the first column is the session name
                'Application': parts.slice(1).join(' ')
            };
        });

        console.log('\n=== Running Applications ===');
        console.table(appList);
        console.log(`Total Running Applications: ${appList.length}`);
    });

    // Execute the command to list running services
    exec(servicesCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error output: ${stderr}`);
            return;
        }

        const services = stdout.split('\n').filter(line => line.trim() !== '');

        // Process services to format for table
        const serviceList = services.map((service, index) => ({
            'ID': index + 1,
            'Service Name': service.trim()
        }));

        console.log('\n=== Running Services ===');
        console.table(serviceList);
        console.log(`Total Running Services: ${serviceList.length}`);
    });
}

// Execute the functions
displaySystemInfo();
listRunningApplicationsAndServices();
