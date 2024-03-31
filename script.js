function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        if (str.indexOf(char) === i && str.lastIndexOf(char) === i) {
            return char;
        }
    }
    
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
