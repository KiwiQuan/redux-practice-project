import React from "react";
import { PostsTable } from "./PostsTable";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsSlice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  return (
    <div className="flex justify-center mt-6">
      <Card className="w-full max-w-2xl shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Posts</CardTitle>
          <CardAction>
            <Button
              disabled={loading}
              variant="default"
              onClick={() => dispatch(fetchPosts())}
            >
              {loading ? "Loading..." : "Fetch Posts"}
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
          {posts.length > 0 && !loading && !error && (
            <PostsTable posts={posts} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
