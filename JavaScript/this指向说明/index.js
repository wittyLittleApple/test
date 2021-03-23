var a = 1;
function fun() {
    'use strict'; // 严格模式下 this 为 undefined
    var a = 2;
    return this.a;
}
fun();// 报错 Cannot read property 'a' of undefined

var a = 1;
function fun() {
    var a = 2;
    return this.a;
}
fun();// 当前this为 window


var a = 1000;
var obj = {
    a: 1,
    b: this.a + 1
}
function fun() {
    var obj = {
        a: 1,
        c: this.a + 2 //严格模式下这块报错 Cannot read property 'a' of undefined
    }
    return obj.c;
}
console.log(fun());//1002
console.log(obj.b);//1001

var a = 1;
var obj = {
    a: 2,
    b: function() {
        return this.a;
    }
}
console.log(obj.b()) // 2 指向该对象



var a = 1;
var obj = {
    a: 2,
    b: function() {
        return this.a;
    }
}
var t = obj.b;
console.log(t());// 1
// obj对象的b属性存储的是对该匿名函数的一个引用，可以理解为一个指针
// 当赋值给t的时候，并没有单独开辟内存空间存储新的函数，而是让t存储了一个指针，该指针指向这个函数

// 以上代码相当于执行了以下代码
var a = 1;
function fun() {//此函数存储在堆中
    return this.a;
}
var obj = {
    a: 2,
    b: fun // b指向fun函数
}
var t = fun;//变量t指向fun函数
console.log(t());//1


































