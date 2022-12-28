import { createBrowserRouter } from "react-router-dom";
import About from "../../About/About";
import AllHome from "../../Home/AllHome/AllHome";
import Media from "../../Media/Media";
import MediaDetals from "../../Media/MediaDetals";
import Message from "../../Message/Message";
import Main from "../Main/Main";
import SignIn from "../SignIn/SignIn";
import SignUp from "../Signup/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllHome />,
      },
      {
        path: "/medias",
        element: <Media />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/postDetails/:id",
        element: <MediaDetals />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/postDetails/${params.id}`),
      },
    ],
  },
]);
