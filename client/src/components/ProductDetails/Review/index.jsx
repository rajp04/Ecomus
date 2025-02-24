import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { IoIosStar } from "react-icons/io";
import axios from 'axios'
import { useParams } from 'react-router-dom';

function Review() {

  const [write, setWrite] = useState(true)
  const [data, setData] = useState([])
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);

  const { id } = useParams();

  const handleSubmit = async () => {
    const review = { name, email, title, comment, rating, product: id }
    try {
      const { data } = await axios.post(`http://localhost:7001/api/review/create`, review);

      if (data?.success === 1) {
        setWrite(true)
      } else {
        console.log(data?.message);
      }

    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review.");
    }
  };

  useEffect(() => {
    const fetchReview = async () => {
      const { data } = await axios.get(`http://localhost:7001/api/review/${id}`);
      if (data?.success === 1) {
        setData(data?.reviews)
      } else {
        console.log(data?.message);
      }
    }
    fetchReview();
  }, [id]);

  const averageRating = data?.length > 0
    ? data.reduce((sum, review) => sum + review.rating, 0) / data.length
    : 0;

  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start md:space-y-0 space-y-10 justify-between">
        <div className='flex sm:flex-row flex-col md:w-auto w-full sm:items-center justify-between lg:space-x-32 md:space-x-14 sm:space-y-0 space-y-8'>
          <div className='flex flex-col items-center'>
            <h1 className="font-bold lg:text-8xl text-5xl pb-2">
              {Math.round(averageRating)}
            </h1>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                value={Math.round(averageRating)}
                precision={0.5}
                readOnly
              />
            </Stack>
            <h1 className='pt-1'>({data?.length} Ratings)</h1>
          </div>

          <div>
            <div className='flex items-center space-x-2'>
              <h1>5</h1>
              <IoIosStar className='text-[#ffb321] text-xl' />
              <div className='h-[10px] sm:w-60 w-full bg-gray-300'>
                <h1 className={`bg-[#ffb321] w-[95%] h-[10px]`}></h1>
              </div>
              <h1>59</h1>
            </div>
            <div className='flex items-center space-x-2'>
              <h1>4</h1>
              <IoIosStar className='text-[#ffb321] text-xl' />
              <div className='h-[10px] sm:w-60 w-full bg-gray-300'>
                <h1 className={`bg-[#ffb321] w-[85%] h-[10px]`}></h1>
              </div>
              <h1>30</h1>
            </div>
            <div className='flex items-center space-x-2'>
              <h1>3</h1>
              <IoIosStar className='text-[#ffb321] text-xl' />
              <div className='h-[10px] sm:w-60 w-full bg-gray-300'>
                <h1 className={`bg-[#ffb321] w-[20%] h-[10px]`}></h1>
              </div>
              <h1>10</h1>
            </div>
            <div className='flex items-center space-x-2'>
              <h1>2</h1>
              <IoIosStar className='text-[#ffb321] text-xl' />
              <div className='h-[10px] sm:w-60 w-full bg-gray-300'>
                <h1 className={`bg-[#ffb321] w-[0%] h-[10px]`}></h1>
              </div>
              <h1>0</h1>
            </div>
            <div className='flex items-center space-x-2'>
              <h1>1</h1>
              <IoIosStar className='text-[#ffb321] text-xl' />
              <div className='h-[10px] sm:w-60 w-full bg-gray-300'>
                <h1 className={`bg-[#ffb321] w-[0%] h-[10px]`}></h1>
              </div>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="border rounded-md border-black">
          <button className="lg:px-8 px-3 py-3 font-semibold text-lg" onClick={() => setWrite(false)}>{write ? 'Write a review' : "Cancel Review"}</button>
        </div>
      </div>

      {write === true ? (
        <div className='pt-10'>
          <div className='flex xs:flex-row flex-col xs:items-center justify-between xs:space-y-0 space-y-3'>
            <h1 className='text-3xl'>{data?.length} Comments</h1>
          </div>
          {data?.map((item, index) => {
            const date = new Date(item.createdAt);
            const today = new Date();
            const diffTime = today - date;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            return (
              <div className='space-y-3 pt-5' key={index}>
                <div className='flex xs:flex-row flex-col xs:items-center xs:space-x-4'>
                  <img src="https://themesflat.co/html/ecomus/images/collections/collection-circle-9.jpg" alt="" className='h-16 w-16' />
                  <div>
                    <h1 className='hover:text-[red] text-xl'>{item.title}</h1>
                    <p className='opacity-70'>{diffDays} days ago</p>
                  </div>
                </div>
                <p className='opacity-80'>{item.comment}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-3xl py-5 flex items-center">
              Write a review:
              <Stack spacing={1} className="rating">
                <Rating
                  name="half-rating"
                  value={rating}
                  precision={0.5}
                  onChange={(event, newValue) => setRating(newValue)}
                />
              </Stack>
            </h1>
          </div>
          <div>
            <label className="mb-2">Review Title:</label>
            <input
              type="text"
              placeholder="Give your review a title"
              className="mt-2 mb-5 w-full py-2 px-4 border text-lg outline-none rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Review:</label>
            <input
              type="text"
              placeholder="Write your comment here"
              className="mt-2 w-full py-2 px-4 border text-lg outline-none rounded-md"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className='flex items-center space-x-5 mt-5'>
              <input
                type="text"
                placeholder="You Name (Public)"
                className="mt-2 w-full py-2 px-4 border text-lg outline-none rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Your Email (Private)"
                className="mt-2 w-full py-2 px-4 border text-lg outline-none rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="add_btn rounded-md mt-5"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;