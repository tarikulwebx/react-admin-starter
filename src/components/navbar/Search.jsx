import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiSearch } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Search = () => {
    return (
        <Popover className="relative">
            {({ close }) => (
                <>
                    <Popover.Button
                        className={`flex h-10 w-28 items-center gap-1.5 rounded-full border border-white/50 px-3 text-sm leading-none  text-white outline-none transition-all hover:border-white md:w-60`}
                    >
                        <HiSearch className="text-lg leading-none text-white/90" />{" "}
                        <span className="text-white/70">Search</span>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="fixed left-0 right-0 mt-2 w-screen origin-top-left pl-3 pr-8 sm:absolute  sm:w-[400px] sm:px-0 md:w-[480px]">
                            <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                {/* header */}
                                <div className="flex flex-row items-center gap-2 border-b border-b-gray-200/50 px-4">
                                    <HiSearch className="text-[22px] text-primary/50" />
                                    <input
                                        type="search"
                                        name="s"
                                        id="s"
                                        className="flex-1 py-4 text-sm font-normal text-gray-900 outline-none"
                                        placeholder="Search components"
                                        autoComplete="off"
                                        autoFocus={true}
                                    />
                                </div>

                                {/* Body */}
                                <div className="relative">
                                    {/* Gradients */}
                                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-full bg-gradient-to-b from-white from-20%"></div>
                                    <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-full bg-gradient-to-t from-white from-20%"></div>

                                    {/* Scroll body */}
                                    <div className="custom-scrollbar relative max-h-[300px] overflow-y-auto px-5 py-4">
                                        {/* Result Type */}
                                        <div className="mb-5">
                                            <Link
                                                to={""}
                                                className="group mb-2 flex flex-row items-center justify-between gap-4 font-medium text-gray-600 transition-all hover:text-primary"
                                                onClick={() => close()}
                                            >
                                                Result Type One
                                                <HiArrowRight className="mr-5 opacity-0 transition-all group-hover:mr-0 group-hover:text-primary group-hover:opacity-100" />
                                            </Link>

                                            <ul className="border-l-2 border-gray-100 py-1">
                                                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-5 before:-translate-y-1/2 before:bg-gray-100 before:content-[''] last:mb-0">
                                                    <Link
                                                        href=""
                                                        className="group block rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                                                        onClick={() => close()}
                                                    >
                                                        Result Item One
                                                    </Link>
                                                </li>
                                                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-5 before:-translate-y-1/2 before:bg-gray-100 before:content-[''] last:mb-0">
                                                    <Link
                                                        href=""
                                                        className="group block rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                                                        onClick={() => close()}
                                                    >
                                                        Result Item Two
                                                    </Link>
                                                </li>
                                                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-5 before:-translate-y-1/2 before:bg-gray-100 before:content-[''] last:mb-0">
                                                    <Link
                                                        href=""
                                                        className="group block rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                                                        onClick={() => close()}
                                                    >
                                                        Result Item Three
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Result Type */}
                                        <div className="mb-5">
                                            <Link
                                                href={""}
                                                className="group mb-2 flex flex-row items-center justify-between gap-4 font-medium text-gray-600 transition-all hover:text-primary"
                                                onClick={() => close()}
                                            >
                                                Result Type Two
                                                <HiArrowRight className="mr-5 opacity-0 transition-all group-hover:mr-0 group-hover:text-primary group-hover:opacity-100" />
                                            </Link>

                                            <ul className="border-l-2 border-gray-100 py-1">
                                                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-5 before:-translate-y-1/2 before:bg-gray-100 before:content-[''] last:mb-0">
                                                    <Link
                                                        href=""
                                                        className="group block rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                                                        onClick={() => close()}
                                                    >
                                                        Result Item One
                                                    </Link>
                                                </li>
                                                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-5 before:-translate-y-1/2 before:bg-gray-100 before:content-[''] last:mb-0">
                                                    <Link
                                                        href=""
                                                        className="group block rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                                                        onClick={() => close()}
                                                    >
                                                        Result Item Two
                                                    </Link>
                                                </li>
                                                <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-5 before:-translate-y-1/2 before:bg-gray-100 before:content-[''] last:mb-0">
                                                    <Link
                                                        href=""
                                                        className="group block rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                                                        onClick={() => close()}
                                                    >
                                                        Result Item Three
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Not result  */}
                                        <div className=" hidden h-[100px] items-center justify-center rounded-xl">
                                            <p className="select-none text-sm tracking-wide text-gray-500">
                                                No result found!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default Search;
