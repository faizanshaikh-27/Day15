(function (exports, require, module, __filename, __dirname) {
    const car = "Ford";
    console.log(car);
})();


(function(exports, require, module, __filename, __dirname){
    const name = "Faizan";
    console.log(name);
})


/*
(function (exports, require, module, __filename, __dirname) {
    const car = "Ford";
})();
console.log(car);
*/   // ReferenceError: car is not defined


// IIFE - Immediately Invoked Function Expression

console.log(__filename);
console.log(__dirname);