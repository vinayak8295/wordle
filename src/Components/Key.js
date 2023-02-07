import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
function Key({ keyVal, bigKey, disabled }) { 
      const { gameOver, onSelectLetter, onDelete, onEnter } = useContext(AppContext);
   
    const selectLetter = () => {
      if (gameOver.gameOver) return;
      if(keyVal==="ENTER"){
            onEnter();
      }
      else
      if(keyVal==="DELETE"){
            onDelete();
      }
      else
      onSelectLetter(keyVal);
      
    };


    return (
        <div className="key"
        id = {bigKey ? "big" : disabled && "disabled"}
        onClick={selectLetter}>
           {keyVal}
        </div>
  );
}

export default Key;

