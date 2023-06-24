import React from 'react'
import Headers from '../Components/Headers'
import NavigationsBar from '../Components/NavigationsBar'

const Peta = ({clicked, setClicked, users}) => {
    return (
        <div>
            <Headers clicked={clicked} setClicked={setClicked} users={users}/>
            <div className='vh-100 py-5 container'>
                <div className='' style={{
                    marginTop: '20%'
                }}>
                    <p className='text-center fw-bolder'>Lokasi Halte yang tersedia di wilayah Banyuwangi kota</p>
                    <div className='mt-3 d-flex justify-content-center px-0 rounded-3 m-auto align-items-center' style={{
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        width: '97%'

                    }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63181.745408490875!2d114.32495094396701!3d-8.216922904661278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15aeb98f842ab%3A0x4027a76e3530a90!2sBanyuwangi%2C%20Banyuwangi%20Sub-District%2C%20Banyuwangi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1687339138372!5m2!1sen!2sid"height={550} style={{ border: '4px solid rgb(40,52,84)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-3 w-100' />
                    </div>
                </div>
            </div>
            <NavigationsBar act1={'black'} clicked={clicked}/>
        </div>
    );
};

export default Peta;