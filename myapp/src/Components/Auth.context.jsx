import { createContext, useReducer } from "react";

export const AuthContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, userData1:action }
        case "LOGOUT":
            return { ...state, userData1: null }
        default:
            return state;
    }
}

const ParentAuth = ({children})=>{
    const initialState = {userData1:{ userName:"santosh",
    email:"santosh@gmail.com",
    password:"san@123"}}

    const [state,dispatch] = useReducer(reducer,initialState)

    const Login =()=>{
        dispatch({type:"LOGIN"})
    }

    const Logout = ()=>{
        dispatch({type:"LOGOUT"})
    }

    return(
        <AuthContext.Provider value={{state,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ParentAuth
