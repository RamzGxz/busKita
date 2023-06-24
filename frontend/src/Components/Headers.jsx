import React from 'react'
import UserDetails from './UserDetails'

const Headers = ({clicked, setClicked, users, setUsers}) => {

    const handleClick = () =>{
        setClicked(true)
    }
    
    return (
        <div className='position-fixed top-0 w-100 z-0'>
            <div className='w-100 d-flex container justify-content-between align-items-center' style={{
                height: '11vh',
                backgroundColor: '#ffbe0b',
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
            }}>
                <div className='w-50 d-flex align-items-center' onClick={handleClick}>
                    <i className="fa-solid fa-circle-user" style={{fontSize: '40px'}}></i>
                    {users.map((item)=>{
                        return(
                            <h4 className='mb-0 ms-2 text-capitalize'>{item.namaDepan}</h4>
                        )
                    })}
                </div>
                <div className='w-25 d-flex justify-content-between align-items-center'>
                    <div className='w-50 m-auto'>
                        <img src="/logo.png" alt="" className='w-100'/>
                    </div>
                </div>
            </div>

            <UserDetails cliked={clicked} setClicked={setClicked} users={users} seUsers={setUsers}/>
        </div>
    );
};

export default Headers;