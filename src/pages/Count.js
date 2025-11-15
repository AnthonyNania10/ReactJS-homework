import React from 'react';
import CountButton from '../components/CountButton/CountButton';

const Count = () => {
  return (
    <div> FOR THE COUNTER
        <CountButton increamentBy={1} buttonColor={"blue"}/>
        <CountButton increamentBy={5} buttonColor={"red"}/>
   </div> )}

export default Count