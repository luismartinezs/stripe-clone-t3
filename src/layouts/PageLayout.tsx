import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full min-h-screen flex-col justify-between">
      <div>
        <Header />
        <main className="container mx-auto px-2 py-12">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
