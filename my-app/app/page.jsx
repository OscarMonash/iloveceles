import ScrollHearts from './components/FloatingHearts';
import ValentineText from './components/ValentinesText';
import PhotoGallery from './components/PhotoGallery';
import Proposal from './components/Proposal'; // <--- 1. Import it

export default function HomePage() {
  return (
    <main 
      className="relative w-full min-h-[200vh] bg-[linear-gradient(135deg,#d35c8c_0%,#ffc9fc_100%)] bg-fixed"
    >
      
      <ScrollHearts />
      
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10">
        <ValentineText />
      </section>

      <section className="min-h-screen w-full relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <PhotoGallery />
      </section>

      <section className="min-h-screen w-full flex items-center justify-center relative z-10 pb-20">
        <Proposal />
      </section>

    </main>
  );
}