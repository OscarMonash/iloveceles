import ScrollHearts from './components/FloatingHearts';
import ValentineText from './components/ValentinesText';
import PhotoGallery from './components/PhotoGallery'; 

export default function HomePage() {
  return (
    <main 
      // MOVED STYLES TO CLASSES:
      // bg-[linear-gradient(...)] handles the specific colors
      // bg-fixed handles attachment
      className="
        relative w-full min-h-[200vh]
        bg-[linear-gradient(135deg,#d35c8c_0%,#ffc9fc_100%)]
        bg-fixed
      "
    >
      
      {/* 1. FLOATING HEARTS (Global) */}
      <ScrollHearts />
      
      {/* 2. SECTION 1: THE INTRO (Full Screen Height) */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10">
        <ValentineText />
      </section>

      {/* 3. SECTION 2: THE GALLERY (Appears when scrolling) */}
      <section className="min-h-screen w-full relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <PhotoGallery />
      </section>
    </main>
  );
}