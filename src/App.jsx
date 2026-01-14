import { Suspense } from "react";
import { MyHealthPublicRoutes } from "./routes";
import { LoaderWrapper } from "./App.styles";
import Loader from "@components/UI/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import NavigationNavbar from "@components/NavigationNavbar/NavigationNavbar";

function App() {
  return (
    <Suspense
      fallback={
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      }
    >
      <Routes>
        <Route element={<NavigationNavbar />}>
          {MyHealthPublicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
