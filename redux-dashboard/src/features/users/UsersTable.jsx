import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function UsersTable({ users }) {
  if (!users.length) {
    return (
      <p className="text-muted-foreground text-center py-6">
        No users found. Click "Fetch Users" to load data.
      </p>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow
            className="hover:bg-muted/50 transition-colors"
            key={user.id}
          >
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
