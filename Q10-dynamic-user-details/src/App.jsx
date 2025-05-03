import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
