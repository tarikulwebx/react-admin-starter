import Brand from "./Brand";
import ProfileMenu from "./ProfileMenu";
import Search from "./Search";
import SidebarToggler from "./SidebarToggler";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-30 flex h-16 flex-row items-center justify-between bg-primary px-4 shadow md:px-6">
            {/* Left contents */}
            <div className="flex flex-row items-center gap-3 lg:gap-4">
                {/* Brand */}
                <Brand />

                {/* Sidebar toggler */}
                <SidebarToggler />

                {/* Search menu */}
                <Search />
            </div>

            {/* Right contents */}
            <div className="flex flex-row items-center">
                <ProfileMenu />
            </div>
        </div>
    );
};

export default Navbar;
