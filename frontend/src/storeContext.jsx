import { createContext, useState } from "react";

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const[data,setData]=useState("hello");
    const contextValue={
        data
    };
    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
       </StoreContext.Provider>
    )
 
}
export default StoreContextProvider;