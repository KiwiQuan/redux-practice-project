import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { Button } from "@/components/ui/button";
import { UsersTable } from "./UsersTable";
import { Skeleton } from "@/components/ui/skeleton";
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
      <Card className="w-full max-w-2xl shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Users</CardTitle>
          <CardAction>
            <Button
              disabled={loading}
              variant="default"
              onClick={() => dispatch(fetchUsers())}
            >
              {loading ? "Loading..." : "Fetch Users"}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="space-y-3">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          )}
          {error && <p className="text-red-500">Error: {error}</p>}
          {users.length > 0 && !loading && !error && (
            <UsersTable users={users} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
