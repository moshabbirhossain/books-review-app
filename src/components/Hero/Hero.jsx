import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content  bg-base-200 border-2 rounded-lg flex-col lg:flex-row">
                <div className="w-1/2 p-16 pr-0">
                    <h1 className="text-5xl font-bold pb-12">
                        Books to freshen up your bookshelf
                    </h1>
                    <Link
                        to={"/listedBooks"}
                        className="btn text-white text-lg font-bold bg-[#23be0a] hover:bg-[#20cf05]">
                        View The List
                    </Link>
                </div>
                <div className="w-1/2 p-16">
                    <img
                        src="https://i.ibb.co.com/b6RpKnj/gray-removebg.png"
                        alt=""
                        className="h-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
