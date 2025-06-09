import LoadingContextProviders from "./context/loading/LoadingContext";
import AuthContextProviders from "./context/login/AuthContext";
import MessageContextProviders from "./context/message/MessageContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
         <AuthContextProviders>
        <LoadingContextProviders>
          <MessageContextProviders>
                   {children}
          </MessageContextProviders>
        </LoadingContextProviders>
      </AuthContextProviders>     
      </body>
    </html>
  );
}
