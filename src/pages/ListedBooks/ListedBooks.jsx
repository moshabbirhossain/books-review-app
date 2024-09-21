import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Read from "../ReadBooks/Read";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/book.json')
        .then(response => response.json())
        .then(data =>  setList(data))
    }, [])
    const handleFilterData = (filter) => {
        let sortedData = [...list];
        if (filter === 'rating') {
            sortedData.sort((a, b) => b.rating - a.rating);
        }
        else if (filter === 'pages') {
            sortedData.sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (filter === 'publishedYear') {
            sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        // console.log('sorted data:', sortedData)
        setList(sortedData);
    }
    return (
        <div className="overflow-x-hidden">
            <div className="border mx-2 lg:mx-0 bg-base-200 rounded-2xl text-center text-3xl font-bold py-8 lg:text-black">
                Books
            </div>
            <div className="flex justify-center my-12">
                <ul className="menu my-6 text-white font-bold bg-[#23be0a] w-48 rounded-box">
                <li>
                    <details>
                        <summary>Sort By: </summary>
                        <ul>
                            <li onClick={()=> handleFilterData('rating')}>
                                <button>Rating</button>
                            </li>
                            <li onClick={()=>handleFilterData('pages')}>
                                <button>Number of pages</button>
                            </li>
                            <li onClick={()=>handleFilterData('publishedYear')}>
                                <button>Publisher year</button>
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
                <li className='pt-12 w-2/6 lg:w-3/4 border-b-2'>
                    <span></span>
                </li>
            </ul>
            {/* {
                listedDatas.map((listedData) =>( <Outlet key={listedData.id} listedData={listedData}/> ))
            } */}
            {/* <Read book={book} /> */}
            <Outlet context={{list}}/>
        </div>
    );
};

export default ListedBooks;