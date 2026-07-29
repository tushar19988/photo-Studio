"use client";

import { useLenis } from "@/hooks/useLenis";
import { Cursor } from "./Cursor";
import { Loader } from "./Loader";
import { WhatsAppButton } from "./WhatsAppButton";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <>
      <Loader />
      <Cursor />
      {children}
      <WhatsAppButton />
    </>
  );
}
