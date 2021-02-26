---
title: Js-深入理解继承
date: 2020-10-20 16:44:59
tags: 
    - Js原型&继承
categories: 
            - Js深入
---
Js的继承是基于原型实现的

---
常见的继承7种方式:
- 原型继承
- 借用构造函数继承(经典继承)
- 原型链+构造函数的组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承
- ES6 Class继承
---
#### 原型继承
这种方式是把子类原型指向父类实例,子类实例通过原型链找到父类实例,再通过父类实例找到父类原型,实现继承.
```js
function Sup(name) {
    this.name = name
    this.type = 'human'
    this.ob = { // 缺点:由于父类实例属性成为了子类原型属性,所以同下Sup.prototype.obj
        a:1,
        b:2
    }
}
Sup.prototype.getName = function () { console.log(this.name) }
Sup.prototype.obj = {a:1,b:2}   // 缺点:父类原型属性为引用类型时,操作其中一个子类实例会影响其他实例
function Sub(age) {
    this.age = age
}
Sub.prototype = new Sup('gss')  // 缺点:父类参数不能通过子类传递
Sub.prototype.getAge = function () { console.log(this.age) }    // 缺点:子类添加原型属性或方法,必须在实例化父类之后,否则会被覆盖
```
优点:
- 父类/父类原型更新属性和方法时,子类都能访问到
- 简单,易实现

缺点:
- 无法实现多继承(继承多个父类)
- 原型对象的引用属性被多个实例共享,不管是私有还是公有属性
- 创建子类实例不能向父类传参
- 给子类添加原型属性或方法都必须在实例父类之后操作
---
#### 原型式继承
通过Object.create(),将第一个参数作为原型创建对象
```js
function Sup () {}
Sup.prototype.sayHi = function () { console.log('hi~') }

let s = Object.create(Sup)
```
优缺点同上

---
#### 借用构造函数继承(经典继承)
这种方法关键在于:在子类构造函数中通过call()调用父类构造函数
```js
function Sup (name) {
    this.name = name
    this.obj = {    // 解决实例共享父类引用数据
        a:1,
        b:2
    }
}
Sup.prototype.getName = function () {   // 缺点:不能继承原型属性和方法
    console.log(this.name);
}
function Sub (name, age) {
    this.age = age
    Sup.call(this, name)    // 能向父类传参
}
let g = new Sub('gss', 18)
let gg = new Sub('ggss', 180)
g.obj.a = 10
console.log(g, gg);
g.getName() // 报错
```
优点:
- 解决引用数据共享问题,每个子类实例都有单独的实例数据
- 能向父类传参
- 能多继承

缺点:
- 不能继承原型属性,方法
- 每次创建子类都调用父类方法,性能影响
- 实例不是父类的实例,只能是子类的实例
---
#### 原型链+构造函数的组合继承
这种方法关键在于:在子类构造函数中通过call()调用父类构造函数;再将父类实例作为子类原型
```js
function Sup (name) {
    this.name = name
    this.obj = {
        a: 1,
        b: 2
    }
}
Sup.prototype.getName = function () { console.log(this.name) }

function Sub (name, age) {
    this.age = age
    Sup.call(this, name)    // 缺点:调用两次父类(第二次,创建子类实例时)
}
Sub.prototype = new Sup()   // 缺点:调用两次父类(第一次)
Sub.prototype.constructor = Sub // 修复构造函数指向(不修复也能没什么影响,主要考虑规范和清晰指向)

let s = new Sub('gss', 18)
let ss = new Sub('victor', 20)
ss.obj.a = 10
console.log(s, ss)
s.getName()
```
优点:
- 解决引用数据共享问题,每个子类实例都有单独的实例数据
- 能向父类传参
- 能多继承
- 可以继承父类实例和原型方法,属性

