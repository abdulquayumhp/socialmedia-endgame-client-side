import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../AuthContext/AuthContext";

const SignIn = () => {
  const { UserSignIn } = useContext(ContextAuth);
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (e) => {
    setFirebaseError("");

    console.log(e);
    UserSignIn(e.email, e.password)
      .then((update) => {
        const user = update.user;
        console.log(user);
        toast.success("Successfully login");
        navigate("/");
      })
      .catch((err) => {
        setFirebaseError(err.message);
      });
  };

  return (
    <div>
      <div className="w-9/12 bg-amber-400 rounded-lg mx-auto">
        <div className=" bg-amber-400 rounded-lg flex md:flex-row flex-col">
          <div>
            <img
              className="w-full md:px-10 py-10 object-cover"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt=""
            />
          </div>
          <div>
            <>
              <form
                onSubmit={handleSubmit(handleSignIn)}
                className="pt-20 pb-10 pr-5"
              >
                <h1 className="text-center text-4xl font-bold pb-5">Sign In</h1>
                <div className="space-y-1 text-sm mb-3">
                  <label
                    htmlFor="password"
                    className="block text-blue-900 text-lg"
                  >
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    name="password"
                    {...register("email", { required: "name is required" })}
                    placeholder="Email"
                    className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                  />
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
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="space-y-1 text-sm mt-10 ">
                  <input
                    type="submit"
                    value="SignIn"
                    className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black cursor-pointer hover:bg-amber-400"
                  />
                </div>
                <p className="mt-2">
                  Don't Have a account
                  <Link to="/signUp" className="underline text-amber-600">
                    SignUp
                  </Link>
                </p>
                <p className="text-red-500">
                  {firebaseError &&
                    firebaseError.slice(22, -2) + " please try again"}
                </p>
              </form>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
