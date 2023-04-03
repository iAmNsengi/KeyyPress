import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/landing-page" exact element={<Landing />} />
          <Route path="/login-page" exact element={<Login />} />
          <Route path="/profile-page" exact element={<Profile />} />
          <Route path="/register-page" exact element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
