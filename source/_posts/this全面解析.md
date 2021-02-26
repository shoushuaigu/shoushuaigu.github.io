---
title: this全面解析
date: 2021-02-19 15:54:02
tags:
    - this全面解析
categories: 
            - Js深入
---
在执行上下文中介绍了this binding,也就是js的this
有四种可执行代码能创建上下文,global code, function code,module,eval.接下来说global,function中this指什么.
### global code中this
js执行global code前,创建全局上下文,入栈底,其中this binding绑定全局对象,浏览器中指window

### function code中this
JavaScript是静态作用域，词法环境是由代码结构决定的，开发把代码写成什么样，词法环境就是怎么样，跟方法在哪里调用没有关系。但是对于函数的this刚好反过来(箭头函数除外,和定义时的词法环境有关)，跟代码在哪里定义没有关系，而跟代码在哪里调用有关系。
一般我们调用函数有以下四种方式：
- 普通函数调用: fn()
- 对象调用: obj.fn()
- 构造函数调用: new Fn().fn()
- call,apply,bind:
    - fn.call(this, a,b,c)
    - fn.apply(this, arr)
    - fn.bind(this, a,b,c)()

>  严格模式时，函数内的this绑定严格指向传入的thisArgument。非严格模式时，若传入的thisArgument不为undefined或null时，函数内的this绑定指向传入的thisArgument；为undefined或null时，函数内的this绑定指向全局的this。

#### 普通函数调用
this指向全局
```js
var a = 1
function fn () {
    console.log(this.a)
}
fn()    // 1
```
---
#### 对象调用
this指向该对象
```js
function fn () {
    console.log(this.a)
}
var obj = {
    a:  1,
    fn: fn
}
obj.fn()    // 1
```

- 需要注意的两点

```js
var a = 2
function fn () {
    console.log(this.a)
}
var obj = {
    a:  1,
    fn: fn
}
var obj2 = {
    a: 3,
    obj: obj
}

var f = obj.fn
f() // 2    全局调用
obj2.obj.fn()   // 1    最近的对象调用为准
```
---
#### 构造函数调用
this指向实例
```js
function Fn (a) {
    this.a = a
}
let fn = new Fn(1)
fn.a    // 1
```
---
#### call,apply,bind
call、apply、bind调用，可以显示传递对象给函数的thisArg，默认这几个函数的第一个形参是thisArg:
```js
Function.prototype.apply( thisArg, argArray )
Function.prototype.call( thisArg , arg1, [ arg2, ... ] )
Function.prototype.bind( thisArg , [ arg1, [ arg2, ... ] ] )
```
当thisArg是null或undefined时,非严格下指向全局

---
#### 箭头函数this
箭头函数在调用的时候不会绑定this，它会去词法环境链上寻找this（parent scope），所以箭头函数的this取决于它定义的位置（包裹箭头函数的第一个普通函数的this），也就是箭头函数会跟包着它的作用域共享一个词法作用域。
```js
window.a = 10
const foo = () => {     // 箭头函数定义,外层是window,即this指向window
    console.log(this.a)
}
foo.call({a: 20}) // 10     箭头函数this不能改变

let obj = {
    a: 20,
    foo: foo
}
obj.foo() //10  箭头函数this与调用无关

function bar() {
    foo()
}
bar.call({a: 20}) //10
```
箭头函数this和哪里调用无关,与定义时,其外层函数this指向相同;
箭头函数this不能手动更改,但更改其外层函数this指向,间接改变其指向.
```js
var a = 1
function bar() {
    ( () => {
        console.log(this.a)
    })()
}
var obj = { a: 2 }
bar()   // 1
bar.call(obj)   // 2
/* 
箭头函数定义时,觉得其this指向bar,改变bar的this指向,间接影响箭头函数
 */
```
---
### 总结
- 箭头函数中没有this绑定，this的值取决于其创建时所在词法环境链中最近的this绑定

- 非严格模式下，函数普通调用，this指向全局对象

- 严格模式下，函数普通调用，this为undefined

- 函数作为对象方法调用，this指向该对象

- 函数作为构造函数配合new调用，this指向构造出的新对象

- 非严格模式下，函数通过call、apply、bind等间接调用，this指向传入的第一个参数, 传入的第一个参数若为undefined或null，this指向全局对象

- 格模式下函数通过call、apply、bind等间接调用，this严格指向传入的第一个参数