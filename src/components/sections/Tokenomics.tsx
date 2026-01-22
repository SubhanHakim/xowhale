export default function Tokenomics() {
    return (
        <section id="token" className="py-32 bg-[#0b0f14] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <h2 className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter">
                    TOKEN<span className="text-stroke text-transparent">OMICS</span>
                </h2>

                {/* THE LIST - Brutalist & Clean */}
                <div className="flex flex-col border-t border-white/20">

                    {/* ROW 1: SUPPLY */}
                    <div className="group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-white/20 hover:bg-white/5 transition-colors duration-300 px-4 md:px-8 cursor-default">
                        <span className="text-xl md:text-2xl font-mono text-slate-400 group-hover:text-accent-cyan transition-colors">
                            01. TOTAL SUPPLY
                        </span>
                        <div className="text-5xl md:text-8xl font-black text-white group-hover:scale-105 transition-transform origin-right">
                            1,000,000,000
                        </div>
                    </div>

                    {/* ROW 2: LIQUIDITY */}
                    <div className="group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-white/20 hover:bg-white/5 transition-colors duration-300 px-4 md:px-8 cursor-default">
                        <span className="text-xl md:text-2xl font-mono text-slate-400 group-hover:text-accent-lime transition-colors">
                            02. LIQUIDITY
                        </span>
                        <div className="text-5xl md:text-8xl font-black text-white group-hover:translate-x-[-10px] transition-transform">
                            BURNED <span className="text-accent-lime text-4xl align-top">🔥</span>
                        </div>
                    </div>

                    {/* ROW 3: TAX */}
                    <div className="group flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-white/20 hover:bg-white/5 transition-colors duration-300 px-4 md:px-8 cursor-default">
                        <span className="text-xl md:text-2xl font-mono text-slate-400 group-hover:text-accent-pink transition-colors">
                            03. TAXES
                        </span>
                        <div className="text-5xl md:text-8xl font-black text-white group-hover:translate-x-[-10px] transition-transform">
                            0<span className="text-slate-600">/</span>0
                        </div>
                    </div>

                    {/* ROW 4: CONTRACT */}
                    <div className="group flex flex-col md:flex-row items-center justify-between py-12 border-b border-white/20 hover:bg-white/5 transition-colors duration-300 px-4 md:px-8">
                        <span className="text-xl md:text-2xl font-mono text-slate-400 group-hover:text-white transition-colors">
                            04. CONTRACT
                        </span>
                        <div className="flex items-center gap-6">
                            <span className="font-mono text-slate-500 text-sm md:text-xl hidden md:block">8s7f...9d2x</span>
                            <button className="px-6 py-2 border border-white/30 rounded-full text-white font-bold hover:bg-white hover:text-black transition-all">
                                COPY ADDRESS
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
