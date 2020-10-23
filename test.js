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

function User () {}
User.name = 'victor'
console.log(User.name)