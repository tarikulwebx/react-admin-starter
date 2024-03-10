import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiChevronDown, FiLogOut } from "react-icons/fi";
import { profileNavItems } from "../../data/navbarData";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
    return (
        <Menu as="div" className="relative">
            {({ open }) => (
                <>
                    <div className="flex items-center">
                        <Menu.Button className="group inline-flex flex-row items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 md:gap-2.5">
                            <img
                                src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg"
                                alt="profile picture"
                                width={40}
                                height={40}
                                className="rounded-full md:rounded-md"
                            />
                            <div className="inline-flex gap-2.5">
                                <div className="hidden max-w-[130px] flex-col gap-1.5 text-left md:flex">
                                    <h4 className="truncate text-sm font-medium leading-none text-white">
                                        Mrs. Jose Zboncak
                                    </h4>
                                    <small className="truncate text-xs leading-none text-gray-200">Admin</small>
                                </div>
                                <FiChevronDown
                                    className={`text-xl text-gray-200 transition-all group-hover:text-white ${open && "rotate-180"}`}
                                    aria-hidden="true"
                                />
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-1 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="group flex flex-row items-center gap-2.5 border-b border-gray-200/60 p-3.5">
                                <img
                                    src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg"
                                    alt="profile picture"
                                    width={44}
                                    height={44}
                                    className="rounded-full"
                                />
                                <div className="inline-flex gap-2.5">
                                    <div className="flex max-w-[130px] flex-col gap-2 text-left">
                                        <h4 className="truncate text-sm font-semibold leading-none text-gray-600">
                                            Mrs. Jose Zboncak
                                        </h4>
                                        <small
                                            className="truncate text-[11px] leading-none text-gray-400"
                                            title="Colten.Little97@yahoo.com"
                                        >
                                            Colten.Little97@yahoo.com
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col p-2.5">
                                {profileNavItems.map((navItem, navItemIndex) => (
                                    <Menu.Item key={navItemIndex}>
                                        <Link
                                            to={navItem.link_to}
                                            className="group flex flex-row items-center gap-2 rounded-md p-2.5 text-sm font-medium leading-tight text-gray-500 transition-all hover:bg-primary/5 hover:text-primary"
                                        >
                                            <navItem.icon className="text-lg text-gray-400 transition-all group-hover:text-primary" />{" "}
                                            {navItem.label}
                                        </Link>
                                    </Menu.Item>
                                ))}
                                <Menu.Item>
                                    <button className="group flex flex-row items-center gap-2 rounded-md p-2.5 text-sm font-medium leading-tight text-gray-500 transition-all hover:bg-primary/5 hover:text-primary">
                                        <FiLogOut className="text-lg text-gray-400 transition-all group-hover:text-primary" />{" "}
                                        Logout
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};

export default ProfileMenu;
