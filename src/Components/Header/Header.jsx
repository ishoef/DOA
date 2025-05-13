import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  
  
  // Logout Handler
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        //  alert("you are loged out successfully");
        Swal.fire({
          title: "You Are Loged Out!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <header className="relative border-b z-40 bg-white border-b-gray-300">
        <div className="flex justify-between items-center w-[80%] mx-auto py-3">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                className="w-45 cursor-pointer"
                src="https://i.ibb.co/0pbD70D4/Vertical-Logo.png"
                alt=""
              />
            </Link>
          </div>

          {/* Navbar */}
          <nav className="flex gap-3 text-[17px] font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded"
                  : "hover:bg-gray-200 py-2 px-3 rounded"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded"
                  : "hover:bg-gray-200 py-2 px-3 rounded"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded"
                  : "hover:bg-gray-200 py-2 px-3 rounded"
              }
            >
              Books
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded"
                  : "hover:bg-gray-200 py-2 px-3 rounded"
              }
            >
              Contact Us
            </NavLink>

            {/* Private Profile Route */}
            <NavLink
              to={user ? "/myprofile" : "/auth/login"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded"
                  : "hover:bg-gray-200 py-2 px-3 rounded"
              }
            >
              My Profile
            </NavLink>
          </nav>

          {/* Prifle Showing Icon */}
          <div className="flex gap-4">
            {user ? (
              <Link to="/myprofile">
                <div
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img
                    className="w-[40px] h-[40px] rounded-full border-2 border-green-600"
                    src={`${
                      user.photoURL
                        ? user.photoURL ||
                          "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png"
                        : "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png"
                    }`}
                    alt=""
                  />
                </div>
              </Link>
            ) : (
              ""
            )}

            {/* Login and Logout Button */}
            {user ? (
              <button
                onClick={handleLogOut}
                className="hidden lg:block btn bg-[#153151] text-white"
              >
                Log Out
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="btn bg-[#153151] text-white text-[16px] ">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Prifle Hovering Tooltip */}
        {showTooltip && (
          <div className="absolute right-2 top-16 lg:right-60 lg:top-[70px] bg-[#153151] text-white text-sm px-4 py-5 rounded shadow-md z-10">
            <p className="text-end text-xl">{user.displayName}</p>
            <p>{user.email}</p>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
