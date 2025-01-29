import { useState } from "react";
import Footer from "../Footer"
import Header from "../Header"
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaSquarePinterest } from "react-icons/fa6";
import axios from 'axios'


function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    // const url = import.meta.env.VITE_SERVER_URL

    const handleSubmit = async () => {
        try {
            const user = { name, email, message }

            const { data } = await axios.post(`http://localhost:7001/api/inquiry/create`, user);
            if (data?.success === 1) {
                setName('')
                setMessage('')
                setEmail('')
            } else (
                setError(data?.message)
            )

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <div className="pt-5 pb-10">
                <div className="flex items-center justify-center py-24" style={{
                    backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} >
                    <h1 className="text-5xl">Contact Us</h1>
                </div>

                <div className='w-full'>
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4078661723725!2d72.50773629999999!3d23.045503900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ac539ac151%3A0x6acae7cc1aec8366!2sExcelsior%20Technologies%C2%AE!5e0!3m2!1sen!2sin!4v1733846566599!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 llg:w-[80%] w-[95%] m-auto pt-16">
                    <div className="col-span-1 space-y-5">
                        <h1 className="text-3xl">Visit Our Store</h1>
                        <h1 className="font-bold">Address</h1>
                        <p>66 Mott St, New York, New York, Zip Code: 10006, AS</p>
                        <h1 className="font-bold">Phone</h1>
                        <p>(623) 934-2400</p>
                        <h1 className="font-bold">Email</h1>
                        <p>EComposer@example.com</p>
                        <h1 className="font-bold">Open Time</h1>
                        <p>Our store has re-opened for shopping,</p>
                        <p>exchange Every day 11am to 7pm</p>
                        <div className="flex items-center space-x-4">
                            <FaFacebookF className="hover:text-[red] cursor-pointer" />
                            <FaXTwitter className="hover:text-[red] cursor-pointer" />
                            <FaInstagram className="hover:text-[red] cursor-pointer" />
                            <FaTiktok className="hover:text-[red] cursor-pointer" />
                            <FaSquarePinterest className="hover:text-[red] cursor-pointer" />
                        </div>
                    </div>
                    <div className="col-span-1 space-y-5">
                        <h1 className="text-3xl">Get in Touch</h1>
                        <p className="opacity-80">If you’ve got great products your making or looking to work with us then drop us a line.</p>
                        <div className="flex xs:flex-row flex-col items-center w-full xs:space-x-4 xs:space-y-0 space-y-5">
                            <input type="text" placeholder="Name *" className="w-full border-gray-300 outline-none px-4 py-3 opacity-60 border rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Email *" className="w-full border-gray-300 outline-none px-4 py-3 opacity-60 border rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <textarea name="" id="" rows={5} placeholder="Message" className="w-full border-gray-300 outline-none px-4 py-3 opacity-60 border rounded-md" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <h1 className="text-red-500 font-medium">{error}</h1>
                        <button className="bg-black text-white rounded-md w-full text-center py-3" onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact