console.clear();
console.time();
console.error("Syntax Error");
console.warn("add() never used");
console.count('e');
console.info("This is console");
console.timeEnd();
console.info();

function hello(){
console.log("Hello world");
}
setTimeout(hello,3000);