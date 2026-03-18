import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { Button } from "@/components/ui/button";

export function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Users</h1>
      <Button variant="default" onClick={() => dispatch(fetchUsers())}>
        Fetch Users
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
