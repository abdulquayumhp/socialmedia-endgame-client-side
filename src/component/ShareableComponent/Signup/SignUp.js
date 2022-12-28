import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../AuthContext/AuthContext";

const SignUp = () => {
  const { createUser, updateUserInfo, googleSignUp } = useContext(ContextAuth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSignUp = (e) => {
    console.log(e);
    createUser(e.email, e.password).then((update) => {
      const user = update.user;
      console.log(user);
      const UpdateUserInfo = {
        displayName: e.name,
        email: e.email,
      };
      updateUserInfo(UpdateUserInfo)
        .then((result) => {
          console.log(result);
          const UpdateData = {
            name: UpdateUserInfo.displayName,
            email: UpdateUserInfo.email,
          };

          handleAllUserDatabase(UpdateData);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleGoogleLogin = () => {
    console.log("hello");
    googleSignUp()
      .then((update) => {
        console.log(update.user);
        const UpdateData = {
          name: update.user.displayName,
          email: update.user.email,
        };
        console.log(UpdateData);
        handleAllUserDatabase(UpdateData);
      })
      .catch((err) => console.log(err));
  };

  const handleAllUserDatabase = (e) => {
    const url = `${process.env.REACT_APP_URL}allUserData`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((update) => {
        console.log(update);
        navigate("/signIn");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="w-9/12 bg-amber-400 rounded-lg mx-auto">
        <div className=" bg-amber-400 rounded-lg flex md:flex-row flex-col">
          <div>
            <img
              className="w-full md:w-[800px] md:px-10 py-10 object-cover"
              src="https://futuresafeonline.com/images/login.svg"
              alt=""
            />
          </div>
          <div>
            <>
              <form
                onSubmit={handleSubmit(handleSignUp)}
                className="pt-20 pb-10 pr-5"
              >
                <h1 className="text-center text-4xl font-bold pb-5">
                  Sign Up Here
                </h1>
                <div className="space-y-1 text-sm mb-3">
                  <label
                    htmlFor="password"
                    className="block text-blue-900 text-lg"
                  >
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: "name is required" })}
                    placeholder="Email"
                    className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                  />
                </div>
                <div className="space-y-1 text-sm mb-3">
                  <label
                    htmlFor="password"
                    className="block text-blue-900 text-lg"
                  >
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: "name is required" })}
                    placeholder="Email"
                    className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="space-y-1 text-sm mb-3">
                  <label
                    htmlFor="password"
                    className="block text-blue-900 text-lg"
                  >
                    Enter Your Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", { required: "name is required" })}
                    placeholder="Password"
                    className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                  />
                </div>
                <div className="space-y-1 text-sm mt-10 ">
                  <input
                    type="submit"
                    value="SignUp"
                    className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black cursor-pointer hover:bg-amber-400"
                  />
                </div>
                <div
                  onClick={handleGoogleLogin}
                  className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black cursor-pointer hover:bg-amber-400 mt-5 flex items-center justify-center"
                >
                  <FaGoogle className="mr-5" />
                  <h className="font-bold">Goggle Login</h>
                </div>
                <p className="mt-2">
                  Already Have a account
                  <Link to="/signIn" className="underline text-amber-600">
                    SignIn
                  </Link>
                </p>
              </form>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
