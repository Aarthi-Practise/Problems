// FUNCTION START
// EDGE CASE: 
// if size=1: print star.
// End if

//EDGE CASE: if size=0: print enter valid number
// End if

// string="";//initializing the string
// for i=1 To sizeOfStarPattern ==>for number of rows
//     for j=1 To i//// for number of stars
// --------------------------------to print stars ----------------------
//          concat "*" to resultant string;
//     End For;
// print string and empty the string
// End For;
// End function 
//call the function with parameter.






// EXPECTED OUTPUT:
// *
// **
// ***
// ****





export const Pattern=(sizeOfStarPattern)=>{
    if(sizeOfStarPattern<=0){
        console.log( "please enter the valid size");
    }
    else if(sizeOfStarPattern==1){
        console.log("*");
    }
    else{
        for(var rows=1;rows<=sizeOfStarPattern;rows++){
            var result="";
            for(var columns=1;columns<=rows;columns++){
                result+="*"
            }
            console.log(result);
        }
    }
}
Pattern(4);