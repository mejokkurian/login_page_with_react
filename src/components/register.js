import axios from 'axios'
import React, { useState } from 'react'
import login1 from '../login1.jpg'
import {useNavigate} from 'react-router-dom'


function Register() {
    const [username, setNmae] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassord] = useState('')
    const [first_name, setfirstname] = useState('')
    const [last_name, setlastname] = useState('')

    const Name = (e)=>{
        setNmae(e.target.value)
    }

    const Email = (e)=>{
        setEmail(e.target.value)
    }

    const Pass = (e)=>{
        setPassord(e.target.value)
    }
    const First_name = (e)=>{
        setfirstname(e.target.value)
    }
    const Last_name = (e)=>{
        setlastname(e.target.value)
    }

    const navigate = useNavigate()

    let user={username,email,password,first_name,last_name}
    const formSubm = async(e)=>{
        e.preventDefault();
        console.table(user)
       await axios.post('http://127.0.0.1:8000/register',user).then((Response)=>{
           console.table(Response.data)
           navigate('/')
       })
      
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
									<h3 class="mb-4">Register</h3>
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
							<form action="#" class="signin-form">
								<div class="form-group mt-3">
									<input type="text" class="form-control" onChange={Name} required/>
									<label class="form-control-placeholder"  for="username">Username</label>
								</div>
                                <div class="form-group mt-3">
									<input type="text" class="form-control" onChange={First_name} required/>
									<label class="form-control-placeholder"  for="username">First name</label>
								</div>
                                <div class="form-group mt-3">
									<input type="text" class="form-control" onChange={Last_name} required/>
									<label class="form-control-placeholder"  for="username">Last name</label>
								</div>
                                <div class="form-group mt-3">
									<input type="text" class="form-control" onChange={Email} required/>
									<label class="form-control-placeholder" for="username">Email</label>
								</div>
								<div class="form-group">
									<input id="password-field" type="password" onChange={Pass} class="form-control" required/>
									<label class="form-control-placeholder" for="password">Password</label>
									<span toggle="#password-field"
										class="fa fa-fw fa-eye field-icon toggle-password"></span>
								</div>
								<div class="form-group">
									<button type="submit" onClick={formSubm} class="form-control btn btn-primary rounded submit px-3">Register
										In</button>
								</div>
								<div class="form-group d-md-flex">
								</div>
							</form>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>  
        </div>
    )
}

export default Register
