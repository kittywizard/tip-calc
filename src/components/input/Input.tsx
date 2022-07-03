import { StyledInput } from "./input-styles";

interface iProps {
    type: string,
    placeholder: string,
    name: string
}

const Input:React.FC<iProps> = ({type, placeholder}) => {
    return (
        <>
            <StyledInput type={type} placeholder={placeholder}/>
        </>
    )
}

export default Input;

// type="text" 
// placeholder="name" 
// name="name"
// value={formState.name}
// onChange={(event) => handleChange(event)}
// ref={inputNameRef}
// autoFocus={inputNameRef.current === document.activeElement}