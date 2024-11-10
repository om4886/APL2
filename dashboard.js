import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([
    { month: 'Jan', sales: 4000, profit: 2400 },
    { month: 'Feb', sales: 3000, profit: 1398 },
    { month: 'Mar', sales: 2000, profit: 9800 },
    { month: 'Apr', sales: 2780, profit: 3908 },
    { month: 'May', sales: 1890, profit: 4800 },
    { month: 'Jun', sales: 2390, profit: 3800 }
  ]);

  const [activeTab, setActiveTab] = useState('chart');
  const [loading, setLoading] = useState(false);

  const calculateTotal = () => {
    return data.reduce((acc, curr) => acc + curr.sales, 0);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Sales Dashboard</h2>
      
      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => setActiveTab('chart')}
          className={`px-4 py-2 rounded ${activeTab === 'chart' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Chart View
        </button>
        <button
          onClick={() => setActiveTab('table')}
          className={`px-4 py-2 rounded ${activeTab === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Table View
        </button>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-2xl">${calculateTotal().toLocaleString()}</p>
          </div>
          <div className="p-4 bg-green-100 rounded">
            <h3 className="text-lg font-semibold">Average Sale</h3>
            <p className="text-2xl">${(calculateTotal() / data.length).toLocaleString()}</p>
          </div>
          <div className="p-4 bg-purple-100 rounded">
            <h3 className="text-lg font-semibold">Total Entries</h3>
            <p className="text-2xl">{data.length}</p>
          </div>
        </div>
      </div>

      {activeTab === 'chart' ? (
        <div className="w-full overflow-x-auto">
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="profit" fill="#82ca9d" />
          </BarChart>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.month}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.sales}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;