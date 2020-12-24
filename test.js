// const arr = [1,2,{name:'gss'}]
// const obj = {name:'vic',person:{name:'gss'}}

// const arr2 = [...arr]
// const arr3 = arr.concat()
// const arr4 = arr.slice()

// const obj2 = Object.assign({},obj)
// const obj3 = Object.create(obj)
// const obj4 = deepCopy(obj)

// console.log(arr2,arr3,arr4)
// console.log(obj2,obj3.__proto__)

// arr[2].name='3737'
// obj.name = '7373'
// obj.person.name = "3773"

// console.log(arr2,arr3,arr4)
// console.log(obj2,obj3.__proto__, obj4)

// function deepCopy(params) {
//     if (typeof params !== 'object') {
//         return params
//     }
//     const copyTarget = params instanceof Array ? [] : {}
//     for (const key in params) {
//         if (params.hasOwnProperty(key)) {
//             copyTarget[key] = typeof params[key] === 'object' ? deepCopy(params[key]) : params[key]
//         }
//     }
//     return copyTarget
// }

// function Super (type) {
//     const privateProp = '私有属性'
//     this.type = type || 'default'
// }
// Super.prototype.likes = [{sport: ['football', 'basketball']}, {songs: ['ronghaoLi', 'jay']}]
// Super.prototype.getType = function () {
//     console.log(this.type)
//     return this.type
// }

// function Sub (name) {
//     this.name = name
// }
// Sub.prototype = new Super()
// Sub.prototype.getName = function () {
//     console.log(this.name)
//     return this.name
// }

// let sub = new Sub('victor')

// Super.prototype.likes[1].songs.push('esan')

// console.log(new Super('person'))
// console.log(sub.prototype)
// console.log(sub.likes)
// console.log(sub.name, sub.type)
// sub.getName()
// sub.getType()

// function User (age) {
//     this.age = age
//     this.getName = function () {
//         console.log(this.myName)
//     }
//     const getAge = () => {
//         console.log(this.age)
//     }
//     this.init = () => {
//         getAge()
//     }
// }
// User.myName = 'victor'
// User.prototype.getName = function () {
//     console.log(this.myName)
// }
// console.log(User.myName)
// const u = new User(18)
// u.getName()
// // User.getName()
// u.init()
// const obj = {
//     name: 'gss',
//     getName() {
//         console.log(this.name)
//         return this.name
//     }
// }
// obj.getName()

// const obj = (function () {
//     const a = 1
//     return {
//         b: 2,
//         getA () {
//             console.log(a, this.b)
//         }
//     }
// })()
// obj.getA()

// const Obj = (function () {
//     let _num = 1
//     const _addNum = function (base) {
//         _num += base
//         console.log(_num)
//     }
//     function Foo (baseNum=0) {
//         this.baseNum = baseNum
//         this.getNum = function () {
//             console.log(_num)
//             return _num
//         }
//     }
//     Foo.prototype.getBaseNum = function () {
//         console.log(this.baseNum)
//         return this.baseNum
//     }
//     Foo.prototype.addNum = function () {
//         _addNum(this.baseNum)
//     }
//     return Foo
// })()
// const o = new Obj(10)
// o.getBaseNum()
// o.getNum()
// o.addNum()
// o.getNum()

// function Foo () {}
// Foo.age = 18
// Foo.prototype.getAge = function () {
//     console.log(this.age)
// }
// Foo.getAge = function () {
//     console.log(this.age)
// }
// const foo = new Foo()
// foo.getAge()
// Foo.getAge()

// const obj = {
//     init: function (name, age) {
//         this.name = name
//         this.age = age
//     },
//     getName() {
//         console.log(this.name)
//     }
// }
// console.log(obj)
// obj.init('gss', 18)
// obj.getName()
// const obj2 = Object.create(obj)
// console.log(obj2)
// obj2.init('v', 1)
// console.log(obj2)
// obj2.getName()

// function Foo (name) {
//     var name = name
// }
// Foo.prototype.getName = function () {
//     console.log(name)
// }
// const foo = new Foo('vic')
// foo.getName()

