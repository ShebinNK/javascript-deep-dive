alert( 5 % 2 ); // 1, the remainder of 5 divided by 2

alert( 2 ** 2 ); // 2² = 4


let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert('1' + 2 + 2); // "122" and not "14"


alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers



//unary +

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0


//precedence

// Precedence	Name	Sign
// …	…	…
// 14	unary plus	+
// 14	unary negation	-
// 13	exponentiation	**
// 12	multiplication	*
// 12	division	/
// 11	addition	+
// 11	subtraction	-
// …	…	…
// 2	assignment	=
// …	…	…