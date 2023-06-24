import React, { useState } from 'react';
import Headers from '../Components/Headers';
import NavigationsBar from '../Components/NavigationsBar';
import axios from 'axios';

const Bantuan = ({ clicked, setClicked, users }) => {

    const [userMsg, setUserMsg] = useState('')
    const [userNewMsg, setUserNewMsg] = useState([])
    const [msg, setMsg] = useState([])

    const handleSend = async (e) => {

        e.preventDefault()
        if (userMsg) {
            try {
                const res = await axios.post('http://localhost:3000/chat', { message: userMsg })
                const newMsgBot = {
                    reply: res.data.reply,
                    userMsg: res.data.userMessage
                }

                setMsg([...msg, newMsgBot])
                setUserNewMsg([...userNewMsg, newMsgBot])
                setUserMsg('')
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('mohoh masukkkan chat dengan benar babi')
        }

    }
    return (
        <div>
            <Headers clicked={clicked} setClicked={setClicked} users={users} />
            <div className="py-2 container vh-100">
                <div className='w-100 py-5 container h-100'>
                    <div className='py-5 w-100 d-flex justify-content-end align-items-end h-100 flex-column'>
                        <div className='w-100 d-flex align-items-center flex-column rounded-3' style={{
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }} id='chatBody'>
                            {/* bot */}
                            <div className='w-100 py-3 rounded-3 px-2 d-flex justify-content-center my-2' style={{
                                backgroundColor: 'rgb(40,52,84)'
                            }}>
                                <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                                    <img src="/bot.png" alt="" width={55} className='p-1 rounded-3 h-100 m-auto' style={{
                                        backgroundColor: 'rgb(256,180,20)'
                                    }} />
                                    <p className='mb-0 my-1 text-white'>03.00</p>
                                </div>
                                <p className='mx-3 mb-0 text-white w-100'>Hai, salam kenal saya Django, Teman Kita, Adakah yang bisa Django Bantu?</p>
                            </div>


                            {/* users */}
                            {userNewMsg.map((item) => (
                                <>
                                    <div
                                        key={item.userMsg}
                                        className='w-100 py-3 rounded-3 px-2 d-flex justify-content-center my-2'
                                        style={{
                                            backgroundColor: 'rgb(40,52,84)'
                                        }}
                                    >
                                        <p className='mx-3 mb-0 text-white w-100'>{item.userMsg}</p>
                                        <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                                            <img
                                                src="/user.png"
                                                alt=""
                                                width={50}
                                                className='p-1 rounded-3 h-100 m-auto'
                                                style={{
                                                    backgroundColor: 'rgb(256,180,20)'
                                                }}
                                            />
                                            <p className='mb-0 my-1 text-white'>03.02</p>
                                        </div>
                                    </div>
                                    {msg.map((item) => (
                                        <div
                                            key={item.reply}
                                            className='w-100 py-3 rounded-3 px-2 d-flex justify-content-center my-2'
                                            style={{
                                                backgroundColor: 'rgb(40,52,84)'
                                            }}
                                        >
                                            <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                                                <img
                                                    src="/bot.png"
                                                    alt=""
                                                    width={55}
                                                    className='p-1 rounded-3 h-100 m-auto'
                                                    style={{
                                                        backgroundColor: 'rgb(256,180,20)'
                                                    }}
                                                />
                                                <p className='mb-0 my-1 text-white'>03.05</p>
                                            </div>
                                            <p className='mx-3 mb-0 text-white w-100'>{item.reply}</p>
                                        </div>
                                    ))}
                                </>
                            ))}

                            {/* bot */}

                        </div>
                        <form action="" className='w-100 my-2 d-flex justify-content-center align-items-center' onSubmit={handleSend}>
                            <div className="btn-group w-100" role="group" aria-label="Basic mixed styles example" style={{
                                zIndex: clicked ? -1 : 1
                            }}>
                                <input type="text" placeholder='Tulis pesan anda disini...' className=' w-100 form-control bg-transparent rounded-0 rounded-start' style={{
                                    border: '4px solid rgb(40,52,84)'
                                }} onChange={(e) => setUserMsg(e.target.value)} />
                                <button type='submit' className='btn text-white' style={{
                                    backgroundColor: 'rgb(40,52,84)'
                                }}>
                                    <i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <NavigationsBar act3={'black'} clicked={clicked} />
        </div>
    );
};

export default Bantuan;