const fs=require("fs");
var text ="Udemy is giving self learning content to reach the world in simple and easy way!!";


console.log("Writting synchrionously");
fs.writeFileSync("input.txt",text);

console.log("Writing asynchnously");
fs.writeFile("input.txt",text,function(err)
{
if(err)
console.log(err);

else
console.log("Write operation complete");

});

