const fs=require("fs");


console.log("Reading synchrionously");
data=fs.readFileSync("input.txt",);

console.log(data.toString());
console.log("Reading asynchnously");
fs.readFile("input.txt",function(err,data)
{
if(err){
         return console.error(err);
}
console.log("Asynchronous read:"+data.toString());

});
console.log("Read operation complete");