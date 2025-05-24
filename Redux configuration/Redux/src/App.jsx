import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Quiz } from "./components/Quiz";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
