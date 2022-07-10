import { createContext, useState } from "react";

interface ContextState {
    displayResults: boolean,
    setDisplayResults?: (prevState: boolean) => void,
}

const defaultState = {
    displayResults: false
}

const Context = createContext<ContextState>(defaultState);


interface AppState {
    displayResults: boolean
  }

const ContextProvider:React.FC = ({children}) => {

    const [displayResults, setDisplayResults] = useState<AppState["displayResults"]>(false);

    return (
        <Context.Provider value={{displayResults, setDisplayResults}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}