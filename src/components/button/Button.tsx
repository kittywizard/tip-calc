import { StyledButton } from "./styled-button";

interface iButtonProps {
    name: string
}

const Button:React.FC<iButtonProps> = ({name}) => {
    return (
        <StyledButton>
           {name} 
        </StyledButton>
    )
}

export default Button;