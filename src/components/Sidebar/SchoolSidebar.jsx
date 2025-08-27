// src/components/Sidebar/SchoolSidebar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { useSidebar } from "../../context/SidebarContext";
import "./SchoolSidebar.css";

const SchoolSidebar = () => {
  const { 
    isExpanded, 
    toggleSidebar, 
    openDropdown, 
    toggleDropdown, 
    isMobileOpen 
  } = useSidebar();

  const location = useLocation();

  const handleOfficesClick = () => {
    if (!isExpanded) toggleSidebar();
    toggleDropdown("offices");
  };

  const isActive = (path, exact = true) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <aside 
      className={`sidebar ${isExpanded ? "expanded" : ""} ${isMobileOpen ? "mobile-open" : ""}`}
    >
      <nav className="sidebar-nav">
        <ul>
          {/* Home */}
          <li>
            <NavLink
              to="/home"
              className={`sidebar-link ${isActive("/home") ? "active" : ""}`}
              end
              onClick={() => isMobileOpen && toggleSidebar()}
            >
              <FaHome className="sidebar-icon" />
              {isExpanded && <span className="sidebar-text">Home</span>}
            </NavLink>
          </li>

          {/* To-do */}
          <li>
            <NavLink
              to="/to-do/upcoming"
              className={`sidebar-link ${isActive("/to-do/", false) ? "active" : ""}`}
              onClick={() => isMobileOpen && toggleSidebar()}
            >
              <FiCheckSquare className="sidebar-icon" />
              {isExpanded && <span className="sidebar-text">To-do</span>}
            </NavLink>
          </li>

          {/* Offices dropdown */}
          <li>
            <button
              className="sidebar-link dropdown-toggle"
              onClick={handleOfficesClick}
            >
              <FaBriefcase className="sidebar-icon" />
              {isExpanded && (
                <>
                  <span className="sidebar-text">Offices</span>
                  <IoChevronDown
                    className={`dropdown-icon ${openDropdown === "offices" ? "open" : ""}`}
                  />
                </>
              )}
            </button>

            {isExpanded && openDropdown === "offices" && (
              <ul className="sidebar-submenu">
                <li>
                  <NavLink
                    to="/SGOD"
                    className={`sidebar-link sub-link ${isActive("/SGOD") ? "active" : ""}`}
                    onClick={() => isMobileOpen && toggleSidebar()}
                  >
                    <span className="sidebar-text">SGOD (School Gover…)</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Manage Account */}
          <li>
            <NavLink
              to="/s-manage-account"
              className={`sidebar-link ${isActive("/manage-account") ? "active" : ""}`}
              onClick={() => isMobileOpen && toggleSidebar()}
            >
              <MdManageAccounts className="sidebar-icon" />
              {isExpanded && <span className="sidebar-text">Manage Account</span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SchoolSidebar;