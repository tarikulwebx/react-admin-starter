import { useContext } from "react";
import { SidebarContext } from "../../contexts";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);

    return (
        <>
            <div
                className={`fixed left-0 top-0 z-50 h-screen w-[240px] -translate-x-full transform bg-white shadow transition-all duration-300 lg:translate-x-0 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* header */}
                <SidebarHeader />

                {/* nav */}
                <div>
                    <SidebarNav />
                </div>
            </div>

            {/* background effect */}
            <div
                className={`fixed bottom-0 left-0 top-0 z-40  h-full w-full bg-black/20 transition-opacity duration-300 lg:pointer-events-none lg:hidden ${showSidebar ? " opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => setShowSidebar(false)}
            />
        </>
    );
};

export default Sidebar;
