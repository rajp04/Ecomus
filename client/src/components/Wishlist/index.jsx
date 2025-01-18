import Header from "../Header";
import TopBar from "../TopBar";
import Footer from "../Footer";
import Card from "./Card";

function Wishlist() {
    return (
        <>
            <TopBar />
            <Header />
            <div className="pt-5 pb-16">
                <div className="flex items-center justify-center py-24" style={{
                    backgroundImage: `url('https://themesflat.co/html/ecomus/images/shop/file/page-title-blog.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} >
                    <h1 className="text-5xl">Your Wishlist</h1>
                </div>
            </div>
            <Card />
            <Footer />
        </>
    );
}

export default Wishlist;