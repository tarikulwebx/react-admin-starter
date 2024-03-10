import { FaRegCircleUser } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";

export const profileNavItems = [
    {
        label: "Profile",
        link_to: "/profile",
        icon: FaRegCircleUser,
    },
    {
        label: "Settings",
        link_to: "/profile/settings",
        icon: FiSettings,
    },
];
