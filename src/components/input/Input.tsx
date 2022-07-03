import { StyledInput } from "./input-styles";

interface iProps {
    type: string,
    placeholder: string
}

const Input:React.FC<iProps> = ({type, placeholder}) => {
    return (
        <>
            <StyledInput type={type} placeholder={placeholder}/>
        </>
    )
}

export default Input;