import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/didattica/")({
  beforeLoad: () => {
    throw redirect({ to: "/didattica/lezioni" });
  },
});