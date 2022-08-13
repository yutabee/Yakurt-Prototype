import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

const Router: FC = memo(() => {
    return (

        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home/>}/>
            <Route path="/*" element={<Page404 />} />
        </Routes>
  );
});

export default Router;