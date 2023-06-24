import React from 'react';
import { Link } from 'react-router-dom';

const NavigationsBar = ({ act1, act2, act3, clicked }) => {
    return (
        <div id='navBar' className='d-flex justify-content-between align-items-center text-white' style={{
            height: '10vh',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: clicked ? -1 : 1 
        }}>
            <div className=' d-flex w-100 justify-content-center rounded-top' style={{
                backgroundColor: 'rgb(256,180,20)',
                height: '10vh'

            }}>
                <div className='d-flex justify-content-center align-items-center w-50 h-100'>
                    <div>
                        <Link to={'/home'} className='text-decoration-none text-white d-flex align-items-center flex-column'>
                            <i className="fa-solid fa-house" style={{ fontSize: '30px', color: act1 }}></i>
                            <p className={`mb-0 text-${act1} fw-bolder`}>Home</p>
                        </Link>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center w-75 h-100 '>
                    <div>
                        <Link to={'/jamoperasional'} className='text-decoration-none text-white d-flex align-items-center flex-column'>
                            <i className="fa-solid fa-clock" style={{ fontSize: '30px', color: act2 }}></i>
                            <p className={`mb-0 text-${act2} fw-bolder`}>Jam Operasional</p>
                        </Link>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center h-100 w-50'>
                    <div>
                        <Link to={'/bantuan'} className='text-decoration-none text-white d-flex align-items-center flex-column'>
                            <i className="fa-solid fa-headset" style={{ fontSize: '30px', color: act3 }}></i>
                            <p className={`mb-0 text-${act3} fw-bolder`}>Bantuan</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationsBar;