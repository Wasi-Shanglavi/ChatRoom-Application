import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const Form = ({
    isSignInPage = true,
}) => {
    const [data, setData] = useState({
...(!isSignInPage && {
    fullName : ''
}),
email :'',
password: '',
    })
    const navigate = useNavigate()
  return (
    <div className='bg-light h-screen flex items-center justify-center'>
    <div className='bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
    <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
    <div className='text-xl font-weight:300; mb-14'>{isSignInPage ? 'Sign in to get explored' :'Sign Up to get started'}</div> 
    <form onSubmit={() => console.log('sumitted')}>
    {!isSignInPage &&<Input  label='Full Name' name='name' placeholder='Enter your full name' className='mb-6 w-[300px]'
     value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value})}/>}
    <Input  label='Email Address' name='email' type='email' placeholder='Enter your email' className='mb-6 w-[300px]' value={data.email} 
    onChange={(e) => setData({ ...data, email: e.target.value})}/>
    <Input  label='Password' type='password' name='password' placeholder='Enter your password' className='mb-14 w-[300px]' 
    value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})}/>
    <Button label={isSignInPage ? 'Sign In'  : 'Sign Up'} className='w-[300px] mb-2' type='submit'/>
    </form>
    <div>{isSignInPage ? "Didn't have an account?" : 'Already have an account?'}
    <span className='text-primary cursor-pointer underline' onClick={() =>navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in' } `)}>{isSignInPage ? 'Sign up' : 'Sign in'}</span></div>
    </div>
    </div>
  )
}

export default Form
