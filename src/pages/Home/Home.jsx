import { useLoaderData } from "react-router-dom";
import Hero from "../../components/Hero/Hero.jsx";
import Books from "../../components/Books/Books.jsx";
const Home = () => {
    const books = useLoaderData();
    // console.log(books);
    return (
        <div className="grid items-center justify-center">
            <Hero />
            <div className="mt-20 mb-10">
                <h1 className="text-center text-5xl font-bold mb-12">Books</h1>
                <div className="grid grid-cols-3 gap-16">
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
