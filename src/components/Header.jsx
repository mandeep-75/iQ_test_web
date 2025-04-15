
import React, { useState } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: "Home", to: "/" },
        { label: "Exams", to: "/exams" },
        { label: "Mock Tests", to: "/mock-tests" },
        { label: "Resources", to: "/resources" },
        { label: "Contact", to: "/contact" },
    ];

    return (
        <header className="bg-secondary text-gray-100 shadow-lg shadow-black/30 sticky top-0 z-50 rounded-b-2xl transition-all duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-tertiary transition-colors duration-300">Test Competitive</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.to;
                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={`transition-all duration-200 underline-offset-4 ${isActive
                                    ? "text-blue-400 underline"
                                    : "text-gray-300 hover:text-blue-400 hover:underline"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-neutral rounded-md shadow-inner border border-gray-700 transition-transform duration-300 hover:scale-105"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {!menuOpen ? (
                        <>
                            <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
                            <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
                            <span className="block w-6 h-0.5 bg-white rounded"></span>
                        </>
                    ) : (
                        <span className="text-2xl font-bold leading-none text-white">×</span>
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-secondary px-6 py-4 space-y-3 rounded-b-xl border-t border-gray-700 shadow-inner">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.to;
                        return (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={`block py-2 px-2 rounded-md text-sm ${isActive
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-200 bg-primary hover:bg-neutral"
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );

}
