import { MdOutlineCategory } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { LiaHomeSolid } from "react-icons/lia";
import { FiTag } from "react-icons/fi";
import { GrArticle } from "react-icons/gr";

export const sidebarNavGroups = [
    {
        title: "Dashboard",
        showGroupTitle: false,
        navItems: [
            {
                label: "Dashboard",
                link_to: "/",
                icon: LiaHomeSolid,
            },
            {
                label: "Users",
                link_to: "/users",
                icon: HiOutlineUsers,
            },
        ],
    },
    {
        title: "Articles",
        showGroupTitle: true,
        navItems: [
            {
                label: "All Articles",
                link_to: "/articles",
                icon: GrArticle,
            },
            {
                label: "Categories",
                link_to: "/categories",
                icon: MdOutlineCategory,
            },
            {
                label: "Tags",
                link_to: "/tags",
                icon: FiTag,
            },
        ],
    },
];
