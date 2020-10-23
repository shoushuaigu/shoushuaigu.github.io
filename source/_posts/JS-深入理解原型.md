---
title: JS-深入理解原型
date: 2020-10-15 10:33:15
tags: JS
---
## 深入理解原型
本文主要介绍:
- 什么是原型和原型链
- prototype和__proto__有什么区别
- new和Object.create()创建对象和实现继承的区别

### 原型
.prototype即原型
- Js中,每个<b>函数</b>都有一个prototype属性,它指向prototype对象即原型对象;
```js
function Foo () {}
Foo.prototype
```
- 每个<b>对象(除了null)</b>都有一个__proto__属性,它指向该对象的原型对象.(所有对象都可以通过__proto__找到Object对象)
```js
let foo = new Foo()
foo.__proto__ === Foo.prototype

const obj = {}
obj.__proto__ === Object.prototype
```
- 函数的__proto__指向Function.prototype(所有函数都可以通过__proto__找到Function对象)
```js
Foo.__proto__ === Function.prototype
```
- 原型对象的__proto__(如Foo.prototype.\__proto__)指向Object.prototype
```js
Foo.prototype.__proto__ === Object.prototype
Function.prototype.__proto__ === Object.prototype
```
- 原型对象都可以通过constructor属性找到构造函数(顶层是Function或Object)
```js
Object.prototype.constructor === Object
obj.__proto__.constructor === Object
Function.prototype.constructor === Function
```
- Object.prototype.\__proto__指向null

![](js-common01.png)
### 原型链
对象之间通过__proto__连接起来，就是原型链。当前对象不存在的属性，通过原型链层层往上找，直到最上层Object对象
![](js-prototype04.png)
### prototype VS \__proto__
- prototype是函数独有的
- \__proto__实际相当于Object.getPrototypeOf(obj),获取对象的原型;是用于实例的

### new VS Object.create()
js中,通过prototype实现继承,new和Object.create()是创建对象,实现继承的方式.
Object.create()可以用第一个参数指定新对象的原型,第二个参数是新对象的属性(需要配置是否可枚举,可改写,可配置)

- 用new创建对象
```js
function Foo() {
    console.log("hi");
}

Foo.prototype.name = "mei";

f1 = new Foo();
f2 = new Foo();

console.log(f1.__proto__); //{name: "mei", constructor: ƒ Foo(), __proto__:Object}
console.log(f2.__proto__); //{name: "mei", constructor: ƒ Foo(), __proto__:Object}

console.log(f1.__proto__ === f2.__proto__); //true
console.log(f1.__proto__ === Foo.prototype); //true

console.log(Foo.prototype.__proto__); // Object.prototype
console.log(Foo.prototype.__proto__.__proto__);//null

console.log(f1==f2);//false

```
![](js-common02.png)
- 用Object.create()创建
```js
obj = {
    name: "mei"
}

obj1 = Object.create(obj);
obj2 = Object.create(obj);

console.log(obj.__proto__); // Object.prototype
console.log(obj1.__proto__); // {name: "mei",  __proto__:Object}
console.log(obj2.__proto__); //{name: "mei",  __proto__:Object}

console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(obj.__proto__ === obj1.__proto__); // false

console.log(obj.__proto__.__proto__); // null
console.log(obj1==obj2); //false

```
![](js-common03.png)

```js
foo = new Foo()
相当于
foo2 = Object.create(Foo.prototype)

foo.__proto__ === foo2.__protp__    // true
```
---
详解Object.create(proto[, propertiesObject])
- proto
新创建对象的原型对象。
- propertiesObject
可选。需要传入一个对象,如果该参数被指定且不为 undefined，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。
```js
let o = Object.create(null) // {} 原型为null的空对象

let o2 = {}
相当于
let o2 = Object.create(Object.prototype) // {} 原型为Object.prototype

o = Object.create({}, { p: { value: 42 } }) // 创建一个以另一个空对象为原型,且拥有一个属性p的对象
// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42, 
    writable: true,
    enumerable: true,
    configurable: true 
  } 
});
```