import PropTypes from "prop-types";
import Breadcrumb from "./Breadcrumb";

const PageHeader = ({ title, breadcrumbItems }) => {
    return (
        <div className="mb-6 py-4">
            <h2 className="mb-1 text-[22px] font-bold leading-tight text-cyan-900">{title ?? "Page Title"}</h2>
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
    breadcrumbItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link_to: PropTypes.string.isRequired,
        })
    ),
};

PageHeader.defaultProps = {
    title: "Page Title",
    breadcrumbItems: [
        { label: "Home", link_to: "/" },
        { label: "Page 2", link_to: "" },
    ],
};

export default PageHeader;
