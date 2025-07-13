
import { Metadata } from "next";
import NotFound from "./components/not-found";

export const metadata: Metadata = {
  title: "404 Page | Slate",
  description: "Page not found - Slate Link",
};

export default function Page() {
  return <NotFound />;
}
