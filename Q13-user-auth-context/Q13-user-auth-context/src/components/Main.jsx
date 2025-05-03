import { useAuth } from "../AuthContext";

function Main() {
  const { isLoggedIn } = useAuth();

  return (
    <main style={{ padding: "20px" }}>
      <h1>{isLoggedIn ? "You are logged in!" : "Please log in to continue."}</h1>
    </main>
  );
}

export default Main;
