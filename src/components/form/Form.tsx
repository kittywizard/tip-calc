import { StyledForm } from "./form-styles";
import Label from "../label/Label";
import Input from "../input/Input";
import Button from "../button/Button";

const Form:React.FC = () => {

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(event);
    }
    
    return (
        <StyledForm onSubmit={e => handleSubmit(e)}>
            <Label name='Amount'/>
            <Input 
                type="number"
                name="Amount"
                placeholder='Check Amount'
            />
            <Label name="Tip Amount"/>
            <Input 
                type="number"
                name="Tip Amount"
                placeholder="0%"
            /> 

            <Button name="Submit"/>
        </StyledForm>
    )
}

export default Form;