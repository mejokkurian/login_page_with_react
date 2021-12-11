import axios from 'axios'
import React, { useEffect, useContext,useState } from 'react'
import Loader from 'react-loader-spinner';
import {useNavigate} from 'react-router-dom';
import { Context } from '../context';


function Home() {
    const {userName} = useContext(Context);
    const [usrName,setUsrName] = useState()
    const navigate = useNavigate()
   const[loading,setLoading]=useState(false)
  

   
    useEffect(() => {
        console.log("ehterd")
        if(localStorage.getItem('Token') === null){
            navigate('/')
        }else{

            console.log('uuuu:'+localStorage.getItem('userName'))
            const name = localStorage.getItem('userName')
    setUsrName(name)
           
            // window.location.reload();
        }
    },[])
console.log('dsdssd    ' +usrName);
    console.log('this is the user '+usrName)


    return (
        <>
     {loading?
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />:  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="reloder">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active ">
                    <a class="nav-link " href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <p style={{cursor:'pointer'}} onClick={()=>{
                    setLoading(true)
                    axios.post('http://127.0.0.1:8000/logout').then((Response)=>{
                        localStorage.removeItem("Token")
                        localStorage.removeItem('userName')
                        setLoading(false)
                        navigate("/")

                    })
                }} class="nav-link" href="#">Logout <span class="sr-only">(current)</span></p>
                </li>
                </ul> 
            </div>
            </nav>  
            <div  className="justify-content-center">
                <h1 style={{color:"red"}}>Heloo: {usrName}!!</h1>
            </div>
        </div>}

        </>
    )
}

export default Home
