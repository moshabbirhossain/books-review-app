import { Link } from "react-router-dom";

const Books = ( { book }) => {
    const {id, name, image, author, rating, category, tags } = book;
    return (
        <Link to={`/book/${id}`} className="max-w-xs p-6 rounded-lg shadow-xl">
                <img
                    src={image}
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-200 px-16 py-12"
                />
                <div className="mt-6 mb-2">
                    <div className="tracking-widest flex flex-row items-center gap-3">
                        {tags.map((tag)=>(  <span key={tag}className="text-xs font-medium px-3 py-2 border bg-gray-100 rounded-full text-lime-500">
                            {tag}
                        </span>))}
                    </div>
                    <h2 className="text-2xl font-bold tracking-wide mt-3 mb-4">
                        {name}
                    </h2>
                </div>
                <p className="dark:text-gray-800">By: {author}</p>
                <div className="flex justify-between items-center">
                    <p className="dark:text-gray-800">{category}</p>
                    <p className="dark:text-gray-800">{rating}</p>
                </div>
            </Link>
    );
};

export default Books;
