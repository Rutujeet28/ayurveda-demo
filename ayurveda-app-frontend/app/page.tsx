import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col  bg-white">
      

      <Navbar />

      <MainLayout />

      <Footer />
    </main>
  );
}
