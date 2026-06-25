"use client";

import AuthProvider from "@/components/authProvider";
import { ThemeProvider } from "@/components/themeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Providers({children}: {children: React.ReactNode}) {
  return(
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}