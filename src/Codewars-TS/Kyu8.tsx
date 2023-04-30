import React from "react";

// const parseF = (s: string): number | null => {
//     const num = Number.parseFloat(s);
//     return Number.isNaN(num) ? null : num;
// }
// console.log(parseF('1'))
// console.log(parseF('true'))


// const twoSort = (arr: string[]): string => arr.sort()[0].split('').join('***');
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]))


// const typeOfSum = (a:any, b:any):string => typeof (a + b)
// console.log(typeOfSum(12, 1))
// console.log(typeOfSum('d', 1))
// console.log(typeOfSum(null, 1))


// const solution = (str: string): string => str.split('').reverse().join('')
// console.log(solution('world'))


// const arr2bin = (arr: any[]): string => arr.filter(a => typeof a === 'number').reduce((a, b) => a + b, 0).toString(2)
// console.log(arr2bin([1, 2]))
// console.log(arr2bin([1, 2, 3, 4, 5]))
// console.log(arr2bin([null]))
// console.log(arr2bin([true, true, false, 15]))


// const mango = (quantity: number, price: number): number => (quantity - Math.floor(quantity / 3)) * price
// console.log(mango(3, 3))
// console.log(mango(5, 3))
// console.log(mango(9, 5))


// const remove = (s: string): string => s.replace(/!/g, '') + '!'
// console.log(remove("Hi!"))
// console.log(remove("!Hi"))
// console.log(remove("Hi! Hi!"))


// const move = (pos: number, roll: number): number => pos + roll * 2
// console.log(move(3, 6))

const Kyu8 = () => (
    <div>8kyu</div>
)
export default Kyu8
