import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { IoIosStar } from "react-icons/io";

function Review() {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start md:space-y-0 space-y-10 justify-between">
        <div className='flex sm:flex-row flex-col md:w-auto w-full sm:items-center justify-between lg:space-x-32 md:space-x-14 sm:space-y-0 space-y-8'>
          <div className='flex flex-col items-center'>
            <h1 className="font-bold lg:text-8xl text-5xl pb-2">4.8</h1>
            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readOnly />
            </Stack>
            <h1 className='pt-1'>(168 Ratings)</h1>
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
          <button className="lg:px-8 px-3 py-3 font-semibold text-lg">Write a review</button>
        </div>
      </div>

      <div className='pt-10'>
        <div className='flex xs:flex-row flex-col xs:items-center justify-between xs:space-y-0 space-y-3'>
          <h1 className='text-3xl'>03 Comments</h1>
          <div className='flex items-center space-x-2'>
            <h1>Sort by:</h1>
            <select name="" id="" className='outline-none border px-2 rounded-md border-gray-300 py-2 text-lg'>
              <option value="Most Recent">Most Recent</option>
              <option value="Oldest">Oldest</option>
              <option value="Most Popular">Most Popular</option>
            </select>
          </div>
        </div>
        <div className='space-y-3 pt-5'>
          <div className='flex xs:flex-row flex-col xs:items-center xs:space-x-4'>
            <img src="https://themesflat.co/html/ecomus/images/collections/collection-circle-9.jpg" alt="" className='h-16 w-16' />
            <div>
              <h1 className='hover:text-[red] text-xl'>Superb quality apparel that exceeds expectations</h1>
              <p className='opacity-70'>1 days ago</p>
            </div>
          </div>
          <p className='opacity-80'>Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.</p>
          <div className='space-y-3 xs:ms-16 ms-8 ps-3 border-l-4'>
            <div className='flex xs:flex-row flex-col xs:items-center xs:space-x-4'>
              <img src="https://themesflat.co/html/ecomus/images/collections/collection-circle-9.jpg" alt="" className='h-16 w-16' />
              <div>
                <h1 className='hover:text-[red] text-xl'>Reply from Modave</h1>
                <p className='opacity-70'>1 days ago</p>
              </div>
            </div>
            <p className='opacity-80'>We love to hear it! Part of what we love most about Modave is how much it empowers store owners like yourself to build a beautiful website without having to hire a developer :) Thank you for this fantastic review!</p>
          </div>
        </div>
        <div className='space-y-3 pt-5'>
          <div className='flex xs:flex-row flex-col xs:items-center xs:space-x-4'>
            <img src="https://themesflat.co/html/ecomus/images/collections/collection-circle-9.jpg" alt="" className='h-16 w-16' />
            <div>
              <h1 className='hover:text-[red] text-xl'>Superb quality apparel that exceeds expectations</h1>
              <p className='opacity-70'>1 days ago</p>
            </div>
          </div>
          <p className='opacity-80'>Great theme - we were looking for a theme with lots of built in features and flexibility and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query and the support given was swift and helpful.</p>
        </div>
      </div>
    </div>
  )
}

export default Review