import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function DrawerComponent() {
  // Function to handle width change if needed
  const ChangeWidth = () => {
    const drawer = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };
  function hideDrawer(){
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;


    // const drawerSide = document.getElementsByClassName("drawer-side");
    // drawerSide[0].style.width = 0;
    ChangeWidth();
  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              size={"32px"}
              className="font-bold text-white m-4"
              onClick={ChangeWidth}
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu w-48 p-4 sm:w-80 bg-base-100 text-base-content relative">
              <li className="w-fit absolute right-2 z-50">
                <button onClick={hideDrawer}>
                  <AiFillCloseCircle size={"32px"} />
                </button>
              </li>
             
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          
        </div>
      </div>
    </div>
  );
}
