import { Outlet, ScrollRestoration } from "react-router";
import { Nav } from "./components/Nav";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <Analytics />
      <ScrollRestoration />
    </>
  );
}

export { App };
