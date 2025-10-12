"use client";
import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password changed successfully");
    }
    if (error) {
      if ("data" in error) {
        // Fix the error data access
        const errorData = error.data as {
          success?: boolean;
          message?: string;
        };
        toast.error(errorData?.message || "Login failed");
      }
    }
  }, [isSuccess, error]);
  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form
          className="flex flex-col items-center"
          onSubmit={passwordChangeHandler}
        >
          <div className="w-[100%] 800px:w-[60%] mt-5">
            <label className="block ">Enter your old password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-2">
            <label className="block ">Enter your new password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="w-[100%] 800px:w-[60%] mt-2">
            <label className="block ">Confirm new password</label>
            <input
              type="password"
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
           {/* <input
  type="submit"
  value="Update"
  required
  className="w-[95%] h-[40px] 
             bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
             text-white text-center 
             rounded-md mt-8 cursor-pointer 
             border border-transparent 
             transition-all duration-300 
             hover:opacity-90 hover:shadow-lg"
/> */}
<input
  type="submit"
  value="Update"
  required
  className="w-[200px] h-[40px] 
             bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
             text-white text-center 
             rounded-full mt-8 cursor-pointer 
             border border-transparent 
             transition-all duration-300 
             hover:opacity-90 hover:shadow-lg"
/>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;