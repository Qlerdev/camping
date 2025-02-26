"use client";
import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";

const SignOutLink = () => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut({ redirectUrl: "/" });
    toast.success("Logout Success!");
  };

  return (
    <button className="w-full text-left" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default SignOutLink;
