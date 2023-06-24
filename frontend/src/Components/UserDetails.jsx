import React, {useRef, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'

const UserDetails = ({ cliked, setClicked, users, seUsers }) => {
    const navigate = useNavigate()

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const namaDepanRef = useRef(null)
    const namaBelakangRef = useRef(null)
    const noHPRef = useRef(null)

    const handleClick = () => {
        setClicked(false)
    }

    
    const handleUpdate = async (e) =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const namaDepan = namaDepanRef.current.value
        const namaBelakang = namaBelakangRef.current.value
        const noHP = noHPRef.current.value

        const data = {
            email: email,
            password: password,
            namaDepan: namaDepan,
            namaBelakang: namaBelakang,
            noHP: noHP
        }
        
        try {
            const res = await axios.put(`http://localhost:3000/update/${users[0]._id}`, data)
            alert('data telah terupdate!')
            seUsers(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id='userDetails' className='container vh-100 d-flex flex-column align-items-start position-absolute py-5' style={{
            backgroundColor: '#e5e5e5',
            transition: 'all .6s',
            top: cliked ? '455%' : '-1000%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <i className="fa-solid fa-circle-xmark fs-1" style={{
                position: 'absolute',
                top: 10,
                left: 10
            }} onClick={() => {
                handleClick()
            }}></i>

            {users.map(item => {
                return (
                    <div>
                        <h3 className='pt-3 fw-bolder mb-0' style={{
                            color: 'rgb(40,52,84)'
                        }}>{`${item.namaDepan} ${item.namaBelakang}`}</h3>
                        <p className='fw-bolder' style={{
                            color: 'rgb(40,52,84)'
                        }}>{item.email}</p>
                    </div>
                )
            })}

            <form action="" className='w-100 fs-5' onSubmit={(e)=> handleUpdate(e)}>
                {users.map((item) => {
                    return (
                        <div key={item.id} className='w-100'>
                            <label htmlFor="" className='mb-1'>Nama Depan</label>
                            <input type="text" defaultValue={item.namaDepan} className='form-control form-control-sm fs-5 bg-transparent' style={{ borderBottom: '2px solid black' }} ref={namaDepanRef}/>
                            <label htmlFor="" className='mb-1'>Nama Belakang</label>
                            <input type="text" defaultValue={item.namaBelakang} className='form-control form-control-sm fs-5 mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} ref={namaBelakangRef}/>
                            <label htmlFor="" className='mb-1'>No Handphone</label>
                            <input type="text" defaultValue={item.noHP} className='form-control form-control-sm fs-5 mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} ref={noHPRef}/>
                            <label htmlFor="" className='mb-1'>Email</label>
                            <input type="email" defaultValue={item.email} className='form-control form-control-sm fs-5 mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }}  ref={emailRef}/>
                            <label htmlFor="" className='mb-1'>Kata Sandi</label>
                            <input type="password" defaultValue={item.password} className='form-control form-control-sm fs-5 mb-1 bg-transparent' style={{ borderBottom: '2px solid black' }} ref={passwordRef}/>
                        </div>
                    )
                })}
                <div className='w-100 d-flex justify-content-center flex-row align-items-center container mb-1 rounded-2 my-3'>
                    <button className='btn fw-bolder fs-3 w-75 text-white rounded-5' style={{
                        backgroundColor: 'rgb(40,52,84)'
                    }} type='submit'>Simpan</button>
                </div>
            </form>
            <div className='position-absolute d-flex justify-content-center align-items-center' style={{
                bottom: 15,
                left: 10,
            }} onClick={() => {
                if (confirm('apakah anda ingin logout?')) {
                    setClicked(false)
                    setTimeout(() => {
                        seUsers([])
                        navigate('/')
                    }, 500)
                }
            }}>
                <i className="fa-solid fa-power-off fs-1 p-2 rounded-5 fw-bolder" style={{
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }}></i>
                <h5 className='mb-0 ms-2 fw-bolder' color=''>Sign Out</h5>
            </div>
        </div>
    );
};

export default UserDetails;