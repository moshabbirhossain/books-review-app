import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content  bg-base-200 lg:border-2 rounded-lg flex-col lg:flex-row">
                <div className="w-full text-center lg:text-start lg:w-1/2 px-2 py-6 lg:p-16 lg:pr-0">
                    <h1 className="text-4xl lg:text-5xl font-bold pb-4 lg:pb-12">
                        Books to freshen up your bookshelf
                    </h1>
                    <Link
                        to={"/listedBooks"}
                        className="btn text-white text-lg font-bold bg-[#23be0a] hover:bg-[#20cf05]">
                        View The List
                    </Link>
                </div>
                <div className="w-full lg:w-1/2 pt-4 pb-8 lg:p-16">
                    <img
                        src="https://i.ibb.co.com/b6RpKnj/gray-removebg.png"
                        alt=""
                        className="w-2/3 mx-auto h-72 lg:h-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
