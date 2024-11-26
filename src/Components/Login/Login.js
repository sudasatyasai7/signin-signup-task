import React,{useState} from 'react'
import './Login.css';
import person from '../Assets/person.png';
import mail from '../Assets/email.png';
import password from '../Assets/password.png';
const Login = () => {
    const[value,setValue]=useState('SignUp');
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{value}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
        {value==='Login'?<div></div>:<div className='input'>
                <img src={person} alt='img not found'></img>
                <input type='text' placeholder='Name'></input>
            </div>}
            <div className='input'>
                <img src={mail} alt='img not found'></img>
                <input type='text' placeholder='Email'></input>
            </div>
            <div className='input'>
                <img src={password} alt='img not found'></img>
                <input type='text' placeholder='Password'></input>
            </div>
        </div>
        <div className='forgot-password'>
            {value==='SignUp'?<div></div>:<div>Lost Password?<span>Click Here</span></div>}
        </div>
        <div className='submit-data'>
            <div className={value==='Login'?'submit gray':'submit'} onClick={()=>setValue('SignUp')}>SignUp</div>
            <div className={value==='Login'?'submit':'submit gray'} onClick={()=>setValue('Login')}>Login</div>
        </div>
    </div>
  )
}

export default Login
