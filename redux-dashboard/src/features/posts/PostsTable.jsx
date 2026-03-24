import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export function PostsTable({ posts }) {
  if (!posts.length) {
    return (
      <p className="text-muted-foreground text-center py-6">
        No posts found. Click "Fetch Posts" to load data.
      </p>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow
            className="hover:bg-muted/50 transition-colors"
            key={post.id}
          >
            <TableCell>{post.id}</TableCell>
            <TableCell>{post.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
