import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-20'>
                <Navbar/>
            </div>
            <div className="min-h-screen mx-32  py-6">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;