// function User (name, age) {
    
//     var name = name   // 私有属性
//     this.age = age
//     this.getName = function () {    // 特权方法
//         console.log(name)
//         return name
//     }
//     this.alertAge = function () {
//         console.log(this.getAge())
//     }
// }
// User.prototype.getAge = function () {
//     return this.age
// }
// const u = new User('gss', 19)
// u.alertAge()
// u.getName()

// function User (name, age, sex) {
//     this.sex = sex
//     const myName = name // 私有属性
//     const myAge = age
//     function getName () { // 私有方法
//         return myName
//     }
//     function getSex () {
//         console.log(this)
//         console.log(this.sex)
//     }
//     this.activeGetSex = function () {
//         getSex()
//     }
// }
// let u = new User('g',11,'man')
// u.activeGetSex()

// const obj = {
//     init: function (name) {
//         this.name = name
//     },
//     getName: function () {
//         console.log(this.name)
//     }
// }
// obj.init('gss')
// obj.getName()
// console.log(obj)

// class Super {
//     constructor () {}
//     get he () {
//         return 10
//     }
// }
// let s = new Super()
// console.log(Super.displayName, Super.he);
// console.log(s.displayName, s.he);

// function Method (name) {
//     this.name = name
// }
// Method.prototype.getName = function () { return this.name }

// let m = new Method('gss')
// console.log(m);
// class Super {
//     constructor () {}
//     showThis () {
//         return this
//     }
// }
// function Super2 () {}
// Super2.prototype.showThis = () => {
//     return this
// }
// let s = new Super()
// let s2 = new Super2()
// console.log(s.showThis());
// console.log(s2.showThis());
// let showThis = s.showThis
// let showThis2 = s2.showThis
// console.log(showThis());
// console.log(showThis2());
// class Rectangle {
//     height = 0;
//     width;
//     constructor(height, width) {    
//       this.height = height;
//       this.width = width;
//     }
//   }
//   let r = new Rectangle()
//   console.log(r);
//   console.log(r.__proto__);
// class Animal {
//     constructor (name) {
//         this.name = name
//     }
//     wangwang () {
//         console.log(this.name);
//     }
// }
// // function Animal (name) {
// //     this.name = name
// // }
// // Animal.prototype.wangwang = function () {
// //     console.log(this.name);
// // }
// class Dog extends Animal {
//     // constructor (name) {
//     //     super(name)
//     // }
//     ww () {
//         this.wangwang()
//     }
// }
// let dog = new Dog('pdd')
// dog.ww()
// function Sup () {
//     this.obj = {
//         a:1,
//         b:2
//     }
// }
// function Sub () {}
// Sub.prototype = new Sup()
// let a = new Sub()
// let b = new Sub()
// console.log(a.obj, b.obj);
// a.obj.a = 10
// console.log(a.obj, b.obj);
// function Sup (name) {
//     this.name = name
//     this.obj = {
//         a:1,
//         b:2
//     }
// }
// Sup.prototype.getName = function () {
//     console.log(this.name);
// }
// function Sub (name, age) {
//     this.age = age
//     Sup.call(this, name)
// }
// let g = new Sub('gss', 18)
// let gg = new Sub('ggss', 180)
// g.obj.a = 10
// console.log(g, gg);
// g.getName()

// function Sup (name) {
//     this.name = name
//     this.obj = {
//         a: 1,
//         b: 2
//     }
// }
// Sup.prototype.getName = function () { console.log(this.name) }

// function Sub (name, age) {
//     this.age = age
//     Sup.call(this, name)
// }
// Sub.prototype = new Sup()
// Sub.prototype.constructor = Sub

// let s = new Sub('gss', 18)
// let ss = new Sub('victor', 20)
// ss.obj.a = 10
// console.log(s, ss)
// s.getName()

// function Sup () {

// }
// Sup.prototype.sayHi = function () { console.log('hi~') }

// let s = Object.create(Sup)

