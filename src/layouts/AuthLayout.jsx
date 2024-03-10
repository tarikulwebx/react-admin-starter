import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[url('/images/auth-bg.jpg')] bg-cover bg-center p-6 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:-z-0 after:h-full after:w-full after:bg-black/40 after:content-[''] md:p-10">
            <div className="relative z-10 max-h-full w-full overflow-y-auto overflow-x-hidden rounded-xl bg-white p-6 shadow shadow-white sm:w-[420px]">
                {children}
            </div>
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node,
};

export default AuthLayout;
