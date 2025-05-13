import React, { use, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import UpdateUserInfo from "./UpdateUserInfo";

const MyProfile = () => {
  const { user } = use(AuthContext);
  console.log(user.displayName);

  useEffect(() => {
    document.title = "DOA | My Profile";
  }, []);
  console.log("i am");

  if (!user) {
    return (
      <div className="text-center text-white mt-10">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="w-11/12 lg:w-6/12 mx-auto bg-[#153151] rounded-2xl p-4 md:p-8 lg:p-20 text-center my-10">
      <div className="border py-10 px-3  rounded-2xl border-white lg:w-11/12 mx-auto">
        <div className="rounded-full border border-green-800 w-[80px] h-[80px] mx-auto">
          {!user ? (
            <CgProfile />
          ) : (
            <img
              className="w-[80px] h-[80px] rounded-full border-2 border-green-600"
              src={user.photoURL}
              alt="photo"
            />
          )}
        </div>
        <h1 className="text-white text-2xl font-bold mt-10">
          {user.displayName || "No Name Provided"}
        </h1>
        <h1 className="text-white lg:text-2xl md:text-2xl font-semibold mt-3">
          {user.email || "No Email Provided"}
        </h1>
      </div>
      <UpdateUserInfo></UpdateUserInfo>
    </div>
  );
};

export default MyProfile;
