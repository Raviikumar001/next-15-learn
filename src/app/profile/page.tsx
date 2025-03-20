import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

export default function Profile() {
  return (
    <div>
      <h1> My Profile</h1>
    </div>
  );
}
