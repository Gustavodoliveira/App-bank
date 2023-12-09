import React from "react";

function handleSubmit (e: React.FormEvent):void {
  e.preventDefault();
}

function logToConsole (item: any): undefined {
  console.log(item);
  
}


export  { handleSubmit, logToConsole} ;