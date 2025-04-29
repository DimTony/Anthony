"use client";

import { Toaster } from "sonner";
import HomeLayout from "./wrapper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "my-toast",
        }}
        theme="system"
        closeButton
        richColors
        expand={false}
      />

      <HomeLayout>{children}</HomeLayout>
    </>
  );
}
