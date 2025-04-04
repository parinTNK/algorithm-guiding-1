const moveZeroes = function (nums) {

let arr = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      arr.push(nums[i]);
    }
  }
  console.log(arr);
  for (let i = arr.length; i < nums.length; i++) {
    arr.push(0);
  }
  console.log(arr);
  return arr;
}

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]


//! หากต้องการโค้ดที่ ประหยัดพื้นที่ และ มีประสิทธิภาพสูงกว่า (โดยเฉพาะเมื่อ array มีขนาดใหญ่) ควรใช้ 2-pointer

// *####################################################################
// *####################################################################
// *####################################################################


let num = [1,2,3,4,5,6,7,8,9]


const evenAndOdd = (num) => {
  let even = []
  let odd = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i])
    } else {
      odd.push(num[i])
    }
  }
  return [...even, ...odd]
}
const result3 = evenAndOdd(num)
console.log(result3);

