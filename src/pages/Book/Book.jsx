import { useLoaderData } from "react-router-dom";

const Book = () => {
    const book = useLoaderData();
    console.log(book);
    const { id, name, image, author, tags, review, totalPages, rating, category, publisher, yearOfPublishing } = book;
    return (
        <div className="hero">
            <div className="hero-content items-start flex-col lg:flex-row gap-12 w-full">
                <div className="w-1/2 bg-base-200 border-2 rounded-lg p-16">
                    <img src={image} alt="" className="w-2/3 mx-auto h-[410px]"/>
                </div>

                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="py-6">By: {author}</p>
                    <hr />
                    <p className="py-3">{category}</p>
                    <hr />
                    <p className="py-6 break-all">
                        Review: {review}
                    </p>
                    {/* <div className="tracking-widest flex flex-row items-center gap-3">
                        {
                            tags.map((tag)=>(  <span key={tag}className="text-xs font-medium px-3 py-2 border bg-gray-100 rounded-full text-lime-500">
                            {tag}
                            </span>))
                        }
                    </div> */}
                    <hr />
                    <p>Number of Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Date of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <div className="flex gap-4 py-6">
                        <a className="btn bg-gray-300 bg-opacity-100 hover: px-6">
                            Read
                        </a>
                        <a className="btn btn-accent text-white px-6">Wishlist</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
