import { Link } from "react-router-dom";

const SidebarHeader = () => {
    return (
        <div className=" mb-4 flex h-16 items-center border-b border-gray-100 px-3.5">
            <h1 className="text-[22px] font-bold text-primary">
                <Link to={"/"} className="flex flex-row items-center gap-2">
                    <img src="/logo.png" width={40} height={40} alt="logo" className="h-11 w-11" />
                    MMS Master
                </Link>
            </h1>
        </div>
    );
};

export default SidebarHeader;
