import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const users = {
    1: "Alice",
    2: "Bob",
    3: "Charlie",
  };

  const user = users[id];

  return (
    <div>
      {user ? (
        <h1>Details of {user}</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default UserDetails;
