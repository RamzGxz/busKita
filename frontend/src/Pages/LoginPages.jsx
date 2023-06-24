import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginPages = ({setUsers}) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: pass
        }
        try {
            const res = await axios.post('http://localhost:3000/login', data)
            if (res.data.message === 'data found! login success!') {
                alert(`login succes!, Welcome Back ${res.data['data'][0].namaDepan}`)
                setUsers([res.data['data'][0]])
                navigate('/home')
            } else if (res.data.message === 'wrong email or password!, please try again') {
                alert(res.data.message)
            }
        } catch (error) {
            alert(error)
            navigate('/home')
        }
    }

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center flex-column w-100 container'>
            <h1 className='mb-0 fw-bolder' style={{ fontSize: 50 }}>Welcome</h1>
            <h6 className=''>Sign in to continue</h6>
            <form action="" className='w-100' onSubmit={handleSubmit}>
                <div className='w-100 d-flex justify-content-center flex-row align-items-center container my-3 rounded-2' style={{ backgroundColor: 'rgb(40,52,84)' }}>
                    <i className="fa-solid fa-envelope text-white fs-1 me-3"></i>
                    <input type="email" className='border-0 w-100 bg-transparent py-3 container form-control text-white' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='w-100 d-flex justify-content-center flex-row align-items-center container my-3 rounded-2' style={{ backgroundColor: 'rgb(40,52,84)' }}>
                    <i className="fa-solid fa-key text-white fs-1 me-3"></i>
                    <input type="password" className='border-0 w-100 bg-transparent py-3 container form-control text-white' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                </div>
                <div className='w-100 d-flex justify-content-end flex-row align-items-center container my-3 rounded-2'>
                    <p className='mb-0'>forgot password?</p>
                </div>
                <div className='w-100 d-flex justify-content-center flex-row align-items-center container mb-1 rounded-2'>
                    <button className='btn fw-bolder fs-3 w-75' style={{
                        backgroundColor: 'rgb(256,180,20)'
                    }} type='submit'>LOGIN</button>
                </div>
                <div className='w-100 d-flex justify-content-center flex-row align-items-center container rounded-2'>
                    <p className='mb-0' style={{ fontSize: '13px' }}>Don't have an account? <Link to={'/register'} className='fw-bolder text-black text-decoration-none'>Create account</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPages;