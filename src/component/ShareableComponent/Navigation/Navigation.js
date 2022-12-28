import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextAuth } from "../../../AuthContext/AuthContext";

const Navigation = () => {
  const { user, userSignOut } = useContext(ContextAuth);
  // console.log("2", user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then((update) => {
        console.log(update);
        navigate("/signIn");
      })
      .catch((err) => console.log(err));
  };
  const navInfo = (
    <>
      <Link className="m-2 py-2 bg-amber-200 rounded-sm px-5" to="/">
        Home
      </Link>
      <Link className="m-2 py-2 bg-amber-200 rounded-sm px-5" to="medias">
        Media
      </Link>
      <Link className="m-2 py-2 bg-amber-200 rounded-sm px-5" to="message">
        Message
      </Link>
      <Link className="m-2 py-2 bg-amber-200 rounded-sm px-5" to="about">
        About
      </Link>
      {user?.uid ? (
        <Link
          onClick={handleSignOut}
          className="m-2 py-2 bg-amber-200 rounded-sm px-5"
          to=""
        >
          SignOut
        </Link>
      ) : (
        <>
          {" "}
          <Link className="m-2 py-2 bg-amber-200 rounded-sm px-5" to="signIn">
            SignIn
          </Link>
          <Link className="m-2 py-2 bg-amber-200 rounded-sm px-5" to="signUp">
            SignUp
          </Link>
        </>
      )}
      {user?.photoURL ? (
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-auto">
          <div className="w-10 rounded-full  mx-auto">
            <img
              className="mx-auto"
              src="http://cdn.onlinewebfonts.com/svg/img_184513.png"
            />
          </div>
        </label>
      ) : (
        ""
      )}
    </>
  );
  return (
    <>
      <div className="navbar ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" text-black menu menu-compact dropdown-content -mx-5 p-3 shadow w-screen font-medium text-center -mt-10"
            >
              {navInfo}
            </ul>
          </div>

          <Link
            to="/"
            className="ml-3 text-xl lg:text-2xl font-medium pl-5 xl:pl-72"
          >
            <span className="text-amber-800">POST</span>{" "}
            <span className="text-amber-500">OPI</span>
            <span className="text-white">AI</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex mx-2 ">
          <ul className="menu menu-horizontal mx-3 hover:none">
            <>{navInfo}</>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
