"use client"

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

export default function Home() {

  const { onOpen } = useNewAccount();

  return (
    <Button onClick={onOpen}>
      Ad an account
    </Button>
  );
}