import { useState } from "react";
import Header from "./components/header/Header";
import {StyledApp} from "./styles/container";
import Form from "./components/form/Form";
import Results from "./components/results/Results"

interface AppState {
  displayResults: boolean
}

const App:React.FC = () => {

  const [displayResults, setDisplayResults] = useState<AppState["displayResults"]>(false);

  return (
    <StyledApp>
      <Header/>
      {
        !displayResults ?
        <Form 
          setDisplayResults={setDisplayResults}
        /> :
        <div>Success</div>
      }
   </StyledApp>
  )
}

export default App