// function createSub (sup, age) {
//     let target = Object.create(sup)
//     target.age = age
//     return target
// }
// function Sup (name) {
//     this.name = name
//     this.obj = {
//         a: 1,
//         b: 2
//     }
// }
// Sup.prototype.getName = function () { console.log(this.name) }

// let s = createSub(new Sup ('gss'), 18)
// let ss = createSub(new Sup ('victor'), 20)
// ss.obj.a = 10
// console.log(s, s.name, s.obj, ss.obj)
// s.getName()

// function createObj (obj) {
//     let result = Object.create(obj)
//     result.name = 'gss'
//     return result
// }
// let obj = {
//     age: 1,
//     sex: 0
// }
// let o = createObj(obj)
// console.log(o, o.age);

// function inheritPrototype (sup, sub) {
//     let protoType = Object.create(sup.prototype)
//     protoType.constructor = sub
//     sub.prototype = protoType
// }
// function Sup (name) {
//     this.name = name
//     this.obj = {
//         a: 1,
//         b: 2
//     }
// }
// Sup.prototype.getName = function () { console.log(this.name) }

// function Sub (name, age) {
//     Sup.call(this, name)
//     this.age = age
// }
// inheritPrototype(Sup, Sub)

// let s = new Sub('gss', 18)
// let ss = new Sub('victor', 20)
// ss.obj.a = 10
// console.log(s, ss)

// let MySup = class Sup {
//     constructor (name) {
//         console.log(new.target)    // 普通形式函数不是通过new调用时是undefined(类必须new调用,否则报错),
//         this.name = name
//         this._age = 18  // age属性名称不能与get,set同名,故用_age
//     }
//     static getClass () {    // 静态方法
//         console.log(Sup.name)   // Sup
//         console.log(this)   // [Function: Sup]
//     }
//     getName () {    // 没特殊标识的方法都在原型上定义
//         console.log(this.name)  // gss
//     }
//     get age () {    // 取存函数须实例化调用
//         return this._age
//     }
//     set age (val) {
//         this._age = val
//     }
// }
// console.log(typeof MySup) // function
// let s = new MySup('gss')    // new.target.name == Sup
// s.getName()
// MySup.getClass()
// console.log(MySup.name)
// console.log(s.age)  // 18
// s.age = 20
// console.log(s.age)  // 20
// MySup.sex = 0   // 静态属性
// console.log(MySup.sex)

// class Sub extends MySup {}

// console.log(Sub.sex)    // 父类静态属性,方法能被继承
// MySup.getClass()
// new Sub()   // new.target.name == Sub 

// class Sup {
//     constructor (a,b) {
//         this.a = a
//         this.b = b
//     }
//     static show () {
//         console.log('static');
//     }
//     show () {
//         console.log('instance');
//     }
// }
// class Sub extends Sup {
//     constructor (a,b) {
//         super(a,b)
//     }
//     static showStatic () {  // 静态方法内调用super的静态方法
//         super.show()    // 'static'
//     }
//     showInstance () {   // 原型方法内调用super的原型方法
//         super.show()    // 'instance'
//     }
// }
// let s = new Sub(1,2)
// console.log(s.show());  // 'instance'
// console.log(Sub.show());    // 'static'
// console.log(s.showInstance());  // 'instance'
// console.log(Sub.showStatic());  // 'static'

// let str = 'asd'
// let a = Array.from(str)
// console.log(a); // [ 'a', 's', 'd' ]

// let baseArr = [1,2,3,4]
// let arr = Array.from(baseArr, item => item*2)
// console.log(arr);   // [ 2, 4, 6, 8 ]
// let obj = {
//     controlItem (item) {
//         return item * 3
//     }
// }
// let arr2 = Array.from(baseArr, function (item) { return this.controlItem(item) }, obj)
// console.log(arr2);  // [ 3, 6, 9, 12 ]

