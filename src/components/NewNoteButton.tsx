"use client";
import { User } from "@supabase/supabase-js";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { createNoteAction } from "@/actions/notes";
import { debounceTimeout } from "@/lib/constants";

type Props = {
  user: User | null;
};

const NewNoteButton = ({ user }: Props) => {
  const router = useRouter();
  console.log(user?.email);
  const [loading, setLoading] = useState(false);

  const handleClickNewNoteButton = async () => {
    if (!user) {
      router.push("/login");
    } else {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, debounceTimeout + 500),
      );
      const uuid = uuidv4();
      await createNoteAction(uuid);
      router.push(`/?noteId=${uuid}`);
      toast(
        "Saving Current Note: Saving your current note before creating a new one",
      );
      toast.success("New note created: You have created a new note");

      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClickNewNoteButton}
      variant="secondary"
      className="w-40"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
};

export default NewNoteButton;
