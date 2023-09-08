import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);


    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />

            <div className='absolute opacity-100'>
                <img className='tranpa' src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='back_ground' />
            </div>


            <form className='absolute my-32 mx-auto right-0 left-0 p-12 w-4/12 rounded-md bg-opacity-80 text-white bg-black'>
                <h3 className='font-semibold text-3xl my-6 p-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
                {!isSignInForm && <input className='p-3 my-2 w-full rounded-md bg-slate-900' type='text' placeholder='Full Name' ></input>}
                <input className='p-3 my-2 w-full rounded-md bg-slate-900' type='text' placeholder='Email or phone number' ></input>
                <input className='p-3 my-2 w-full rounded-md  bg-slate-900' type='password' placeholder='Password'></input>
                <button className='p-3 my-3 w-full font-medium text-lg mt-8 bg-red-700 rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='my-8 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up Now" : "Already Registered? Sign In Now"} </p>

            </form>


        </div>
    )
}

export default Login