// let arrObj = {  // 类数组对象
//     'a': 0, // 非索引属性
//     1: 1,   // 索引属性
//     3: 3,   // 索引值排序混乱也会按正常索引顺序
//     2: 2,
//     4: {a: 1},
//     6: 6,   // 索引值与length不符
//     length: 6   // 必须有length,没有会转出[]
// }
// console.log(Array.from(arrObj));   // [ undefined, 1, 2, 3, { a: 1 }, undefined ]
// let copyArr = Array.from(arrObj)  // 浅拷贝,影响源数据
// copyArr[4].a = 'a'  // [ undefined, 1, 2, 3, { a: 'a' }, undefined ]
// console.log(copyArr, arrObj);   // { '1': 1, '2': 2, '3': 3, '4': { a: 'a' }, '6': 6, a: 0, length: 6 }

// Array.from.length // 1
// console.log(Array.from({length: 2}));   // [ undefined, undefined ]
// console.log(Array.from({length: 2}, (item, i) => i));   // [ 0, 1 ]

// let map = new Map([['a',1],['b',2],['c',3]])
// console.log(map);   // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
// console.log(Array.from(map));   // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// console.log(Array.from(map.values()));  // [ 1, 2, 3 ]
// console.log(Array.from(map.keys()));    // [ 'a', 'b', 'c' ]

// let set = new Set([1,2,3,4])
// console.log(set);
// console.log(Array.from(set));
// console.log([...set]);

// let arr = [1,2,3,4]
// let arr2 = [4,5,6]
// // arr.push(arr2)
// // [].push.apply(arr,arr2)
// // console.log(arr, arr2, arr3);
// // console.log(arr.reverse(), arr);
// let s = arr.splice(1,0,4,5,6)
// console.log(s);
// console.log(arr);
// let arr = new Array(5)
// arr.fill()
// console.log(new Array(3).fill(0));

// let arr = [1,5,3,11,44,22]
// // console.log(arr.sort((a,b) => a-b));
// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic' },
//     { name: 'Zeros', value: 37 }
//   ];
  
//   // sort by value
//   items.sort(function (a, b) {
//     let c = a.value - b.value
//     return c ? c : -1
//   });
//   console.log(items);

// let arr = [
//     {value: 1},
//     {value: 2},
//     {value: 3}
// ]
// let arr = [1,2,3]
// let arrIterator = arr.entries()
// console.log(arrIterator);
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());

// var arr = [{a:"a"}, 'c', "b", "c"];
// var iter = arr.entries();
// var a = [];

// // for(var i=0; i< arr.length; i++){   // 实际使用的是这个
// for(var i=0; i< arr.length+1; i++){    // 注意，是length+1，比数组的长度大
//     var tem = iter.next();             // 每次迭代时更新next
//     console.log(tem.done);             // 这里可以看到更新后的done都是false
//     if(tem.done !== true){             // 遍历迭代器结束done才是true
//         console.log(tem.value);
//         a[i]=tem.value;
//     }
// }

// console.log(a);                         // 遍历完毕，输出next.value的数组
// let arrIterator = arr.values()
// console.log(arrIterator);
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// let arr = [1,2,,2,1]
// console.log(arr.indexOf(1, 1));    // 4
// console.log(arr.lastIndexOf(2, 1)); // 1
// console.log(arr.lastIndexOf(2, 2)); // 1
// console.log(arr.lastIndexOf(2, 3)); // 3
// console.log(arr.keys());
// console.log(arr.keys().next());

// arr.forEach(item=> {
//     console.log(item);
// })
// for (const item of arr) {
//     console.log(item);
// }
// for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     console.log(item);
// }

// let arr = [1,2,[{a:1},4,[5,6]]]
// let arrFlat = arr.flatMap(item => item)
// // arrFlat[2].a = 2
// console.log(arrFlat);
// console.log(arr);

// let arr = ['asd','asd']
// let arrmap = arr.flatMap(item=>item.split(''))
// console.log(arrmap);

let arr = ['a','b','c','d','e','f']
arr.copyWithin(2,1)
console.log(arr);   // [ 'a', 'c', 'd', 'e', 'f', 'f' ]