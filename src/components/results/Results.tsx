import { StyledResults } from "./styled-results";

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
            Check Amount: ${checkAmount} <br/>
            Tip Amount: ${totalTipAmount} <br/>

            Total: ${totalAmount}
        </StyledResults>
    )
}

export default Results;