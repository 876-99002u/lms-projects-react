import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Homes({ children }) {
  // State to track if the drawer is open or closed
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to open the drawer and change the width
  const openDrawer = () => {
    setIsDrawerOpen(true);  // Open the drawer
    ChangeWidth(true);  // Set the width to auto when open
  };

  // Function to hide the drawer and reset the width
  const hideDrawer = () => {
    setIsDrawerOpen(false);  // Close the drawer
    ChangeWidth(false);  // Reset the width back to 0 when closed
  };

  // Function to change the width of the drawer
  const ChangeWidth = (isOpen) => {
    const drawerSide = document.getElementsByClassName("drawer-side")[0];
    if (isOpen) {
      drawerSide.style.width = "auto";  // Set width to auto when open
    } else {
      drawerSide.style.width = "0";  // Set width to 0 when closed
    }
  };

  return (
    <div className="min-h-[900vh] bg-[#000000]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={() => {}}
        />
        <div className="drawer-content">
          {/* Page content here */}
          {/* FiMenu Icon will only show when the drawer is closed */}
          {!isDrawerOpen && (
            <label htmlFor="my-drawer">
              <FiMenu
                size={"32px"}
                className="font-bold text-white m-4 cursor-pointer"
                onClick={openDrawer}
                style={{ backgroundColor: "transparent", border: "none" }}
              />
            </label>
          )}
        </div>

        <div className={`drawer-side w-0 ${isDrawerOpen ? "block" : "hidden"}`}>
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu bg-[#2d3748] bg-opacity-70 text-white min-h-full w-48 p-4 sm:w-80 relative">
            {/* Drawer Close Button */}
            <li className="w-fit absolute right-2 z-50">
              <button
                onClick={hideDrawer}
                className="hover:shadow-2xl transition-all duration-300 p-2 rounded-full"
              >
                <AiFillCloseCircle size={"24px"} />
              </button>
            </li>
            {/* Drawer Menu Items */}
            <li className="hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 p-2 rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 p-2 rounded-md">
              <Link to="/courses">All Courses</Link>
            </li>
            <li className="hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 p-2 rounded-md">
              <Link to="/contact us">Contact Us</Link>
            </li>
            <li className="hover:shadow-2xl hover:bg-gray-700 transition-all duration-300 p-2 rounded-md">
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Page Content */}
      {children}
      <Footer />
    </div>
  );
}

export default Homes;
