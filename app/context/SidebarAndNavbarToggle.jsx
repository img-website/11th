import { createContext, useContext, useState } from "react"

const SidebarAndNavbarToggleContext = createContext(null);

export const useNavbarAndSidebarToggle = () => useContext(SidebarAndNavbarToggleContext);


export const SidebarAndNavbarToggleProvider = ({ children }) => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const toggleSearchInput = () => {
        setIsSearchInputVisible(!isSearchInputVisible);
    };

    return (
        <SidebarAndNavbarToggleContext.Provider value={{ isNavbarCollapsed, isSearchInputVisible, toggleNavbar, toggleSearchInput }}>
            {children}
        </SidebarAndNavbarToggleContext.Provider>
    );

}