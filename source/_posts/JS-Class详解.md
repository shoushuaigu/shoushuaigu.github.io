---
title: Js-Class详解
date: 2020-11-19 15:03:44
tags: 
    - Js属性&方法
    - ES6
categories: 
            - ES6
---
### 定义类
类是'特殊的函数',两种声明方式,类声明,类表达式
类不存在提升问题,需要先生命,否则会报错
首字母大写
```js
// 类声明
class Super {
    constructor () {

    }
}
// 类表达式
const Super = class {}  // 匿名表达式   super.name = 'super'
const Super = class Super2 {}   // 具名表达式   super.name = 'super2'
```
### 类体和方法定义
{}内为类体,默认严格模式
constructor构造函数,必须有且只能有一个,不写会默认添加
#### 原型方法
```js
class Super {
    constructor (a, b) {
        this.a = a
        this.b = b
    }
    get area () {   // getter
        return this.getArea()
    }
    getArea () {
        return this.a * this.b
    }
}
let s = new Super(2, 5)
s.area  // getter属于原型方法,须实例化调用
```
#### 静态方法
static关键字声明
```js
class Super {
    constructor () {}
    static showArea (a, b) {
        return a * b
    }
}
Super.showArea(2, 5)
```
#### 私有属性和原型属性
必须在类外定义
```js
class Super {}
Super.age = '18'
Super.prototype.sex = 1
```
### 关于this绑定
由于class默认严格模式,当this没有指定时会是undefined而不是global
```js
class Super {
    constructor () {}
    showThis () {
        return this
    }
}
function Super2 () {}
Super2.prototype.showThis = () => {
    return this
}
let s = new Super()
let s2 = new Super2()
// s.showThis = Super
// s2.showThis = global     箭头函数this绑定看定义时其外层函数环境,如果不用箭头函数则为Super2
let showThis = s.showThis
let showThis2 = s2.showThis
// showThis = undefined     严格模式
// showThis2 = global       非严格模式
```
### extends扩展子类
子类构造函数中须调super()
extends也可继承构造函数类
```js
class Animal {
    constructor (name) {
        this.name = name
    }
    wangwang () {
        console.log(this.name);
    }
}
function Animal (name) {
    this.name = name
}
Animal.prototype.wangwang = function () {
    console.log(this.name);
}
class Dog extends Animal {
    constructor (name) {
        super(name)
    }
    ww () {
        this.wangwang()
        // super.wangwang() 超类调用
    }
}
let dog = new Dog('pdd')
dog.ww()
```