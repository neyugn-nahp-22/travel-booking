import { Routes, Route, Navigate } from "react-router-dom";
import config from "../config";
import * as pages from "../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path={config.routes.home} element={<pages.Home />} />
        <Route path={config.routes.login} element={<pages.Login />} />
        <Route path={config.routes.register} element={<pages.Register />} />
        <Route path={config.routes.searchResult} element={<pages.SearchResult />} />
        <Route path={config.routes.tourDetail} element={<pages.DetailTour />} />
        <Route path={config.routes.tours} element={<pages.Tours />} />
        <Route path={config.routes.about} element={<pages.About />} />
      </Routes>
    </>
  );
};

export default Router;
