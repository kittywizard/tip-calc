import { useState, useContext } from "react";
import Header from "./components/header/Header";
import {StyledApp} from "./styles/container";
import Form from "./components/form/Form";
import Results from "./components/results/Results"
import { Context } from "./Context";

const App:React.FC = () => {

  //const {displayResults, setDisplayResults} = useContext(Context);
  const [displayResults, setDisplayResults] = useState(false);

  return (
        <StyledApp>
              <Header/>
              {
                !displayResults ?
                <Form 
                  setDisplayResults={setDisplayResults}
                /> :
                <Results/>
              }
          </StyledApp>    
  )
}

export default App
