---
title: JS-公有-私有-静态属性和方法
date: 2020-10-23 13:49:18
tags: JS
---
#### 公有属性和方法
```js
function User (name, age) {
    this.name = name // 公有属性
    this.age = age
}
User.prototype.getName = function () { // 公有方法
    return this.name
}
```
#### 私有属性和方法
```js
function User (name, age) {
    const name = name // 私有属性
    const age = age
    function getName () { // 私有方法
        return name
    }
}
```
#### 静态属性和方法
js中无需实例化就可调用的属性和方法
```js
function User () {}
User.myName = 'victor' // 静态属性(注意:不能用'name','name'属性为User构造函数本身的保留字段,不能更改,更改也不会生效)
User.getName = function () { // 静态方法
    return this.myName
}
User.getName()
```
#### 特权方法
