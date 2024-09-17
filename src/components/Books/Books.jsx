import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const Books = ( { book }) => {
    // console.log(book)
    const {id, name, image, author, rating, category, tags } = book;
    return (
        <Link to={`/book/${id}`} className="max-w-xs p-6 border rounded-lg shadow-lg">
                <div  className="w-full bg-gray-200 rounded-lg">
                    <img
                        src={image}
                        alt=""
                        className="object-cover object-center w-24 mx-auto rounded-lg h-48 py-8"
                    />
                </div>
                <div className="mt-6">
                    <div className="tracking-widest flex flex-row items-center gap-3">
                        {tags.map((tag)=>(  <span key={tag}className="text-sm text-nowrap font-bold px-2 py-1 border bg-gray-100 rounded-full text-[#23be0a]">
                            {tag}
                        </span>))}
                    </div>
                    <h2 className="text-xl font-bold tracking-wide mt-3">
                        {name}
                    </h2>
                </div>
                <p className="text-lg">By: <span className="text-lg font-semibold">{author}</span></p>
                <hr className="border border-dotted my-3"/>
                <div className="flex justify-between items-center font-medium">
                    <p className="dark:text-gray-800">{category}</p>
                    <div className="flex justify-between items-center space-x-2">
                        <p className="dark:text-gray-800">{rating}</p>
                        <FaRegStar/>
                    </div>
                </div>
            </Link>
    );
};

export default Books;
