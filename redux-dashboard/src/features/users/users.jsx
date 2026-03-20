import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { Button } from "@/components/ui/button";
import { UsersTable } from "./UsersTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";

export function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  return (
    <div className="flex justify-center mt-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardAction>
            <Button
              disabled={loading}
              variant="default"
              onClick={() => dispatch(fetchUsers())}
            >
              Fetch Users
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {users.length > 0 && !loading && !error && (
            <UsersTable users={users} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
