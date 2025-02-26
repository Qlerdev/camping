import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";
//React.ReactNode เอาไว้กำหนดข้อมูลที่ return ออกมาเป็น jsx เช่น components
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default Providers;
