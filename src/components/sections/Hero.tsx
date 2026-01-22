const LOGO_URL = "/logo.jpg";

export default function Hero() {
    return (
        <section className="min-h-screen relative flex items-center pt-24 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* LEFT CONTENT */}
                <div className="text-left space-y-8 relative">
                    {/* Floating 'Meme' Tag */}
                    <div className="inline-block bg-accent-lime text-black font-black px-4 py-1 rounded-sm rotate-[-2deg] text-sm animate-pulse">
                        THE ALPHA MEME
                    </div>

                    <h1 className="text-7xl lg:text-9xl font-black leading-tight tracking-tight">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-blue-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] pr-6 pb-2">
                            XoWhale
                        </span>
                    </h1>

                    <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-wide text-stroke">
                        The Alpha Meme of X
                    </h2>

                    <p className="text-xl text-slate-400 max-w-lg font-body leading-relaxed border-l-4 border-accent-pink pl-6 py-2">
                        <span className="text-white font-bold ml-1">Calm. Massive. Inevitable.</span>
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <button className="px-10 py-4 bg-accent-cyan text-black font-black text-xl rounded-none hover:translate-y-[-4px] hover:translate-x-[-4px] transition-transform shadow-[8px_8px_0px_white] hover:shadow-[12px_12px_0px_white]">
                            <a href="https://x.com/i/communities/2014290168967291031" target="_blank" rel="noopener noreferrer">Join Community</a>
                        </button>
                        <button className="px-10 py-4 border-2 border-white text-white font-bold text-xl rounded-none hover:bg-white hover:text-black transition-colors">
                            <a href="#" target="_blank" rel="noopener noreferrer">Pumpfun</a>
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE - Unusual/Cool Layout */}
                <div className="relative group perspective-[1000px] flex justify-center lg:justify-end">

                    {/* Decorative Rings/Chaos */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-accent-cyan/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                    {/* Sticker Elements */}
                    <div className="absolute -top-10 left-10 lg:-left-10 bg-accent-pink text-black font-black text-2xl px-6 py-2 rotate-12 shadow-xl z-20 animate-wobble-slow">
                        DEV IS BASED
                    </div>
                    <div className="absolute bottom-10 -right-4 bg-accent-lime text-black font-black text-lg px-4 py-2 -rotate-6 shadow-xl z-20 animate-bounce">
                        CHILL & HOLD
                    </div>

                    {/* Main Image - Massive & 3D Tilt */}
                    <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] transition-transform duration-500 ease-out transform group-hover:rotate-y-12 group-hover:rotate-x-12 preserve-3d">
                        <img
                            src={LOGO_URL}
                            alt="XoWhale"
                            className="w-full h-full object-cover rounded-3xl border-4 border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.3)] animate-float"
                        />
                        {/* Glitch Overlay Effect (Visual only) */}
                        <div className="absolute inset-0 bg-accent-cyan/20 mix-blend-overlay rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
