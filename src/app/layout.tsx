import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/Theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/AppSidebar";
import NoteProvider from "@/providers/NoteProvider";

export const metadata: Metadata = {
  title: "ThinkPad",
  description: "Now get the task done in your notes using the help of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoteProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                  {children}
                </main>
              </div>
            </SidebarProvider>
          </NoteProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
