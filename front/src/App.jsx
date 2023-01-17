import './App.scss';
import { HomeScene } from "./HomeScene/HomeScene";
import { SignUpScene } from "./SignUpScene/SignUpScene";
import { SignInScene } from "./SignInScene/SignInScene";
import { Layout } from "./CoreParts/CoreParts";
import { UserProvider } from './User/User';

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="home" element={<HomeScene/>}/>
      <Route path="sign-up" element={<SignUpScene/>}/>
      <Route path="sign-in" element={<SignInScene/>}/>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RouterProvider router={router}/>
      </UserProvider>
    </div>
  );
}

export default App;
