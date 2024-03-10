import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";
import styles from "../styles/styles";
import { useState } from "react";
import { SidebarContext } from "../contexts";

const RootLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
            <div>
                <Sidebar />
                <div className="flex min-h-screen flex-col transition-all duration-300 lg:ml-[240px]">
                    <Navbar />
                    <main className="mb-8 w-full">
                        <div className={styles.container}>
                            <Outlet />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </SidebarContext.Provider>
    );
};

export default RootLayout;
