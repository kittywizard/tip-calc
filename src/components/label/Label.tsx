import {StyledLabel} from "./label-styles";

interface iProps {
    name: string
}

const Label:React.FC<iProps> = ({name}) => {
    return (
        <>
            <StyledLabel htmlFor={name}>
                {name}
            </StyledLabel>
        </>
    )
}

export default Label;