import { StrictMode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import LoadingScreen from "./Loading";
import { lazy } from "react";
import SmoothScroll from "./SmoothScroll";

const Hero = lazy(() => import("./Hero"));
const InfoBlock = lazy(() => import("./InfoBlock"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const heroPromise = import("./Hero");
    const infoPromise = import("./InfoBlock");
    const minTime = new Promise((res) => setTimeout(res, 5000));

    Promise.all([heroPromise, infoPromise, minTime]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <StrictMode>
      <SmoothScroll>
        <Navbar />
        <Hero />
        <InfoBlock />
      </SmoothScroll>
    </StrictMode>
  );
}
