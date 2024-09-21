import { useLoaderData } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";
import Books from "../../components/Books/Books.jsx";
const Home = () => {
    const books = useLoaderData();
    // console.log(books);
    return (
        <div className="">
            <Hero />
            <div className="mt-20 mb-10">
                <h1 className="text-center text-5xl font-bold mb-12">Books</h1>
                <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-16 shadow-sm">
                    {
                        books.map( book => (
                            <Books key={book.id} book={book} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
