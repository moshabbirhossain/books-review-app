import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-20'>
                <Navbar/>
            </div>
            <div className="min-h-screen">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;