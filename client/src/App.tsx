import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
