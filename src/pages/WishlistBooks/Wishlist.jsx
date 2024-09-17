import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
const Wishlist = () => {
    const reads = useLoaderData();
    // const id = useParams();
    // const book = find( book =>  book.id === id );
    // const {name,  price, image} = book;


    return (
        <div className='my-10 space-y-6'>
            {
                reads.map((read)=> (
                    <div key={read.id}>
                        <div className="hero">
                            <div className="w-full hero-content items-start flex-col lg:flex-row  lg:items-stretch lg:justify-between lg:gap-x-12 border rounded-lg shadow-sm">
                                <div className="w-1/4 bg-base-200 border-2 rounded-lg p-6">
                                    <img src={read.image} alt="" className="w-32 h-40 mx-auto"/>
                                </div>

                                <div className="w-3/4">
                                    <h1 className="text-xl font-bold">{read.name}</h1>
                                    <p className="py-3 text-lg font-bold">By : {read.author}</p>
                                
                                    
                                    {/* <p className="py-6 break-all">
                                        <span className="text-lg font-bold">Review :</span> {read.review}
                                    </p> */}
                                    <div className='flex items-center gap-x-3'>
                                        <div className="tracking-widest flex flex-row items-center gap-3">
                                            <span className="text-base font-bold">Tag</span>
                                            {
                                                read.tags.map((tag)=>(  <span key={tag}className="text-base text-nowrap font-bold px-4 py-0 border bg-gray-100 rounded-full text-[#23be0a]">
                                                #{tag}</span>))
                                            }
                                        </div>
                                        <div className='flex items-center gap-x-2 my-3'>
                                            <RiMapPinLine/>
                                            <p className="text-start text-base font-medium">Year of Publishing: {read.yearOfPublishing}</p>
                                        </div>
                                    </div>
                                    <div className='flex space-x-3'>
                                        <div className='flex items-center gap-x-2'>
                                            <MdOutlinePeopleAlt/>
                                            <span className="text-start text-base font-medium">Publisher: {read.publisher}</span>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <PiNotebookDuotone/>
                                            <span className="text-start text-base font-medium">Page: {read.totalPages}</span>
                                        </div>
                                    </div>
                                    <hr className="my-3"/>
                                    <div className='space-x-6'>
                                        <span className="text-base text-nowrap font-medium px-4 py-1 border bg-[#8fe6e9] bg-opacity-50 rounded-full text-[#19c3c9]">
                                            Category: {read.category}</span>
                                        <span className="text-base text-nowrap font-medium px-4 py-1 border bg-[#f0b86b] bg-opacity-50 rounded-full text-[#b98132]">Rating: {read.rating}</span>
                                        <Link to=''>
                                        <button className="border bg-[#23be0a] hover:border-[#23be0a] hover:text-black hover:bg-white bg-opacity-95 text-base font-bold text-white px-4 rounded-full py-1">
                                                View Details
                                            </button>
                                        </Link>
                                   </div>

                                </div>
                                {/* <Outlet/> */}
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    );
};

export default Wishlist;