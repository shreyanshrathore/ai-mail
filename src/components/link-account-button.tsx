"use client";
import { Button } from "./ui/button";
import { getAurinkoAuthUrl } from "@/lib/aurinko";

const LinkAccountButton = () => {
  return (
    <Button
      onClick={async () => {
        const call = await getAurinkoAuthUrl("Google");
        window.location.href = call;
      }}
    >
      account
    </Button>
  );
};

export default LinkAccountButton;
