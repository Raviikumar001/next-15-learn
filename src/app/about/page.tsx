import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ravi's Next app",
  description: "About page",
};

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
    </div>
  );
}
