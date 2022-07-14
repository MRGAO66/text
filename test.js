// var arr = [1, 2, 3, 4, 5, 6]
// var arr_ = []
// for (const item of arr) {
//     if(item%2 === 1){
//         arr_.push({
//             number:item,
//             doublenumber:item * 2,
//         })
//     }
// }
// console.log(arr_)

// var result = arr.filter((item) => item % 2 === 1).map((item) => ({ number: item, doublenumber: item * 2 }))
// console.log(result)
// var result = arr.flatMap((it) => it%2 === 1 ? {number:it, doubleNumber:it * 2}: []);
// console.log(result)
// const arr = [
//     "nihao wo shi ni jiejie",
//     "nihao wo shi ni meimei",
//     "nihao wo shi a chicken",
//     "nihao wo shi a some Present"
// ];
// var result = arr.map((it) => it.split(" "))
// console.log(result)
// function loaclMoneyFomat(obj) {
//     var result = Object.entries(obj).map((it) => typeof it[1] === "number" ? [it[0],`￥${it[1]}`] : it)
//     return Object.fromEntries(result);
// }

// var obj = {
//     name: "xxx",
//     blance: 198.5,
//     taken: 3000
// }
// var result = loaclMoneyFomat(obj);
// console.log(result)

// var test = "   asd   "
// var test_ = test.trim();
// console.log(test_, test.length)
// var test1 = test.trimStart()
// console.log(test1, test1.length)
// var test2 = test.trimEnd()
// console.log(test2, test2.length)
// var arr = [1,1,5,6,2,3,5,8,5,6,2,6,62,2,1]
// var arr_ = new Set(arr);
// console.log(arr_)

//includes startsWith ensWith 
// const test = "小曼想打我"
// var a = test.includes("小");
// var b = test.startsWith("小曼");
// var c = test.endsWith("我");
// console.log(a,b,c)

//剩余参数
// function sum(a,b,...args) {
//     console.log(a);
//     console.log(b);
//     console.log(...args);
// } 
// sum(1,2,4,5,6,3,2,1,5,6)

// var count = 10;
// for(var i = 1; i <= count; i++){
//     console.log(i)
// }

// var num = 0 ;
// for (i = 1; i < 10; i++) {
//     if(i % 5 == 0){
//         continue;
//     }
//     num++
// }
// console.log(num)

//空位合并
// function methods(positon){
//     var a = positon.a ?? 3;
//     console.log(a);
// }
// methods({
//     a:0,
//     b:2,
//     c:3
// })

//Symbol的参数是一个对象
// const obj = {
//     toString() {
//         return "abc";
//     }
// };
// const sym = Symbol(obj);
// console.log(sym);

// var arr = [1,2,3]
// console.log(arr.valueOf())
// console.log(arr.toString())
// var a = NaN
// if(a){
//     console.log("hello")
// }else{
//     console.log("错误")
// }

var i = 1;
function a() {
    var j = 20;
    var k = 10;
    function b() {
        var x = 30;
        var y = 40;
        function c() {
            console.log(j,k,x,y)
        }
        c();
    }
    b();
}
a();