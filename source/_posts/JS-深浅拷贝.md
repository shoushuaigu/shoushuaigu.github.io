---
title: 'Js:深浅拷贝'
date: 2020-10-14 15:18:14
tags: 
    - 深浅拷贝
categories: 
            - Js深入
---
## 浅拷贝&深拷贝
对原始数据类型的复制是值的复制
对Object类型的复制是对引用的复制
浅拷贝是不考虑Object类型不区分值和引用复制的方式
深拷贝是完全复制Object类型,产生新的引用,与原Object不影响

---
#### 浅拷贝
```js
const arr = [1,2,{name:'gss'}]
const obj = {name:'vic',person:{name:'gss'}}

const arr2 = [...arr]
const arr3 = arr.concat()
const arr4 = arr.slice()

const obj2 = Object.assign({},obj)
const obj3 = Object.create(obj)

console.log(arr2,arr3,arr4) // 同arr
console.log(obj2,obj3.__proto__)    // 同obj

arr[2].name='3737'
obj.name = '7373'
obj.person.name = "3773"

console.log(arr2,arr3,arr4) // {name:'3737'}
console.log(obj2,obj3.__proto__)    // {name:'vic',person:{name:'3773}} { name: '7373', person: { name: '3773' } }
```
>Object.assign()能实现单层的深拷贝,多层结构则不行

关于Object.assign(target, ...sources)
- target: 目标对象
- sources: 源对象(可多个)
```js
// 复制对象
let obj = {name: 'gss'}
let objClone = Object.assign({}, obj)

// 合并对象
let o1 = {a:1,b:2}
let o2 = {b:'b'}
let o3 = {c:3}
let concatO = Object.assign(o1,o2,o3) // o1也会被改变,相同属性会覆盖:{ a: 1, b: "b", c: 3 }
let concatO2 = Object.assign({}, o1,o2,o3)
```

---

#### 利用JSON.stringify()实现数组,对象的深拷贝
```js
var arr = [1, 2, 3, 4, { value: 5 }];
var arr1 = JSON.parse(JSON.stringify(arr));
arr[4].value = 6;
console.log(arr1); //[1, 2, 3, 4, { value: 5 }]

var obj = {
    name: "mei",
    address: {city: "shanghai"}
}
var obj1 = JSON.parse(JSON.stringify(obj));
obj.address.city = "beijing";
console.log(obj1); //{name: "mei", address:{city: "shanghai"}
```
>该方法不能对undefined, symbol, 函数 进行深度拷贝。

#### 利用递归实现深拷贝
```js
function deepCopy (params) {
    if (typeof params !== 'object') {
        return params
    }
    const targetCopy = params instanceof Array ? [] : {}
    for(const key in params) {
        if (params.hasOwnProperty(key)) {
            targetCopy[key] = typeof params[key] === 'object' ? deepCopy(params[key]) : params[key]
        }
    }
    return targetCopy
}
```