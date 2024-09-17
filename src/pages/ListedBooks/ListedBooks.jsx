import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    // const listedDatas = useLoaderData();
    return (
        <div className="">
            <div className="border bg-base-200 rounded-2xl text-center text-3xl font-bold py-8 text-black">
                Books
            </div>
            <div className="flex justify-center my-12">
                <ul className="menu my-6 text-white font-bold bg-[#23be0a] w-40 rounded-box">
                <li>
                    <details>
                        <summary>Sort By: </summary>
                        <ul>
                            <li>
                                Rating
                            </li>
                            <li>
                                Number of pages
                            </li>
                            <li>
                                Publisher year
                            </li>
                        </ul>
                    </details>
                </li>
                </ul>
            </div>
            <ul className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                <Link to='' onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-base font-medium cursor-pointer ${tabIndex===0 ?  'border-2 border-b-0 rounded-t-lg' : 'border-b-2 text-gray-500'}`}>
                    <span>Read Books</span>
                </Link>
                <Link to={'wishlist'} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-base font-medium cursor-pointer ${tabIndex===1 ?  'border-2 border-b-0 border-r- rounded-t-lg' : 'border-b-2 text-gray-500'}`}>
                    <span>Wishlist Books</span>
                </Link>
                <li className='pt-12 w-3/4 border-b-2'>
                    <span></span>
                </li>
            </ul>
            {/* {
                listedDatas.map((listedData) =>( <Outlet key={listedData.id} listedData={listedData}/> ))
            } */}
            <Outlet />
        </div>
    );
};

export default ListedBooks;