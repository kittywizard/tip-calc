import { useState } from 'react';
import Header from "./components/header/Header";
import {StyledApp} from "./styles/container";
import Input from "./components/input/Input";
import Label from './components/label/Label';

const App:React.FC = () => {

  return (
    <StyledApp>
      <Header/>
      <Label name='Amount'/>
      <Input 
        type="text"
        placeholder='Check Amount'
      /> 
   </StyledApp>
  )
}

export default App
