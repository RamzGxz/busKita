import React, { useEffect, useState } from 'react';
import NavigationsBar from '../Components/NavigationsBar';
import Headers from '../Components/Headers';
import { Link, useParams } from 'react-router-dom';

const dataHalte = [
    { nama: 'Halte SMKN 1 BWI' },
    { nama: 'Halte Man 1 BWI' },
    { nama: 'Halte Untag' },
    { nama: 'Halte Pom Karangente' },
    { nama: 'Halte Hotel Aston' },
    { nama: 'Halte STIKES' },
    { nama: 'Halte Sritanjung' },
    { nama: 'Halte Blambangan' },
    { nama: 'Halte Hotel Slamet' },
    { nama: 'Halte SD Brawijaya' },
    { nama: 'Halte STIKOM' }
]

const Home = ({cliked, setClicked, users, setUsers}) => {
    const [searchInput, setSearchInput] = useState('')
    const [data, setData] = useState([dataHalte])
    
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue)
        filterData(inputValue)
    }

    const filterData = (keyword) => {
        if (keyword === '') {
            setData([]);
            document.getElementById('searchResult').classList.add('d-none')
        } else {
            const filteredData = dataHalte.filter((halte) => {
                const halteName = halte.nama.toLowerCase()
                return halteName.includes(keyword.toLowerCase())
            });
            document.getElementById('searchResult').classList.remove('d-none')
            setData(filteredData);
        }
    }
    return (
        <div>
            <Headers clicked={cliked} setClicked={setClicked} users={users} setUsers={setUsers}/>
            <div className=' vh-100 container d-flex justify-content-center align-items-center' style={{
                zIndex: cliked ? -1 : 1
            }}>
                <div className=''>
                    <form action="" className='rounded-3'>
                        <div className='rounded-3'>
                            <div className='d-flex align-items-center w-100 py-1 px-3 flex-column rounded-3' style={{ backgroundColor: 'rgb(40,52,84)' }}>
                                <div className='w-100 d-flex flex-row rounded-3 align-items-center py-1'>
                                    <i className="fa-solid fa-magnifying-glass fs-1 text-white mb-0"></i>
                                    <input type="text" className=' w-100 border-0 px-2 py-1 ms-2 bg-transparent fs-6 text-white border-0 form-control' placeholder='Mau kemana Hari Ini?' id='inputSearch' onChange={(e) => {
                                        handleInputChange(e)
                                    }}  />
                                </div>
                                <div className='w-100 d-block position-absolute container d-none' style={{
                                    zIndex: 99999,
                                    top: 160
                                }} id='searchResult'>
                                    <div className='rounded-bottom border-0' style={{ maxHeight: '31vh', overflow: 'auto', border: '1px solid black', backgroundColor: 'rgb(40,52,84)' }} id=''>
                                        <ul className='list-unstyled px-2'>
                                            {data.map((item, index) => {
                                                return (
                                                    <li key={index} className='my-2 py-1 text-white' >
                                                        <Link className='text-white text-decoration-none' to={`/rute/${item.nama}`}>
                                                            <i className="fa-solid fa-location-dot mx-2"></i>
                                                            {item.nama}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='d-flex align-items-center justify-content-between py-1' >
                        <div className='w-100'>
                            <Link className='w-100 rounded-3 d-flex align-items-center py-2 fw-bolder border-0 text-white text-decoration-none px-3' to={'/peta'} style={{ backgroundColor: 'rgb(40,52,84)' }}>
                                <img src="/touch.png" alt="" width={30} className='me-3' />
                                Klik untuk melihat peta
                            </Link>
                        </div>
                    </div>

                    <div className='py-3' style={{
                        zIndex: 1
                    }}>
                        <img src="/poster.png" alt="" className='w-100 rounded-3' style={{ border: '3px solid rgb(256,180,20)' }} />
                    </div>

                    <h5 className='fw-bolder my-2'>Berita</h5>
                    <div className='py-2'>
                        <div id="carouselExampleAutoplaying" className="carousel slide w-100 m-auto" data-bs-ride="carousel" style={{
                            zIndex: cliked ? -1 : 1
                        }}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Sm9QFjPX6OXqkBzJgdhyK_4v73-YvlUUG76LOF9fM1qtSws7aXWU28_kovlYOsEUyAA&usqp=CAU" className="d-block rounded-3 w-100" height={200} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/foto1.jpg" className="d-block rounded-3 w-100" height={200} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="/foto2.jpg" className="d-block rounded-3 w-100" height={200} alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            <NavigationsBar act1={'black'} clicked={cliked} />
        </div>
    );
};

export default Home;