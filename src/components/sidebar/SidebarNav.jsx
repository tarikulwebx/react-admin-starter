import { NavLink } from "react-router-dom";
import { sidebarNavGroups } from "../../data/sidebarData";

const SidebarNav = () => {
    return (
        <nav className="px-3.5">
            {sidebarNavGroups.map((navGroup, navGroupIndex) => (
                <div key={navGroupIndex} className={`${navGroup.showGroupTitle && "mt-6 first:mt-0"}`}>
                    {navGroup.showGroupTitle && (
                        <small className="mb-2 block text-xs font-medium uppercase text-gray-400">
                            {navGroup.title}
                        </small>
                    )}
                    <ul className="mb-1.5 flex flex-col gap-1.5">
                        {navGroup.navItems.map((navItem, navItemIndex) => (
                            <li key={navItemIndex}>
                                <NavLink
                                    to={navItem.link_to}
                                    className="flex flex-row items-center gap-2.5 rounded-lg px-2.5 py-2 text-[15px] font-medium text-gray-500 transition-all hover:bg-primary/5 hover:text-primary [&.active]:bg-primary/5 [&.active]:text-primary"
                                >
                                    <navItem.icon className="text-xl opacity-80" /> {navItem.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
};

export default SidebarNav;
