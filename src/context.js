import { createContext } from "react";
import { useState } from "react";

export const Context = createContext({})
function Authcontext({children}){
    const [userName, setUserName] = useState("sample")
    return <Context.Provider value={{userName,setUserName}}>
          {children}
    </Context.Provider>
}
export { Authcontext}