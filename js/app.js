const array1 = [15,22,3,4]
const array2 = [5,12,1234,124]
const array3 = [...array1 , ...array2]
// const max = Math.max(...array) //spread operator
// console.log(array3)
// 1,4,2,53,35
// array destructuring
const [hakim, suhad,doli, keya] = array1
const object = {
    name:"doli mem",
    roll : 1,
    batch : 2238
}
// object destructuring
const { roll, batch,name : amarName}= object
console.log(hakim)