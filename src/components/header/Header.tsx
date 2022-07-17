import {StyledHeader} from "./header-styles";

const Header:React.FC = () => {
    return (
        <StyledHeader>
           <h1>
                Tip Calculator
            </h1>

            <p>
                Enter the amount of the check and the tip percentage as a whole number (18, 20, etc)
            </p>
        </StyledHeader>
    )
}

export default Header;