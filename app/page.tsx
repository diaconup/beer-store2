import AboutUs from '@/components/AboutUs';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Beer catalogue</h1>
          <p>Explore the beers you might like.</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
