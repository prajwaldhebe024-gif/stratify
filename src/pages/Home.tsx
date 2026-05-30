import Hero from "../components/Hero";
import NewsTicker from "../components/NewsTicker";
import FeaturedStrategies from "../components/FeaturedStrategies";
import StatsStrip from "../components/StatsStrip";

function Home() {
  return (
    <>
      <NewsTicker />

      <Hero />

      <StatsStrip />  

      <FeaturedStrategies />
    </>
  );
}

export default Home;