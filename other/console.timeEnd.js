// for循环

var arr = [1,2,3,4,5,6];
console.time("forLoop");
Array.prototype.forLoop = function () {
    for (var i = 0; i < 10000; i++) {
        var sumResult = 0;
        for (var j = 0; j < this.length; j++) {
            sumResult += parseInt(this[j]);
        }
    }
    return sumResult;
}
arr.forLoop();
console.log('最终的值：' + arr.forLoop()); // 21
console.timeEnd("forLoop"); // 54.965ms

let arr3 = [1,2,3,5,8];
let result = arr3.includes(5);
console.log(result);

let uu = arr3.reduce(function(prev,next,index,iterm){
    return prev+next;
})
console.log("uu:",uu);

let a = b => c => b+c;
console.log(a(1)(2));

