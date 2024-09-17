import { useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";

const Book = () => {
    const books = useLoaderData();
    const [read, setRead] =  useState([]);

    // console.log(books);
    const { id } = useParams();
    const book = books.find( book => book.id==id );
    
    const handleReadData = (book) => {
        // const isExist = 
        setRead([...read, book]);
    };
    // console.log(book);
    const { name, image, author, tags, review, totalPages, rating, category, publisher, yearOfPublishing } = book;   
    return (
        <div className="hero">
            <div className="hero-content items-start flex-col lg:flex-row gap-x-12 lg:items-stretch">
                <div className="w-1/2 bg-base-200 border-2 rounded-lg">
                    <img src={image} alt="" className="w-1/2 h-full mx-auto object-contain"/>
                </div>

                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="py-6 text-xl font-bold">By : {author}</p>
                    <hr />
                    <p className="py-3 text-xl font-bold">{category}</p>
                    <hr />
                    <p className="py-6 break-all">
                        <span className="text-lg font-bold">Review :</span> {review}
                    </p>
                    <div className="tracking-widest flex flex-row items-center gap-3">
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
                        <div onClick={ () => handleReadData(book)} className="btn hover:bg-white bg-opacity-100 text-base font-bold bg-[#23be0a] hover:border-[#23be0a] hover:text-black text-white px-6">
                            Read
                        </div>
                        <div className="btn text-base font-bold bg-[#39c0b5] hover:bg-white hover:border-[#39c0b5] hover:text-black text-white px-6" wishlist={book}>Wishlist</div>
                    </div>
                </div>
                {/* <Outlet/> */}
            </div>
            
        </div>
    );
};

export default Book;
