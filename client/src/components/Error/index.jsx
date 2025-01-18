import { Button } from "@mui/material"
import Footer from "../Footer"
import Header from "../Header"
import { useNavigate } from "react-router-dom"

function Error() {

    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center pt-28 pb-20 px-5">
                <img src="https://themesflat.co/html/ecomus/images/item/404.svg" alt="404" />
                <h1 className="lg:text-6xl md:text-5xl xs:text-4xl text-3xl opacity-90 pt-16 text-center">Oops...That link is broken.</h1>
                <p className="opacity-60 py-7 text-center">Sorry for the inconvenience. Go to our homepage to check out our latest collections.</p>
                <Button className="add_btn" onClick={() => navigate('/shop-default')}>Shop Now</Button>
            </div>
            <Footer />
        </>
    )
}

export default Error