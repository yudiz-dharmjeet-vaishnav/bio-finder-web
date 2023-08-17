import Navbar from "@/src/shared/components/Common/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}