import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import { Process, Services, Experience, Tools, Footer } from './components/Sections';
import useReveal from './components/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Process />
        <Work />
        <Services />
        <Experience />
        <Tools />
      </main>
      <Footer />
    </>
  );
}
