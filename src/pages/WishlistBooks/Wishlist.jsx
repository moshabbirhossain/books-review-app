import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { getStoredWishlistBook } from '../../utils/handleBookData/localstorage';
const Wishlist = () => {
    const { list } = useOutletContext();
    const [filterlist, setFilterlist] = useState([]);
    useEffect(() => {
        const bookIds = getStoredWishlistBook();
        if (list.length > 0) {
            const  wishlistBooks = list.filter(book => bookIds.includes(book.id));
            // console.log(reads, bookIds, readBooks);
            setFilterlist(wishlistBooks);
        }
    }, [list])
    return (
        <div className='my-4 lg:my-10 space-y-6 mx-5 lg:mx-aut0'>
            {
                filterlist.map((wishlist) => (
                    <div key={wishlist.id} className="hero">
                        <div className="flex w-full hero-content items-start flex-col lg:flex-row lg:items-stretch lg:justify-start lg:gap-x-12 border rounded-lg shadow-lg my-4 lg:my-0">
                            <div className="w-2/3 mx-auto  sm:w-1/4 bg-base-200 border-2 rounded-lg p-6">
                                <img src={wishlist.image} alt="" className="w-4/5 h-40 lg:w-32 lg:h-40 mx-auto"/>
                            </div>
                            <div className="w-full sm:w-3/4">
                                <h1 className="text-xl font-bold">{wishlist.name}</h1>
                                <p className="py-3 text-lg font-bold">By : {wishlist.author}</p>
                                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-3'>
                                    <div className="lg:tracking-widest flex flex-row items-start lg:items-center gap-2 lg:gap-3">
                                        <span className="text-base font-bold">Tag</span>
                                        <div className='flex gap-2 lg:gap-3'>
                                            {
                                                wishlist.tags.map((tag)=>(  <span key={tag}className="text-base text-nowrap font-bold px-2 lg:px-4 py-0 border bg-gray-100 rounded-full text-[#23be0a]">
                                                #{tag}</span>))
                                            }
                                        </div>
                                    </div>
                                    <div className='flex  items-center gap-x-2 my-3'>
                                        <RiMapPinLine/>
                                        <p className="text-start text-base font-medium text-nowrap">Year of Publishing: {wishlist.yearOfPublishing}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-4'>
                                    <div className='flex items-center gap-x-2'>
                                        <MdOutlinePeopleAlt/>
                                        <span className="text-start text-base font-medium">Publisher: {wishlist.publisher}</span>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <PiNotebookDuotone/>
                                        <span className="text-start text-base font-medium">Page: {wishlist.totalPages}</span>
                                    </div>
                                </div>
                                <hr className="my-4 lg:my-3"/>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-y-0 lg:space-x-6'>
                                    <div className='space-x-6'>
                                        <span className="text-base text-nowrap font-medium px-4 py-1 border bg-[#8fe6e9] bg-opacity-50 rounded-full text-[#19c3c9]">
                                        Category: {wishlist.category}</span>
                                        <span className="text-base text-nowrap font-medium px-4 py-1 border bg-[#f0b86b] bg-opacity-50 rounded-full text-[#b98132]">Rating: {wishlist.rating}</span>
                                    </div>
                                    <Link to={`/book/${wishlist.id}`}>
                                        <button className="border bg-[#23be0a] hover:border-[#23be0a] hover:text-black hover:bg-white bg-opacity-95 text-base font-bold text-white px-4 rounded-full py-2 lg:my-0 w-full">
                                            View Details
                                        </button>
                                    </Link>          
                                </div>
                            </div>
                        </div>         
                    </div>
                ))
            }
        </div>

    );
};

export default Wishlist;