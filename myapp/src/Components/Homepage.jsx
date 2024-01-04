import react, { useContext } from 'react'
import { AuthContext } from './Auth.context'
// import { AuthContext } from './AuthContext'
import { useNavigate } from "react-router-dom";

const Homepage = ()=>{
    const {state,Logout} = useContext(AuthContext)

    const router = useNavigate()
    
    return(
        <div>
            <h1>welcome</h1>
            <h1>User : {state?.userName}</h1>
            <button onClick={() => router('/login')}>go to login</button>
            <button onClick={Logout}>Logout</button>
            
            
        </div>
    )
}

export default Homepage