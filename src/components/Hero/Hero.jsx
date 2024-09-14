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
                        className="btn text-white bg-lime-500 hover:bg-lime-500">
                        View The List
                    </Link>
                </div>
                <div className="w-1/2 p-16">
                    <img
                        src="/images/Cover.png"
                        alt=""
                        className="h-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
