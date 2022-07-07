import { useState, useRef } from "react";
import { StyledForm } from "./form-styles";

import Label from "../label/Label";
import Input from "../input/Input";
import Button from "../button/Button";

interface iState {
    checkAmount: number,
    tipAmount: number
  }

  interface FormProps {
    setDisplayResults: (prevState: boolean) => void
  }

const Form:React.FC<FormProps> = ({setDisplayResults}) => {

    const [formState, setFormState] = useState<iState>({
        checkAmount: NaN,
        tipAmount: NaN
      });

      const inputCheckRef = useRef<HTMLInputElement>(null);
      const inputTipRef = useRef<HTMLInputElement>(null);

      function handleFormChange(event: any) {

        setFormState(prevState => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
      }

    function handleSubmit(event: any) {
        event.preventDefault();
        setDisplayResults((prevState: boolean) => !prevState);
        const tipPercentage: number = formState.tipAmount / 100;

        const newTotal: number = formState.checkAmount * tipPercentage;
        //toFixed the number
        console.log(newTotal);
    }
    
    return (
        <StyledForm onSubmit={e => handleSubmit(e)}>
            <Label name='Amount'/>
            <Input 
                type="number"
                name="checkAmount"
                placeholder='Check Amount'
                value={formState.checkAmount}
                handleChange={handleFormChange}
                inputRef={inputCheckRef}
            />
            <Label name="Tip Amount"/>
            <Input 
                type="number"
                name="tipAmount"
                placeholder="0%"
                value={formState.tipAmount}
                handleChange={handleFormChange}
                inputRef={inputTipRef}
            /> 

            <Button name="Submit"/>
        </StyledForm>
    )
}

export default Form;