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
    let tipDisplayPercent: number = tipPercentage * 100;

    return (
        <StyledResults>
            Check Amount: 
            <StyledResultsSpan>${checkAmount}</StyledResultsSpan>
            Tip Amount: 
            <StyledResultsSpan>${totalTipAmount} ({tipDisplayPercent}%)</StyledResultsSpan>

            Total: 
            <StyledResultsSpan>${totalAmount}</StyledResultsSpan>

        <Button 
            name="Calculate Again"
            onClick={() => location.reload()}
        />
        </StyledResults>
    )
}

export default Results;