function add(a , b) {
    return (a+b)
  }
  function subtract(a , b) {
    return (a-b)
  }
  function multiply(a , b) {
    return (a*b)
  }
  function divide(a , b) {
    return (a/b)
  }
function increment(n) {
    return (++n)
}
function decrement(n) {
    return (--n)
}
function makeInt(n, base) {
    const parsed = parseInt(n, 10);
    return parsed
console.log(makeInt(' 0xF', 10));
}
function preserveDecimal(n) {
    return parseFloat(n)     
    console.log("3.14159")
}