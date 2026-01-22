import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MarqueeSection from './components/sections/MarqueeSection';
import MemeGrid from './components/sections/MemeGrid';
import Tokenomics from './components/sections/Tokenomics';
import Roadmap from './components/sections/Roadmap';
import JoinCommunity from './components/sections/JoinCommunity';

function App() {
    return (
        <div className="min-h-screen relative">
            {/* Background Blobs */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[100px] animate-blob filter"></div>
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-[100px] animate-blob animation-delay-2000 filter"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-lime/10 rounded-full blur-[100px] animate-blob animation-delay-4000 filter"></div>
            </div>

            <Navbar />
            <Hero />
            <MarqueeSection />
            <MemeGrid />
            <Tokenomics />
            <Roadmap />
            <JoinCommunity />
            <Footer />
        </div>
    );
}

export default App;
