// FUNCTION START
// EDGE CASE: 
// if size=1: print star.
// End if

//EDGE CASE: if size<=0 : print enter valid number
// End if

// string="";//initializing the string
// for i=1 To sizeOfStarPattern ===> for number of rows
// --------------------------------to print stars first half of pattern----------------------
//     for j=1 To i // for number of stars
//          concat "*" to resultant string;
//     End For;
// print string and empty the string
// End For;


// --------------------------------to print stars second half of pattern----------------------
// for i=sizeOfStarPattern-1 To 1// for number of stars
//     for j=1 To i
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
// **
// *





export const clockwise=(sizeOfStarPattern)=>{
    if(sizeOfStarPattern<=0){
        console.log( "please enter the valid size");
    }
    else if(sizeOfStarPattern==1){
        console.log("*");
    }
    else{
        // -------------------------------------------OPTIMISED-----------------------------------------

        var count=1;
        for(var rows=1;rows<=(sizeOfStarPattern+sizeOfStarPattern-1);rows++){
            var result="";
            for(var column=1;column<=count;column++){
                result+="*"
            }
            if(rows<sizeOfStarPattern){
                count++;
            }
            // else if(i==sizeOfStarPattern){
            //     c=sizeOfStarPattern-1;
            // }
            else{
                count--;
            }
            console.log(result);
        }
        

        // ------------------------------------NOT OPTIMISED------------------------------------
        // for(var i=1;i<=(sizeOfStarPattern+sizeOfStarPattern-1);i++){
        //     var result="";
        //     for(var j=1;j<=c;j++){
        //         result+="*"
        //     }
        //     for(var i=sizeOfStarPattern-1;i>=1;i--){
        //         var result="";
        //         for(var j=1;j<=i;j++){
        //             result+="*"
        //         }
        //         console.log(result);
        //     }
        // }
    }
}
clockwise(4);