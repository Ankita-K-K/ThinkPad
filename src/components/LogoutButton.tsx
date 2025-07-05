"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    console.log("Logging out...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errMsg = null;
    if (!errMsg) {
      toast.success("You have been successfully logged out");
      router.push("/");
    } else {
      toast.error(errMsg);
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
