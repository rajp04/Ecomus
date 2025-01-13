import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

function Categories() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        const slider = sliderRef.current;
        const scrollAmount = slider.offsetWidth;
        slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        const slider = sliderRef.current;
        const scrollAmount = slider.offsetWidth;
        slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="py-16 w-[95%] m-auto">
            <div className="flex items-center space-x-2 pb-7">
                <FaAngleLeft
                    className="border border-black cursor-pointer hover:bg-black hover:text-white rounded-full p-[6px] text-3xl"
                    onClick={scrollLeft}
                />
                <FaAngleRight
                    className="border border-black cursor-pointer hover:bg-black hover:text-white rounded-full p-[6px] text-3xl"
                    onClick={scrollRight}
                />
                <h1 className="ps-4 font-semibold text-xl">Shop By Categories</h1>
            </div>

            <div className="flex flex-wrap md:flex-row flex-col md:flex-nowrap w-full gap-5">
                {/* Slider Section */}
                <div
                    className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth flex-grow"
                    ref={sliderRef}
                >
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="lg:w-[33.5%] xs:w-[51%] w-full flex-shrink-0 snap-start px-2"
                        >
                            <div className="relative rounded-md overflow-hidden">
                                <div
                                    className="hover:scale-[1.05] transition-transform duration-700"
                                    style={{
                                        backgroundImage: `url('https://themesflat.co/html/ecomus/images/collections/collection-17.jpg')`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        height: "450px",
                                    }}
                                ></div>
                                {/* Button Section */}
                                <button className="bg-white hover:bg-black hover:text-white transition-all duration-1000 px-7 py-2 text-xl font-medium absolute bottom-5 left-5 rounded-sm group inline-flex items-center">
                                    Clothing
                                    <FiArrowUpRight className="ms-1 hidden group-hover:block transition-all" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Discover Section */}
                <div className="border border-black rounded-md p-6 flex md:flex-col md:justify-end justify-between md:items-start items-center md:w-[25%] lg:w-[22.5%] md:space-y-8">
                    <h1 className="sm:text-4xl text-2xl text-start">
                        Discover all new items
                    </h1>
                    <FiArrowUpRight className="border border-black cursor-pointer hover:bg-black hover:text-white rounded-full p-[6px] text-5xl transition-all duration-700" />
                </div>
            </div>
        </div>
    );
}

export default Categories;