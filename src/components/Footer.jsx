import React from "react";

export function Footer() {
    return (
        <footer className=" bg-primary text-gray-300 shadow-inner mt-12">
            <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} JS Competitive Prep. All rights reserved.</p>
                <div className="mt-2 space-x-3">
                    <a href="/privacy" className="hover:text-accent hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:text-accent hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    );
}
