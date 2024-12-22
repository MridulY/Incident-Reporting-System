import React from "react";
import PropTypes from "prop-types";
import { Menu, Bell, User, LogOut } from "lucide-react";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-3 text-xl font-semibold text-gray-800">
                DecentralReport
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-600" />
              <User className="h-6 w-6 text-gray-600" />
              <LogOut className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