缺点:
- 调用了两次构造函数，生成了两份实例
---
#### 寄生式继承
关键在于:创建一个仅用于封装继承过程的函数,该函数以某种方式在内部加强对象,并返回对象(相当于原型式继承封装)
```js
function createObj (obj) {  // 封装继承过程的函数
    let result = Object.create(obj) // 原型式继承
    result.name = 'gss' // 加强对象
    return result
}
let obj = {
    age: 1,
    sex: 0
}
let o = createObj(obj)
```
---
#### 寄生组合式继承
类似组合继承(原型链+构造函数),也是把继承过程封装在一个函数内
```js
function inheritPrototype (sup, sub) {
    let protoType = Object.create(sup.prototype)
    protoType.constructor = sub
    sub.prototype = protoType
}
function Sup (name) {
    this.name = name
    this.obj = {
        a: 1,
        b: 2
    }
}
Sup.prototype.getName = function () { console.log(this.name) }

function Sub (name, age) {
    Sup.call(this, name)
    this.age = age
}
inheritPrototype(Sup, Sub)

let s = new Sub('gss', 18)
let ss = new Sub('victor', 20)
ss.obj.a = 10
console.log(s, ss)
```
---
#### ES6 Class继承
一. class
1. ES6中class可以看作是语法糖,绝大部分功能es5都能做到;
2. 其内部默认严格模式;
3. constructor是类的默认方法,必须有,不写会隐式添加
4. 不存在变量提升
5. 本质是function
6. 不提供私有方法和属性,提案方法属性前加#标识私有
7. 用static标识静态方法,没有静态属性,须在类外部添加静态属性
8. name属性返回类名,表达式形式等号后的名(.name)只能在类的内部使用,正常调用用等号前的名
9. 内部可以用get,set取存值
10. 静态方法可以被子类继承,可用super调用
11. new.target属性用于确定构造函数是怎么调用的,普通函数直接调用为undefined,通过new调用指向函数本身,类中指向被new的类(类必须new,普通调用报错)
12. 命名首字大写
```js
let MySup = class Sup {
    constructor (name) {
        console.log(new.target)    // 普通形式函数不是通过new调用时是undefined(类必须new调用,否则报错),
        this.name = name
        this._age = 18  // age属性名称不能与get,set同名,故用_age
    }
    static getClass () {    // 静态方法
        console.log(Sup.name)   // Sup
        console.log(this)   // [Function: Sup]
    }
    getName () {    // 没特殊标识的方法都在原型上定义
        console.log(this.name)  // gss
    }
    get age () {    // 取存函数须实例化调用
        return this._age
    }
    set age (val) {
        this._age = val
    }
}
console.log(typeof MySup) // function
let s = new MySup('gss')    // new.target.name == Sup
s.getName()
MySup.getClass()
console.log(MySup.name)
console.log(s.age)  // 18
s.age = 20
console.log(s.age)  // 20
MySup.sex = 0   // 静态属性
console.log(MySup.sex)

class Sub extends MySup {}

console.log(Sub.sex)    // 父类静态属性,方法能被继承
MySup.getClass()
new Sub()   // new.target.name == Sub 
```
---
二. class的继承
1. 继承通过extends关键字
2. super既能当函数用,也能当对象用
    - 作为函数时表示父类构造函数
    - 虽然是父类构造函数,但返回的实例是子类,即super内部改变this指向
    - 作为对象时,在普通方法中指父类原型对象,在静态方法中只父类
    - 通过super赋值时相当于this,是子类的实例属性
```js
class Sub extends Sup {
    constructor (a,b,c) {
        super(a,b)
        super.c = c // 相当于this
    }
    static showStatic () {  // 静态方法内调用super的静态方法
        super.show()    // 'static'
    }
    showInstance () {   // 原型方法内调用super的原型方法
        super.show()    // 'instance'
    }
}
let s = new Sub(1,2)
console.log(s.show());  // 'instance'
console.log(Sub.show());    // 'static'
console.log(s.showInstance());  // 'instance'
console.log(Sub.showStatic());  // 'static'
```
3. class作为语法糖,同时有prototype和__proto__,因此同时存在两条继承链
    - 子类__proto__表示构造函数的继承,指向父类
    - 子类的prototype的__proto__表示方法的继承,指向父类的prototype
```js
class Sup {}
class Sub extends Sup{}
Sub.__proto__ === Sup
Sub.prototype.__proto__ === Sup.prototype
// Sup作为基类,就是普通构造函数
Sup.__protp__ === Function.prototype
Sup.prototype.__proto__ === Object.prototype

class A extends null {}
A.__proto__ === Function.prototype
A.prototype.__proto__ === undefined
```
