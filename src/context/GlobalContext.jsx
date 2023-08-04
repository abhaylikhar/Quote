import { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalProvider = ({children}) =>{

    const initialState={
        quote :{
            "_id":"PYnVkG4UQGH7",
            "content":"There is nothing on this earth more to be prized than true friendship.",
            "author":"Thomas Aquinas",
            "tags":["Famous Quotes","Friendship"],
            "authorSlug":"thomas-aquinas",
            "length":70,
            "dateAdded":"2019-03-15",
            "dateModified":"2023-04-14"
        }
    }

    const [state,dispatch] = useReducer(GlobalReducer, initialState)
    return(
        <GlobalContext.Provider
        value={{
            ...state,
            dispatch
            
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
} 

export default GlobalContext