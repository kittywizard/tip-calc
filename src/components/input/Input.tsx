import { StyledInput } from "./input-styles";

interface iProps {
    type: string,
    placeholder: string,
    name: string,
    value: number
    handleChange: (event: any) => any,
    inputRef: any
}

const Input:React.FC<iProps> = ({type, placeholder, name, value, handleChange, inputRef}) => {

    return (
        <>
            <StyledInput 
                type={type} 
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={event => handleChange(event)}
                ref={inputRef}
                autoFocus={inputRef.current === document.activeElement}
                required
            />
        </>
    )
}

export default Input;
