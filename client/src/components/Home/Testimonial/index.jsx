import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineStar } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    const testimonials = [
        {
            id: 1,
            stars: 5,
            title: "Great selection and Quality",
            text: "I love the variety of styles and the high-quality clothing on this web fashion site.",
            author: "Allen Lyn",
            location: "Customer from France",
            product: {
                name: "Cotton jersey top",
                price: "$7.95",
                image: "https://themesflat.co/html/ecomus/images/shop/products/img-p3.png",
            },
        },
        {
            id: 2,
            stars: 5,
            title: "Excellent Service",
            text: "The customer service was amazing, and the delivery was super fast.",
            author: "Sophia R.",
            location: "Customer from USA",
            product: {
                name: "Denim Jacket",
                price: "$49.95",
                image: "https://themesflat.co/html/ecomus/images/shop/products/img-p3.png",
            },
        },
        {
            id: 3,
            stars: 4,
            title: "Loved the Quality",
            text: "Great quality clothing at an affordable price with some price mean!",
            author: "James K.",
            location: "Customer from UK",
            product: {
                name: "Summer Dress",
                price: "$19.99",
                image: "https://themesflat.co/html/ecomus/images/shop/products/img-p3.png",
            },
        },
    ];

    return (
        <div className="w-[95%] m-auto py-10">
            <h1 className="text-center text-5xl">Happy Clients</h1>
            <p className="text-center text-xl pt-5">Hear what they say about us</p>
            <div className="pt-16">
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="rounded-md border p-6">
                            <div className="flex items-center space-x-2 text-2xl pb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <MdOutlineStar key={i} className="text-[#ff7b54]" />
                                ))}
                            </div>
                            <h1 className="font-semibold text-xl">{testimonial.title}</h1>
                            <p className="text-lg pt-2">&quot;{testimonial.text}&quot;</p>
                            <h1 className="font-semibold pt-4">{testimonial.author}</h1>
                            <p className="opacity-60 border-b pb-8 border-gray-400">{testimonial.location}</p>
                            <div className="pt-4 px-3 group inline-flex justify-between w-full items-center transition-all duration-1000">
                                <div className="flex items-center space-x-3">
                                    <img src={testimonial.product.image} alt={testimonial.product.name} />
                                    <div>
                                        <h1 className="hover:text-[red] cursor-pointer">
                                            {testimonial.product.name}
                                        </h1>
                                        <p className="font-semibold">{testimonial.product.price}</p>
                                    </div>
                                </div>
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <FiArrowUpRight className="border border-black cursor-pointer hover:bg-black hover:text-white rounded-full p-[6px] text-4xl transition-all duration-700" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial;
