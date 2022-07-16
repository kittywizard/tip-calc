import { useState } from "react";
import Header from "./components/header/Header";
import {StyledApp} from "./styles/container";
import Form from "./components/form/Form";
import Results from "./components/results/Results"

interface iResultState {
  tipPercentage: number,
  checkAmount: number,
  totalTipAmount: number,
  totalAmount: number
}

const App:React.FC = () => {

  const [displayResults, setDisplayResults] = useState(false);

  const [resultsInfo, setResultsInfo] = useState<iResultState>({
    tipPercentage: 0,
    checkAmount: 0,
    totalTipAmount: 0,
    totalAmount: 0
  })
 
  return (
          <StyledApp>
                  <Header/>
                  {
                    !displayResults ?
                    <Form 
                      setDisplayResults={setDisplayResults}
                      resultsInfo={resultsInfo}
                      setResultsInfo={setResultsInfo}
                    /> :
                    <Results 
                      resultsInfo={resultsInfo}
                    />
                  }
              </StyledApp>  
  )
}

export default App
