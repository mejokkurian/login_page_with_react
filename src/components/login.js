
import login1 from '../login1.jpg'
import {useNavigate,Link } from 'react-router-dom';
import{ useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../context';



function Login() {
	const navigate = useNavigate();
	const {setUserName} = useContext(Context);
    useEffect(() => {
		if(localStorage.getItem('Token') === null){
			navigate('/')
		}else{
			navigate('home')
		}
        let value =   document.getElementById('alert')
		console.log("again")
		console.log(value)
		value.innerHTML="please enter your deatails" 
        setTimeout(() => {
            value.innerHTML="Please login" 
        }, 2000);
       
    }, [])


    
    const [username,setEmail] = useState()
    const [password,setPassword] = useState()
    let details = {username,password}

    const form_sub = async (e)=>{
        e.preventDefault();

        await axios.post('http://127.0.0.1:8000/login_sub',details, {withCredentials: true}).then((Response)=>{
            if(Response.data==false){
                document.getElementById('errrir').innerHTML = 'Invalid username or password!!!'
            }else{
				localStorage.setItem('Token', Response.data.jwt)
				const transport = axios.create({
					withCredentials: true
				  })
				  
				transport.get('http://127.0.0.1:8000/user_view',{headers: {Authorization: localStorage.getItem('Token')}}).then((Response)=>{
					setUserName(Response.data.username)
					localStorage.setItem('userName',Response.data.username)
				})
				if(Response.data == false){
					navigate('/')
				}else{
					navigate("/home")
				}
                
            }
		
        }).catch((error)=>{
            console.error(error)
        })
    }
	
	function validation1(e){
		let value = e.target.value
		if(value.length == 0){
			document.getElementById('error1').innerHTML = "*required"
			return false
		}else{
			document.getElementById('error1').innerHTML = " "
			return true
		}
		
	}
	function validation2(e){
		let value = e.target.value
		if(value.length == 0){
			document.getElementById('error2').innerHTML = "*required"
			return false
		}else{
			document.getElementById('error2').innerHTML = ""
			return true
		}

	}
  
    return (
       
        <div>
           <section class="ftco-section">
		<div class="container">
			
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-5">
					<div class="wrap">
                    <div class="img" style= {{backgroundImage:`url(${login1})`}} ></div>
						<div class="login-wrap p-4 p-md-5">
							<div class="d-flex">
								<div class="w-100">
									<h3 class="mb-4">Sign In</h3>
								</div>
                                
								<div class="w-100">
									<p class="social-media d-flex justify-content-end">
										<a href="#"
											class="social-icon d-flex align-items-center justify-content-center"><span
												class="fa fa-facebook"></span></a>
										<a href="#"
											class="social-icon d-flex align-items-center justify-content-center"><span
												class="fa fa-twitter"></span></a>
									</p>
								</div>
							</div>
                            <div class="w-100">
									<span  style={{marginBottom:'30px'}} id="alert" style={{color:'red'}} ></span>
								</div>
							<form action="#" class="signin-form">
                            <div class="w-100">
									<span id="errrir" style={{color:'red'}}></span>
								</div>
                                
								<div class="form-group mt-3">
									<input type="text" class="form-control" onKeyUp={validation2} onChange={(e)=>{
                                            setEmail(e.target.value)
                                            
                                    }} required/>
									<label class="form-control-placeholder"
                                     for="username">Username</label>
									 <span  style={{marginBottom:'30px'}} id="error2" style={{color:'red'}} ></span>
								</div>
								
								<div class="form-group">
								
									<input id="password-field" type="password" onKeyUp={validation1} onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}  class="form-control" required/>
									<span  style={{marginBottom:'30px'}} id="error1" style={{color:'red'}} ></span>
									<label class="form-control-placeholder" for="password">Password</label>
									<span toggle="#password-field"
										class="fa fa-fw fa-eye field-icon toggle-password"></span>
								</div>
								<div class="form-group">
									<button type="submit" onClick={form_sub} class="form-control btn btn-primary rounded submit px-3">Sign
										In</button>
								</div>
								<div class="form-group d-md-flex">
								</div>
							</form>
							<p class="text-center">Not a member? <Link to='/register'  style={{color:"blue", cursor:"pointer"}} data-toggle="tab">Sign Up</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>  
        </div>
    )
}

export default Login
