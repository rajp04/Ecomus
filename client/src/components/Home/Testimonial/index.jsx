import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from 'axios'

import { useNavigate } from "react-router-dom";
import { Rating, Stack } from "@mui/material";

function Testimonial() {

    const [data, setData] = useState()

    const navigate = useNavigate()

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

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const { data } = await axios.get(`http://localhost:7001/api/review`);

                if (data?.success === 1) {
                    setData(data?.reviews);
                } else {
                    console.log(data?.message);
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };
        fetchReview();
    }, []);

    return (
        <div className="w-[95%] m-auto py-10">
            <h1 className="text-center text-5xl">Happy Clients</h1>
            <p className="text-center text-xl pt-5">Hear what they say about us</p>
            <div className="pt-16">
                <Slider {...settings}>
                    {data?.map((item, index) => (
                        <div key={index} className="rounded-md border p-6">
                            <div className="flex items-center space-x-2 text-2xl pb-4">
                                <Stack spacing={1}>
                                    <Rating
                                        name="half-rating-read"
                                        value={Math.round(item.rating)}
                                        precision={0.5}
                                        readOnly
                                    />
                                </Stack>
                            </div>
                            <h1 className="font-semibold text-xl">{item.title}</h1>
                            <p className="text-lg pt-2">&quot;{item.comment}&quot;</p>
                            <h1 className="font-semibold pt-4">{item.name}</h1>
                            <div className="pt-4 group inline-flex justify-between w-full transition-all duration-1000">
                                <div className="flex space-x-3">
                                    <img src={item?.product.images?.[0]} alt={item?.product?.name} className="h-24 w-auto rounded-sm" />
                                    <div>
                                        <h1 className="hover:text-[red] cursor-pointer">
                                            {item?.product?.name}
                                        </h1>
                                        <p className="font-semibold">₹{item?.product?.variants?.[0].price - item?.product?.variants?.[0].discount}</p>
                                    </div>
                                </div>
                                <div className="hidden group-hover:block transition-all duration-1000">
                                    <FiArrowUpRight className="border border-black cursor-pointer hover:bg-black hover:text-white rounded-full p-[6px] text-4xl transition-all duration-700" onClick={() => navigate(`shop-default/${item.product._id}`)} />
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