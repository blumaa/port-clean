import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { PageSkeleton } from "./components/Skeleton";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Analytics />
      <ScrollRestoration />
    </>
  );
}

export { App };
