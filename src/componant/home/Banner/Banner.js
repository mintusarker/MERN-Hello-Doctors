import React from 'react';
import './Banner.css';
import img1 from '../../../assets/images/test1.jpg';
import img2 from '../../../assets/images/test3.jpeg';
import { GrCheckmark } from "react-icons/gr";

const Banner = () => {
    return (

        // <div className='h-96 banner-banner'>
        //     {/* <div className='banner-img'>
        //     <img  className='img-travel' src={travel} alt="" />
        // </div> */}
        //     <div className='absolute top-60 flex justify-center transform -translate-y-1/2 w-full mx-auto'>
        //         <p className='text-center font-serif text-2xl'>Anyone can traveling for leisure, business, sports, family reasons, <br />romance, shopping, or recreation purposes. But in true sense, <br /> the whole World is a classic hotspot of tourism with <br /> diverse beauty and natural wonders.</p>
        //     </div>
        // </div>
        <div className='pb-12'>
            <div className='banner-banner flex justify-center items-center'>
                <div className='text-center bg-slate-700 p-8 bg-opacity-30 rounded'>
                <h2 className='text-3xl mb-3 leading-8'>CARING FOR LIFE</h2>
                <p>Leading the way in Medical Excellence</p>
                </div>
            </div>

            <div className='my-16 pt-10 mx-52 w-auto flex'>
                <div className='w-1/2'>
                    <div className='w-[400px] relative top-0'>
                        <img className='h-[350px]' src={img1} alt="" />
                    </div>
                    <div className='absolute translate-x-[220px] -translate-y-48'>
                        <img className='w-64 h-60' src={img2} alt="" />
                    </div>
                </div>

                <div className='w-1/2 flex flex-wrap justify-center items-center'>
                    <div className='pb-9 text-xl font-semibold capitalize'>
                        <h2>We are committed to your health</h2>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 pb-9'>
                        <GrCheckmark></GrCheckmark>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;