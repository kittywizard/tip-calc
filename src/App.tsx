import { useState } from 'react';
import Header from "./components/header/Header";
import {StyledApp} from "./styles/container";
import Form from "./components/form/Form";

interface iState {
  checkAmount: number,
  tipAmount: number
}

const App:React.FC = () => {

const [formState, setFormState] = useState<iState>({
  checkAmount: 0,
  tipAmount: 0
});

  return (
    <StyledApp>
      <Header/>
      <Form 
        formState={formState}
        setFormState={setFormState}
      />
   </StyledApp>
  )
}

export default App
