// type conversions

// toString
let data = false;
console.log("Data: " + data + ", type: " + typeof data);
data = String(data);
console.log("Data: " + data + ", type: " + typeof data);

// toNumber (explicit)
let str = "123";
console.log("Data: " + str + ", type: " + typeof str);
let num = Number(str);
console.log("Data: " + num + ", type: " + typeof num);

// toBoolean (explicit)
let msg = "hello";
let emptyString = "";
console.log("1: " + Boolean(1) + "\n0: " + Boolean(0) + "\nhello: " + Boolean(msg) + "\nempty string: " + Boolean(emptyString));


// "" + 1 + 0  10
// "" - 1 + 0  -0
// true + false    1
// 6 / "3" 2
// "2" * "3"   6
// 4 + 5 + "px"    9px
// "$" + 4 + 5 $45
// "4" - 2 2
// "4px" - 2 nan   
// 7 / 0   Infinity
// "  -9\n" + 5
// "  -9\n" - 5
// null + 1    1
// undefined + 1   nan