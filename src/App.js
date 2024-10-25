import logo from "./logo.svg";
import "./App.css";
import Add_Movies from "./Components/Add_Movies";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Movie_Table from "./Components/Movie_Table";
import Upd_Movies from "./Components/Upd_Movies";
import Login from "./Components/Login";

function App() {
  const routes = [
    {
      path: "/add-movies",
      element: <Add_Movies />,
    },
    {
      path: "/upd-movies",
      element: <Upd_Movies />,
    },
    {
      path: "/movie-list",
      element: <Movie_Table />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ];

  const router = createHashRouter(routes);

  return (
    <>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
