// null
console.log(!null); // true
console.log(!!null); // false

console.log(null === false); // false
console.log(!null === true); // true

// null은 수학적으로 0으로 취급
console.log(null + 123); // 123

// undefined - 선언했지만 값은 정의되지 않고 할당 X
let varb;
console.log(varb); // undefined
console.log(typeof varb); // 'undefined'
console.log(undefined + 10); // NaN

console.log(!undefined) // true
console.log(undefined == null) // true
console.log(undefined === null) // false
console.log(!undefined === !null) // true

// undefined - 정의되지 않은, NaN, type undefined
// null - 값이 없다(명시적인 표현), 0, type object