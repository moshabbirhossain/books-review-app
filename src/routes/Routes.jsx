import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import ListedBooks from "../pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "../pages/PagesToRead/PagesToRead.jsx";
import Book from "../pages/BookDetails/BookDetails.jsx"
import Read from "../pages/ReadBooks/Read.jsx";
import Wishlist from "../pages/WishlistBooks/Wishlist.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                // tech-1
                // path: '/',
                // tech-2
                index: true,
                element: <Home />,
                loader: () => fetch("/book.json"),
            },
            {
                path: '/book/:id',
                element: <Book />,
                loader: () => fetch('/book.json'),
            },
            {
                path: "/listedBooks",
                element: <ListedBooks />,
                children: [
                    {
                        index: true,
                        element: <Read />,
                        loader: () => fetch('/book.json'),
                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist />,
                        loader: () =>  fetch('/book.json'),

                    },
                ],
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead />,
            },
        ],
    },
]);