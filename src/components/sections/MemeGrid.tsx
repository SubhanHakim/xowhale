import meme1 from '../../assets/memes/meme1.jpg';
import meme2 from '../../assets/memes/meme2.jpg';
import meme3 from '../../assets/memes/meme3.jpg';
import meme4 from '../../assets/memes/meme4.jpg';

export default function MemeGrid() {
    const memes = [
        { src: meme1, title: "CHILL & HOLD" },
        { src: meme2, title: "DIAMOND HANDS" },
        { src: meme3, title: "ONLY UP" },
        { src: meme4, title: "WHALE DOMINANCE" }
    ];

    return (
        <section id="memes" className="py-32 bg-[#0b0f14] relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 relative inline-block">
                        PROOF OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-blue-500">MEME</span>
                        <div className="absolute -top-4 -right-12 text-5xl animate-bounce">
                            ✅
                        </div>
                    </h2>
                    <p className="text-slate-400 text-xl font-mono tracking-widest uppercase">
                        Zero utility. Infinite vibes.
                    </p>
                </div>

                {/* THE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {memes.map((meme, index) => (
                        <div
                            key={index}
                            className="group relative rounded-[2rem] overflow-hidden border-2 border-white/5 bg-[#151b26] shadow-2xl hover:border-accent-cyan/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all duration-500"
                        >
                            {/* Inner Image Wrapper */}
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={meme.src}
                                    alt={meme.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                {/* Gradient that is always visible at bottom to make text readable */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Title - Elevated from bottom, centered, distinct */}
                                <div className="absolute bottom-12 left-0 right-0 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter drop-shadow-lg">
                                        {meme.title}
                                    </h3>
                                    <div className="h-1 w-12 bg-accent-cyan mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
