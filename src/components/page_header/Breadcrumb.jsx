import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadcrumbItems }) => {
    return (
        <nav>
            <ul className="flex flex-row text-sm">
                {breadcrumbItems.map((breadcrumbItem, index) => (
                    <li
                        key={index}
                        className="relative font-normal leading-tight text-gray-400 before:px-2 before:text-gray-400 before:content-['/'] first:before:px-0 first:before:content-['']"
                    >
                        {breadcrumbItem.link_to ? (
                            <Link to={breadcrumbItem.link_to} className="text-primary">
                                {breadcrumbItem.label}
                            </Link>
                        ) : (
                            <span>{breadcrumbItem.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Breadcrumb.propTypes = {
    breadcrumbItems: Proptypes.arrayOf(
        Proptypes.shape({
            link_to: Proptypes.string.isRequired,
            label: Proptypes.string.isRequired,
        })
    ),
};

export default Breadcrumb;
