"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/actions/users";
const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    console.log("Logging out...");
    const { errorMessage } = await logoutAction();
    if (!errorMessage) {
      toast.success("You have been successfully logged out");
      router.replace("/");
    } else {
      toast.error(errorMessage);
    }
    if (!errorMessage) {
      router.push("/");
    }
    setLoading(false);
  };
  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log out"}
    </Button>
  );
};

export default LogoutButton;
