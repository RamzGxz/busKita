import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const [namaDepan, setNamaDepan] = useState('')
    const [namaBelakang, setNamaBelakang] = useState('')
    const [noHP, setNoHP] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePass, setRepass] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
            namaDepan: namaDepan,
            namaBelakang: namaBelakang,
            noHP: noHP
        }

        if(rePass === password){
            try {
                const res = await axios.post('http://localhost:3000/register', data)
                if(res.status === 200){
                    alert('youre registered! redirect to login page')
                    navigate('/')
                } else{
                    console.log('(500) failed to fetch')
                }
            } catch (error) {
                console.log(error)
            }
        } else{
            alert('password anda tidak sama! silahkan mengulangi')
        }
    }
    return (
        <div className='container'>
            <div className='py-3'>
                <h1 className='text-center fw-bolder'>Daftar Akun</h1>
            </div>

            <div className=''>
                <form action="" onSubmit={handleSubmit}>
                    <div className=''>
                        <label htmlFor="" className='mb-1'>Nama Depan</label>
                        <input type="text" className='form-control form-control-sm bg-transparent' style={{ borderBottom: '2px solid black' }} onChange={(e)=> setNamaDepan(e.target.value)}/>
                        <label htmlFor="" className='mb-1'>Nama Belakang</label>
                        <input type="text" className='form-control form-control-sm mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} onChange={(e)=> setNamaBelakang(e.target.value)}/>
                        <label htmlFor="" className='mb-1'>No Handphone</label>
                        <input type="text" className='form-control form-control-sm mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} onChange={(e)=> setNoHP(e.target.value)}/>
                        <label htmlFor="" className='mb-1'>Email</label>
                        <input type="email" className='form-control form-control-sm mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} onChange={(e)=> setEmail(e.target.value)}/>
                        <label htmlFor="" className='mb-1'>Kata Sandi</label>
                        <input type="password" className='form-control form-control-sm mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} onChange={(e)=> setPassword(e.target.value)}/>
                        <label htmlFor="" className='mb-1'>Ulang Kata sandi</label>
                        <input type="password" className='form-control form-control-sm mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} onChange={(e)=> setRepass(e.target.value)}/>
                        <p className='text-center mt-3' style={{ fontSize: '13px' }}>
                            Dengan masuk atau mendaftar, Anda menyetujui <b>Ketentuan Layanan</b> dan <b>Kebijakan Privacy</b>.
                        </p>
                        <div className='w-100 d-flex justify-content-center mb-2'>
                            <button className='text-center btn fw-bolder w-75' style={{ backgroundColor: 'rgb(256,180,20)' }}>Create an Account</button>
                        </div>
                        <p className='text-center'>sudah punya akun? <Link style={{ textDecoration: 'none' }} to={'/'} className='text-black fw-bolder'>Masuk</Link></p>
                        <div className='w-100 d-flex justify-content-end'>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;