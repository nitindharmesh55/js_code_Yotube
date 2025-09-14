import { createContext } from "react";
import runChat from "../config/gimini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const onSent =  async(prompt) =>{
        await runChat(prompt);
    }
    onSent("What is AI/ML");

    const ContextValue = {

    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;