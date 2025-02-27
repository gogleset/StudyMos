import QueryClientProvider from "@/app/queryClientProvider";
import "../styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/molecules/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <QueryClientProvider>
          <div className="pt-[55px] laptop:px-[100px] desktop:px-[300] xl:px-[300px]">
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
