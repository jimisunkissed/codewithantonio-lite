import { Route, Routes } from "react-router-dom";
import Course from "../pages/Course/Course";
import DigitalDownloads from "../pages/DigitalDownloads/DigitalDownloads";
import Projects from '../pages/Projects/Project'
import Problems from "../pages/Upgrade/Upgrade";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Newsletter from "../pages/Newsletter/Newsletter";
import CreateCourse from "../pages/CreateCourse/CreateCourse"
import CreateDigitalDownload from '../pages/CreateDigitalDownload/CreateDigitalDownload'
import Upgrade from "../pages/Upgrade/Upgrade"

function MainRouter() {
  const allRouter = [
    {
      path: "/",
      element: <Course />,
    },
    {
      path: "/digitaldownloads",
      element: <DigitalDownloads/>,
    },
    {
      path: "/projects/",
      element: <Projects />
    },
    {
      path: "/problems",
      element: <Problems />,
    },
    {
      path: "/leaderboard",
      element: <Leaderboard />,
    },
    {
      path: "/newsletter",
      element: <Newsletter />,
    },
    {
      path: "/create/course",
      element: <CreateCourse />,
    },
    {
      path: "/create/digitaldownload",
      element: <CreateDigitalDownload />,
    },
    {
      path:'/upgrade',
      element: <Upgrade />
    }
  ];

  return (
    <Routes>
      {allRouter.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })}
    </Routes>
  );
}

export default MainRouter;
