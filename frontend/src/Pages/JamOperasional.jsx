import Headers from "../Components/Headers"
import NavigationsBar from "../Components/NavigationsBar"
const JamOperasional = ({cliked, setClicked, users}) => {
    return (
        <div>
            <Headers clicked={cliked} setClicked={setClicked} users={users}/>
            <div className="container py-5 vh-100">
                <div className="my-5">
                    <div className="py-3">
                        <div className="py-3">
                            <h1 className="mb-0">Call Center </h1>
                            <h6 className="mb-0">082 213 265 455</h6>
                            <p className="mb-0">(Banyuwangi Kota, Ketapang)</p>
                        </div>
                        <div className="py-2">
                            <h6 className="fw-bolder">Koridor 1 Stikom --- Blambangan </h6>
                            <h6 className="mb-0">Jam Operasional</h6>
                            <p className="mb-0">05.00 sampai 19.00 WIB</p>
                        </div>
                        <div className="py-2">
                            <h6 className="fw-bolder">Koridor 2 Stikom --- SMKN 1 Banyuwangi </h6>
                            <h6 className="mb-0">Jam Operasional</h6>
                            <p className="mb-0">05.30 sampai 19.00 WIB</p>
                        </div>
                        <div className="py-2">
                            <h6 className="fw-bolder">Koridor 3 Stasiun Ketapang --- Sukowidi </h6>
                            <h6 className="mb-0">Jam Operasional</h6>
                            <p className="mb-0">05.30 sampai 19.00 WIB</p>
                        </div>
                        <div className="py-2">
                            <h6 className="fw-bolder">Koridor 4 Pom Karangente --- Blambangan </h6>
                            <h6 className="mb-0">Jam Operasional</h6>
                            <p className="mb-0">05.00 sampai 19.00 WIB</p>
                        </div>
                        <div className="d-flex justify-content-center flex-column mt-4">
                            <p className="mb-0 fw-bold">Ikuti Kami</p>
                            <div className="py-1">
                                <i className="fa-brands fa-square-facebook me-1 fs-3"></i>
                                <i className="fa-brands fa-square-instagram mx-1 fs-3"></i>
                                <i className="fa-brands fa-twitter mx-1 fs-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavigationsBar act2={'black'} clicked={cliked}/>
        </div>
    )
}
export default JamOperasional