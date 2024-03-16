import { getAllBeers } from '@/public/api';
import AboutUs from '@/components/AboutUs';
import AddBeer from '@/components/AddBeer';
import Hero from '@/components/Hero';
import ToDoList from '@/components/ToDoList';

export default async function Home() {
  const beers = await getAllBeers();
  console.log(beers);

  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutUs />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Beer catalogue</h1>
          <p className="pb-10">Explore the beers you might like.</p>
        </div>

        <AddBeer />
        <ToDoList beers={beers} />
      </div>
    </main>
  );
}
