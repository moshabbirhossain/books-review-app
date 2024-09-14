import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import ListedBooks from "../pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "../pages/PagesToRead/PagesToRead.jsx";
import Book from "../pages/Book/Book.jsx"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                // tech-1
                // path: '/',
                // tech-2
                index: true,
                element: <Home />,
                loader: () => 
                    fetch("http://localhost:4000/books"),
            },
            {
                path: '/book/:id',
                element: <Book />,
                loader: ({ params }) => fetch(`http://localhost:4000/books/${params.id}`),
            },
            {
                path: "/listedBooks",
                element: <ListedBooks />,
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead />,
            },
        ],
    },
]);
import book from '../../public/book.json'