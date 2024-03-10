import { Link } from "react-router-dom";

const SidebarHeader = () => {
    return (
        <div className=" mb-4 flex h-16 items-center border-b border-gray-100 px-3.5">
            <h1 className="text-[22px] font-bold text-primary">
                <Link to={"/"}>HSS Master</Link>
            </h1>
        </div>
    );
};

export default SidebarHeader;
