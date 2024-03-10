import { useContext } from "react";
import { SidebarContext } from "../../contexts";
import { FaBars } from "react-icons/fa6";

const SidebarToggler = () => {
    const { setShowSidebar } = useContext(SidebarContext);

    return (
        <button
            className="rounded-md bg-black/20 p-2 text-white transition hover:bg-black/30 hover:text-white active:bg-black/40 lg:hidden"
            onClick={() => setShowSidebar((prev) => !prev)}
        >
            <FaBars className="text-lg" />
        </button>
    );
};

export default SidebarToggler;
