import { toast } from "react-toastify";

const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read-data')
    if (storedReadBook) {
        return JSON.parse(storedReadBook)
    }
    return [];
}

const saveReadBook = (id) => {
    const storedWishlistBooks = getStoredWishlistBook();  
    const storedReadBooks = getStoredReadBook();  
    const alreadyInReadList = storedReadBooks.includes(id);  
    const alreadyInWishlist = storedWishlistBooks.includes(id);  
    if (alreadyInWishlist) {
        const updatedWishlistBooks = storedWishlistBooks.filter(bookId => bookId !== id); 
        localStorage.setItem('wishlist-data', JSON.stringify(updatedWishlistBooks));  
        storedReadBooks.push(id); 
        localStorage.setItem('read-data', JSON.stringify(storedReadBooks));  
        toast.success("Successfully added from wishlist to read list");
    } 
    else if (!alreadyInReadList) {
        storedReadBooks.push(id);
        localStorage.setItem('read-data', JSON.stringify(storedReadBooks)); 
        toast.success("Successfully added to read list");
    } 
    else {
        toast.error('Already exists in the read list');
    }
}
const getStoredWishlistBook = () => {
    const storedWishlistBook = localStorage.getItem('wishlist-data')
    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook)
    }
    return [];
}

const saveWishlistBook = (id) => {
    const storedReadBooks = getStoredReadBook();  
    const storedWishlistBooks = getStoredWishlistBook();  
    const alreadyInReadList = storedReadBooks.includes(id);  
    const alreadyInWishlist = storedWishlistBooks.includes(id); 
    if (alreadyInReadList) {
        toast.error('Already exists in the readlist');
    }
    else if (!alreadyInWishlist) {
        storedWishlistBooks.push(id); 
        localStorage.setItem('wishlist-data', JSON.stringify(storedWishlistBooks));
        toast.success("Successfully added to wishlist");
    }
    else {
        toast.error('Already exists in the wishlist');
    }
}

export { getStoredReadBook, saveReadBook, getStoredWishlistBook, saveWishlistBook }
