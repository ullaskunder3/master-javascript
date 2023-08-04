function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();

  // let sum = "";
  // let carry = 0;
  // let i = a.length - 1;
  // let j = b.length - 1;
  // while(i>=0 || j>=0 || carry !== 0){
  //     const digA = i >= 0? parseInt(a[i]):0;
  //     const digB = j >= 0? parseInt(b[j]):0;
  //     const sumOfDig = digA + digB + carry;
  //     console.log("---------");
  //     console.log("sum: ",sum);
  //     console.log("carry before floor: ",carry);

  //     carry = Math.floor(sumOfDig/10);
  //     const currentDig = sumOfDig % 10;

  //     console.log("a:", a, "b:", b);
  //     console.log("i:", i, "j:", j);
  //     console.log("digA: ",digA);
  //     console.log("digB: ",digB);
  //     console.log("sumOfDig a+b+carry: ",sumOfDig);
  //     console.log("carry sumOfDig/10: ",carry);
  //     console.log("currentDig sumOfDig % 10 = rightMost:",currentDig);
  //     console.log("----+----");

  //     sum = currentDig.toString()+ sum;
  //     console.log("sum after + currentDig.toString(): ",sum);

  //     i--;
  //     j--;
  // }
  // return sum;
}
// console.log(sumStrings("116", "2225"));

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;
  return {
    increment: ()=>{
        return count+=1;
    },
    decrement: ()=>{
        return count-=1;
    },
    reset: ()=>{
        return count = init;
    }
  };
};

const counter = createCounter(5);
counter.increment(); // 6
console.log(counter);
counter.reset(); // 5
console.log(counter);
counter.decrement(); // 4
console.log(counter);