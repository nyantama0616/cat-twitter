import './App.scss';
import { HomeScene } from "./HomeScene/HomeScene";
import { SignUpScene } from "./SignUpScene/SignUpScene";
import { Header } from "./CoreParts/CoreParts";
// import { ProfileScene } from "./ProfileScene/ProfileScene";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomeScene />, },
  { path: "/sign-up", element: <SignUpScene />, },
  // { path: "/profile/*", element: <ProfileScene />, },
]);

function App() {
  return (
    <div className="App">
      <Header isSignIn={true} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
