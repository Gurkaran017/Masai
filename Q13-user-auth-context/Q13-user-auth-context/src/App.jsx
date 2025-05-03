import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Main />
      <Footer />
    </AuthProvider>
  );
}

export default App;
