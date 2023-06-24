import React, { useState } from 'react'
import Headers from '../Components/Headers'
import NavigationsBar from '../Components/NavigationsBar'
import { useNavigate, useParams } from 'react-router-dom'
import '../assets/loaders.css'

const Rute = ({ clicked, setClicked, users }) => {
    const params = useParams().nama
    const [submit, setSubmit] = useState(false)
    const [siap, setSiap] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setSubmit(true)
        setTimeout(()=>{
            setSiap(true)
        }, 5000)
    }
    return (
        <div className='d-flex justify-content-center flex-column align-items-center vh-100'>
            <Headers clicked={clicked} setClicked={setClicked} users={users}/>
            <div className='container'>
                <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126331.86461859633!2d114.18301667439076!3d-8.315638720309119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14ff70f397b65%3A0xd4855a1d5d5b2480!2s${params}!5e0!3m2!1sen!2sid!4v1687271014583!5m2!1sen!2sid`} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-100 rounded-3 mt-5 pt-4' height={350} />
            </div>

            <div className={`container my-5 ${submit ? 'd-none' : ''}`}>
                <div className='w-100 rounded-3 container d-flex justify-content-center align-items-center flex-column' style={{
                    height: '25vh',
                    backgroundColor: 'rgba(0,0,0,0.2'
                }}>
                    <div className='w-100 rounded-3 d-flex justify-content-center align-items-center my-2' style={{
                        height: '5vh',
                        backgroundColor: 'rgb(40,52,84)'
                    }}>
                        <p className='mb-0 fw-bolder text-white'>Lokasi Tujuan : {params}</p>
                    </div>
                    <div className='w-100 rounded-3 d-flex justify-content-center align-items-center my-2' style={{
                        height: '5vh',
                        backgroundColor: 'rgb(40,52,84)'
                    }}>
                        <p className='mb-0 fw-bolder text-white'>Harga : Rp.5000</p>
                    </div>
                    <button className='btn mt-3 mb-2 fs-1 fw-bolder' style={{
                        backgroundColor: 'rgb(256,180,20)'
                    }} onClick={() => handleClick()}>SUBMIT</button>
                </div>
            </div>

            <div className={`container my-5 ${submit ? '' : 'd-none'} d-flex flex-row`}>
                <div className='w-100 rounded-3 container d-flex justify-content-center align-items-center flex-column' style={{
                    height: '25vh',
                    backgroundColor: 'rgba(0,0,0,0.2'
                }}>
                    <h1 className='mb-3 fw-bolder'>Tracking</h1>
                    <div class="wrapper">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                    </div>
                </div>
            </div>

            <div className='container w-100' style={{
                position: 'absolute',
                top: siap ? '50%' : '-50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                height: '40vh',
                zIndex: 9999,
                transition: 'all 1s'
            }}>
                <div className='w-100 h-100 rounded-3 d-flex justify-content-center align-items-center flex-column' style={{ backgroundColor: 'rgb(40,52,84)' }}>
                    <i className="fa-sharp fa-solid fa-location-dot text-white my-3" style={{ fontSize: '50px' }}></i>
                    <div className='container w-100'>
                        <h5 className='mb-0 text-center text-white'>Anda akan sampai tujuan setelah hotel Aston Banyuwangi. Siapkan uang cash Anda!!!</h5>
                        <div className='w-100 mt-5 d-flex justify-content-center'>
                            <button className='rounded-5 text-white fw-bolder font-monospace' style={{
                                backgroundColor: 'rgb(256,180,20)',
                                width: '45%',
                                border: 'none',
                                fontSize: '30px'
                            }} onClick={() => {
                                setSiap(false)
                                setSubmit(false)
                                setTimeout(()=>{
                                    navigate('/home')
                                },800)
                            }}>SIAP</button>
                        </div>
                    </div>
                </div>
            </div>

            <NavigationsBar act1={'black'} clicked={clicked} />
        </div>
    )
}

export default Rute;