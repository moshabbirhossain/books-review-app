import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useOutletContext } from 'react-router-dom';
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiNotebookDuotone } from "react-icons/pi";
import { getStoredReadBook } from '../../utils/handleBookData/localstorage';
const Read = () => {
    // const reads = useLoaderData();
    const { list } = useOutletContext();
    const [filterlist, setFilterlist] = useState([]);
    useEffect(() => {
        const bookIds = getStoredReadBook();
        if (list.length > 0) {
            const  readBooks = list.filter(book => bookIds.includes(book.id));
            // console.log(reads, bookIds, readBooks);
            setFilterlist(readBooks);
        }
    }, [list])
    return (
        <div className='my-10 space-y-6'>
            {
                filterlist.map((readlist) => (
                    <div key={readlist.id} className="hero">
                        <div className="w-full hero-content items-start flex-col lg:flex-row  lg:items-stretch lg:justify-between lg:gap-x-12 border rounded-lg shadow-sm">
                            <div className="w-1/4 bg-base-200 border-2 rounded-lg p-6">
                                <img src={readlist.image} alt="" className="w-32 h-40 mx-auto"/>
                            </div>
                            <div className="w-3/4">
                                <h1 className="text-xl font-bold">{readlist.name}</h1>
                                <p className="py-3 text-lg font-bold">By : {readlist.author}</p>
                                <div className='flex items-center gap-x-3'>
                                    <div className="tracking-widest flex flex-row items-center gap-3">
                                        <span className="text-base font-bold">Tag</span>
                                        {
                                            readlist.tags.map((tag)=>(  <span key={tag}className="text-base text-nowrap font-bold px-4 py-0 border bg-gray-100 rounded-full text-[#23be0a]">
                                                #{tag}</span>))
                                        }
                                    </div>
                                    <div className='flex items-center gap-x-2 my-3'>
                                        <RiMapPinLine/>
                                        <p className="text-start text-base font-medium">Year of Publishing: {readlist.yearOfPublishing}</p>
                                    </div>
                                </div>
                                <div className='flex space-x-3'>
                                    <div className='flex items-center gap-x-2'>
                                        <MdOutlinePeopleAlt/>
                                        <span className="text-start text-base font-medium">Publisher: {readlist.publisher}</span>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <PiNotebookDuotone/>
                                        <span className="text-start text-base font-medium">Page: {readlist.totalPages}</span>
                                    </div>
                                </div>
                                <hr className="my-3"/>
                                <div className='space-x-6'>
                                    <span className="text-base text-nowrap font-medium px-4 py-1 border bg-[#8fe6e9] bg-opacity-50 rounded-full text-[#19c3c9]">
                                        Category: {readlist.category}</span>
                                    <span className="text-base text-nowrap font-medium px-4 py-1 border bg-[#f0b86b] bg-opacity-50 rounded-full text-[#b98132]">Rating: {readlist.rating}</span>
                                    <Link to={`/book/${readlist.id}`}>
                                        <button className="border bg-[#23be0a] hover:border-[#23be0a] hover:text-black hover:bg-white bg-opacity-95 text-base font-bold text-white px-4 rounded-full py-1">
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

export default Read;