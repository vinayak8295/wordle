import React from "react";
import wordLib from "word-lib";

wordLib.exists("word")
function WordelLogic(props) {
    let word = "money";
    function validate(val){
        if(val.length===5 && wordLib.exists(val)){
            return true;
        }else{
            return false;
        }
    }
    function CheckWord(val){
       if(val===word){
        return true;
       }else{
        return false;
       }
    }

    function HowClose(val){
        // let 
        // for(let i=0;i<5;i++){
        //     let OrigWord =  
        //     for(let j=0;j<5;j++){

        //     }
        // }

    }
    return (
      <div>
      {validate(props.val)?
      (
        CheckWord(props.val)?
        console.log("word found"):
        console.log("word not found")
        ):
        console.log("not a valid word or wrong length")}
      </div>
    );
  }
  
  export default WordelLogic;