import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../../AuthContext/AuthContext";

const AboutEdit = ({ postEditID, refetch }) => {
  console.log(postEditID);
  const { user } = useContext(ContextAuth);
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setFirebaseError("");
    console.log(e);
    const data = {
      authEmail: user?.email,
      authName: user?.displayName,
      UpdateName: e.target.name.value,
      updateEmail: e.target.email.value,
      address: e.target.address.value,
      university: e.target.university.value,
      postEditID,
    };
    console.log(data);
    const url = `http://localhost:5000/EditAbout`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((update) => {
        // console.log(update);
        toast.success("successfully your post added");
        refetch();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <>
            <form onSubmit={handleSignIn} className="pt-20 pb-10 pr-5">
              <div className="space-y-1 text-sm mb-3">
                <label
                  htmlFor="password"
                  className="block text-blue-900 text-lg"
                >
                  Enter Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
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
                  placeholder="Email"
                  className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                />
              </div>
              <div className="space-y-1 text-sm mb-3">
                <label
                  htmlFor="university"
                  className="block text-blue-900 text-lg"
                >
                  Enter Your University Name
                </label>
                <input
                  type="text"
                  name="university"
                  placeholder="University"
                  className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                />
              </div>
              <div className="space-y-1 text-sm mb-3">
                <label
                  htmlFor="password"
                  className="block text-blue-900 text-lg"
                >
                  Enter Your Address
                </label>
                <input
                  type="address"
                  name="address"
                  placeholder="Address"
                  className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black"
                />
              </div>
              <div className="space-y-1 text-sm mt-10 ">
                <input
                  type="submit"
                  value="SignIn"
                  className="lg:w-96 md:w-48 border-amber-100 border w-full px-4 py-3 rounded-sm bg-amber-200 text-black outline-none placeholder-black cursor-pointer hover:bg-amber-400"
                />
              </div>
            </form>
          </>
        </div>
      </div>
    </div>
  );
};

export default AboutEdit;
