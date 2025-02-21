import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import "./index.css";

// Preload the Home component
const Home = lazy(() =>
  import("./components/pages/Home").then((module) => {
    //  a small delay to prevent flash of loading screen for fast connections
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        resolve(module);
      });
    });
  })
);

// NotFound can load later since it's not the main route
const NotFound = lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
