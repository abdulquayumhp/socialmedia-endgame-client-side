import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextAuth } from "../../AuthContext/AuthContext";
import AboutEdit from "./AboutEdit";

const About = () => {
  const { user } = useContext(ContextAuth);
  console.log(user?.email);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const url = `http://localhost:5000/EditAboutAllPost?email=${user?.email}`;
  const {
    data: postEdits,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["postEdits", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(postEdits);
  return (
    <>
      <div className="w-11/12 md:w-9/12  bg-white mx-auto rounded-lg flex justify-between flex-col  md:flex-row  mt-20 mb-5 py-10">
        {postEdits &&
          postEdits?.map((postEdit) => (
            <div className="py-5 pl-5">
              <h1 className="text-1xl md:text-3xl  font-semibold pb-2">
                Name :
                <span>
                  {postEdit?.UpdateName
                    ? postEdit?.UpdateName
                    : user?.displayName}
                </span>
              </h1>
              <h1 className="text-1xl md:text-3xl  font-semibold pb-2">
                Email :{" "}
                <span>
                  {postEdit?.updateEmail ? postEdit?.updateEmail : user?.email}
                </span>
              </h1>
              <h1 className="text-1xl md:text-3xl  font-semibold pb-2">
                University :{" "}
                <span>
                  {postEdit?.university ? postEdit?.university : "N/A"}
                </span>
              </h1>
              <h1 className="text-1xl md:text-3xl  font-semibold pb-2">
                Address :{" "}
                <span>{postEdit?.address ? postEdit?.address : "N/A"}</span>
              </h1>
              <AboutEdit refetch={refetch} postEditID={postEdit?._id} />
            </div>
          ))}
        <div className="m-4">
          <label
            htmlFor="my-modal-3"
            className="py-2 px-5 bg-amber-300 cursor-pointer"
          >
            Edit About
          </label>
        </div>
      </div>
    </>
  );
};

export default About;
