import { StyledResults, StyledResultsSpan } from "./styled-results";
import Button from "../button/Button";


interface iResultsState {
    resultsInfo: {
        tipPercentage: number,
        checkAmount: number,
        totalTipAmount: number,
        totalAmount: number
    }

}

const Results:React.FC<iResultsState> = ({resultsInfo}) => {
    const {tipPercentage, checkAmount, totalTipAmount, totalAmount} = resultsInfo;

    return (
        <StyledResults>
            Check Amount: 
            <StyledResultsSpan>${checkAmount}</StyledResultsSpan>
            Tip Amount: 
            <StyledResultsSpan>${totalTipAmount}</StyledResultsSpan>

            Total: 
            <StyledResultsSpan>${totalAmount}</StyledResultsSpan>

        <Button 
            name="Calculate Again"
            onClick={() => console.log('refresh me')}
        />
        </StyledResults>
    )
}

export default Results;