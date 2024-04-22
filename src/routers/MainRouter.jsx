import { Route, Routes } from "react-router-dom";
import Browse from "../pages/Browse/Browse";
import Workshops from "../pages/Workshops/Workshops";
import Projects from '../pages/Projects/Project'
import Problems from "../pages/Upgrade/Upgrade";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Newsletter from "../pages/Newsletter/Newsletter";
import Upgrade from "../pages/Upgrade/Upgrade"

function MainRouter() {
  const allRouter = [
    {
      path: "/",
      element: <Browse />,
    },
    {
      path: "/workshops",
      element: <Workshops />,
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
