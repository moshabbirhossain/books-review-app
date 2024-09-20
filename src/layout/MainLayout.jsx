import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
    return (
        <div>
            <div className='h-20'>
                <Navbar/>
            </div>
            <div className="min-h-screen mx-32  py-6">
                <Outlet/>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default MainLayout;