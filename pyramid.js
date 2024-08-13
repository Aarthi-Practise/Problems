// FUNCTION START
// EDGE CASE: 
// if size=1: print star.
// End if

//EDGE CASE: if size=0: print enter valid number
// End if


// string="";//initializing the string
// for i=1 To sizeOfStarPattern ===> for number of rows
//     for space=1 To sizeOfStarPattern-i
//-----------------------spaces------------------------
//          concat spaces to resultant string;
//     End For;
//     for space=1 To 2*i-1// for number of stars
//------------------stars-------------------------
//          concat "*" to resultant string;
//     End For;
// print string and empty the string
// End For;
// End function 
//call the function with parameter.




//EXPECTED OUTPUT

//    *
//   ***
//  *****
// *******




export const Pattern=(sizeOfStarPattern)=>{
    if(sizeOfStarPattern<=0){
        console.log( "please enter the valid size");
    }
    else if(sizeOfStarPattern==1){
        console.log("*");
    }
    else{

        // ------------------------------------------------OPTIMISED------------------------------------

        for(var rows=1;rows<=sizeOfStarPattern;rows++){
            var result="";
            var spaces=sizeOfStarPattern-rows;
            for(var columns=1;columns<=2*sizeOfStarPattern-1;columns++){
                if(columns<=spaces || columns>2*rows-1+spaces){
                    result+=" ";
                }
                else{
                    result+="*";
                }
            }
            console.log(result);
        }

        // ------------------------------------------------NOT OPTIMISED----------------------------------------

        // for(var i=1;i<=sizeOfStarPattern;i++){
        //     var result="";
        //     for(var j=1;j<=sizeOfStarPattern-i;j++){
        //         result+=" "
        //     }
        //     for(var j=1;j<=2*i-1;j++){
        //         result+="*";
        //     }
        //     console.log(result);
        // }
    }
}
Pattern(3);