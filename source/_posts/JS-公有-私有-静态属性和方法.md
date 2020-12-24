---
title: JS-公有-私有-静态属性和方法
date: 2020-10-23 13:49:18
tags: JS
---
#### 公有属性和方法
公有方法必须通过实例化调用;
公有方法中不能使用this调用静态方法 属性,必须构造函数(对象)本身调用;
公有方法不能调用私有属性方法(调用即是特权方法)
```js
// 在构造函数中
function User (name, age) {
    this.name = name // 公有属性
    this.age = age
}
User.prototype.getName = function () { // 公有方法
    return this.name
}
// 在对象中
const obj = {
    name: 'gss',
    getName: function () {
        return this.name
    }
    getName () {}   // 同上
}
```
---
#### 私有属性和方法
对象的私有方法和属性,外部是不可以访问的;
在方法的内部不是能this调用对象的公有方法、公有属性、特权方法的。
>在对象中创建私有数据的方式被称为模块模式
```js
function User (name, age, sex) {
    this.sex = sex
    const myName = name // 私有属性
    const myAge = age
    function getName () { // 私有方法
        return myName
    }
    function getSex () {    // 私有方法不能this调用公有方法属性
        console.log(this)   // window
        console.log(this.sex)
    }
    this.activeGetSex = function () {
        getSex()
    }
}
let u = new User('g',11,'man')
u.activeGetSex()
// 在对象中,借助闭包实现
const obj = (function () {
    // 私有属性和方法
    const a = 1
    return {
        // 公有
        b: 2,
        getB(){
            console.log(this.b)
        },
        getA(){    // 访问了私有属性,可以认为是特权方法
            console.log(a)
        }
    }
})()
```
---
#### 特权方法
可以访问私有属性和方法的公有方法;
特权方法通过this调用公有方法、公有属性;
在方法体内直接调用私有属性和私有方法。
>特权方法能够在构造函数外面公开访问（仅限于实例化的对象），而且还能够访问私有成员和方法，因此用来做为对象或者构造函数的接口最合适不过了，通过特权方法我们可以控制公有方法对私有属性或方法的访问。 在JS框架的扩展中有很多应用。

>##### 特权方法和公有方法的区别
相同点: 都能访问公有属性,都能在构造函数外公开访问
不同点: 特权方法能访问私有属性和方法,公有方法不能;每个实例都有一份特权方法的副本,公有方法为所有实例共享(在原型上;)
```js
function User (name, age) {
    this.age = age
    var name = name   // 私有属性
    this.getName = function () {    // 特权方法
        console.log(name)
        return name
    }
    this.alertAge = function () {   // 特权方法调用公有方法
        alert(this.getAge())
    }
}
User.prototype.getAge = function () {
    return this.age
}
// 结合模块模式创建对象
const Obj = (function () {
    let _num = 1    // 私有属性
    const _addNum = function (base) {   // 私有方法
        _num += base
        console.log(_num)
    }
    function Foo (baseNum=0) {  // 构造函数
        this.baseNum = baseNum  // 公有属性
        this.getNum = function () { // 特权方法
            console.log(_num)
            return _num
        }
    }
    Foo.prototype.getBaseNum = function () {    // 公有方法
        console.log(this.baseNum)
        return this.baseNum
    }
    Foo.prototype.addNum = function () {    // 特权方法
        _addNum(this.baseNum)
    }
    return Foo
})()
const o = new Obj(10)
o.getBaseNum()
o.getNum()
o.addNum()
o.getNum()
```
---
#### 静态属性和方法
js中无需实例化就可调用的属性和方法;
实例不能调用静态方法属性;
静态方法无法调用公有属性、公有方法、私有方法、私有属性、特权方法和原型属性
```js
function User () {}
User.myName = 'victor' // 静态属性(注意:不能用'name','name'属性为User构造函数本身的保留字段,不能更改,更改也不会生效)
User.getName = function () { // 静态方法
    return this.myName
}
User.getName()
```
---
#### 静态类
静态属性和方法不用上述构造函数的形式,可以直接用字面量的形式创建对象
```js
const User = {
    init: function (name, age) {
        this.name = name
        this.age = age
    },
    getName() {
        return this.name
    }
}
User.init('gss', 18)
User.getName()
User.name
```
