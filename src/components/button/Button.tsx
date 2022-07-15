import { StyledButton } from "./styled-button";

interface iButtonProps {
    name: string,
    onClick?: any
}

const Button:React.FC<iButtonProps> = ({name, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
           {name} 
        </StyledButton>
    )
}

export default Button;