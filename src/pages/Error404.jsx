import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Error404 = () => {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center bg-[url('/images/lost-404.jpg')] bg-cover bg-center">
            <div className="absolute left-0 top-0 h-full  w-full bg-black/50" />
            <div className="z-10 text-center text-white">
                <h1 className="text-9xl font-black">
                    4<span className="text-[9rem] text-primary">0</span>4
                </h1>
                <h2 className="mb-2 text-2xl font-bold uppercase">Page not found!</h2>
                <p>Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-14">
                    <Link to="/" className="inline-flex flex-row items-center justify-center gap-2 font-bold">
                        <FaArrowLeft />
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;
