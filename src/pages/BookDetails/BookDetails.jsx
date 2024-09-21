import { useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";
import { saveReadBook, saveWishlistBook } from "../../utils/handleBookData/localstorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find( book => book.id==id );
    const handleReadData = () => {
        saveReadBook(parseInt(id))
    };
    const handleWishlistData = () => {
        saveWishlistBook(parseInt(id));
    };
    const { name, image, author, tags, review, totalPages, rating, category, publisher, yearOfPublishing } = book;   
    return (
        <div className="hero">
            <div className="hero-content items-start flex-col lg:flex-row lg:gap-x-12 lg:items-stretch">
                <div className="w-full lg:w-1/2 bg-base-200 border-2 rounded-lg">
                    <img src={image} alt="" className="w-1/3 lg:w-1/2 h-60 lg:h-full mx-auto lg:object-contain py-10 lg:p-0"/>
                </div>

                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl lg:text-4xl font-bold text-nowrap">{name}</h1>
                    <p className="py-6 text-xl font-bold">By : {author}</p>
                    <hr />
                    <p className="py-3 text-xl font-bold">{category}</p>
                    <hr />
                    <p className="py-6 break-all">
                        <span className="text-lg font-bold break-all">Review :</span> {review}
                    </p>
                    <div className="lg:tracking-widest flex flex-row items-center gap-2 lg:gap-3">
                        <span className="text-base font-bold">Tag</span>
                        {
                            tags.map((tag)=>(  <span key={tag}className="text-base text-nowrap font-bold px-2 py-1 border bg-gray-100 rounded-full text-[#23be0a]">
                            #{tag}</span>))
                        }
                    </div>
                    <hr className="mt-4 mb-3"/>
                    <table>
                        <tbody>
                            <tr>
                                <th className="text-start text-base font-medium">Number of Pages: </th>
                                <td className="font-bold pl-20"> {totalPages}</td>
                            </tr>
                            <tr>
                                <th className="text-start text-base font-medium">Publisher: </th>
                                <td className="font-bold pl-20">{publisher}</td>
                            </tr>
                            <tr>
                                <th className="text-start text-base font-medium">Year of Publishing: </th>
                                <td className="font-bold pl-20">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <th className="text-start text-base font-medium">Rating: </th>
                                <td className="font-bold pl-20">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-4 py-6">
                        <button onClick={handleReadData} className="btn hover:bg-white bg-opacity-100 text-base font-bold bg-[#23be0a] hover:border-[#23be0a] hover:text-black text-white px-6">
                            Read
                        </button>
                        <button onClick={handleWishlistData} className="btn text-base font-bold bg-[#39c0b5] hover:bg-white hover:border-[#39c0b5] hover:text-black text-white px-6">Wishlist</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;
