export default function Roadmap() {
    return (
        <section id="roadmap" className="py-32 relative bg-[#0b0f14] overflow-hidden">

            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent-purple/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <h2 className="text-7xl md:text-9xl font-black text-white mb-24 tracking-tighter text-center md:text-left">
                    ROAD<span className="text-stroke-cyan text-transparent">MAP</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* PHASE 1 - Surface */}
                    <div className="group relative p-8 md:p-12 border border-white/10 bg-[#151b26] hover:bg-[#1a212e] transition-all duration-500 rounded-3xl overflow-hidden hover:border-accent-cyan/50 h-full flex flex-col">
                        {/* Big Background Number */}
                        <div className="absolute -right-4 -top-4 text-[12rem] font-black text-white/5 group-hover:text-accent-cyan/10 transition-colors select-none leading-none">
                            1
                        </div>

                        <div className="relative z-10 flex-grow">
                            <span className="inline-block px-3 py-1 mb-6 rounded bg-accent-cyan/20 text-accent-cyan font-mono text-xs font-bold tracking-widest border border-accent-cyan/30">
                                PHASE 1
                            </span>
                            <h3 className="text-4xl font-black text-white mb-2">SURFACE</h3>
                            <p className="text-accent-cyan font-bold mb-8 italic">The whale appears.</p>

                            <ul className="space-y-4 font-medium">
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-cyan mt-1">•</span> XoWhale is introduced to X
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-cyan mt-1">•</span> Visual identity & meme tone locked in
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-cyan mt-1">•</span> Early community forms organically
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-cyan mt-1">•</span> Presence over promotion
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors border-t border-white/10 pt-2 mt-4">
                                    Those who notice early, stay.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* PHASE 2 - Current */}
                    <div className="group relative p-8 md:p-12 border border-white/10 bg-[#151b26] hover:bg-[#1a212e] transition-all duration-500 rounded-3xl overflow-hidden hover:border-accent-lime/50 scale-y-105 shadow-2xl z-10 h-full flex flex-col">
                        {/* Active Glow */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent-lime to-transparent opacity-50"></div>

                        <div className="absolute -right-4 -top-4 text-[12rem] font-black text-white/5 group-hover:text-accent-lime/10 transition-colors select-none leading-none">
                            2
                        </div>

                        <div className="relative z-10 flex-grow">
                            <span className="inline-block px-3 py-1 mb-6 rounded bg-accent-lime/20 text-accent-lime font-mono text-xs font-bold tracking-widest border border-accent-lime/30 animate-pulse">
                                CURRENT PHASE
                            </span>
                            <h3 className="text-4xl font-black text-white mb-2">CURRENT</h3>
                            <p className="text-accent-lime font-bold mb-8 italic">Momentum builds.</p>

                            <ul className="space-y-4 font-medium">
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-lime mt-1">➜</span> Meme circulation increases
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-lime mt-1">➜</span> Community culture solidifies
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-lime mt-1">➜</span> XoWhale becomes familiar on timelines
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-lime mt-1">➜</span> Engagement driven by the pod
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors border-t border-white/10 pt-2 mt-4">
                                    Not pushed. Carried.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* PHASE 3 - Depth */}
                    <div className="group relative p-8 md:p-12 border border-white/10 bg-[#151b26] hover:bg-[#1a212e] transition-all duration-500 rounded-3xl overflow-hidden hover:border-accent-pink/50 opacity-80 hover:opacity-100 h-full flex flex-col">
                        <div className="absolute -right-4 -top-4 text-[12rem] font-black text-white/5 group-hover:text-accent-pink/10 transition-colors select-none leading-none">
                            3
                        </div>

                        <div className="relative z-10 flex-grow">
                            <span className="inline-block px-3 py-1 mb-6 rounded bg-white/5 text-slate-400 font-mono text-xs font-bold tracking-widest border border-white/10">
                                UPCOMING
                            </span>
                            <h3 className="text-4xl font-black text-white mb-2">DEPTH</h3>
                            <p className="text-accent-pink font-bold mb-8 italic">Staying power.</p>

                            <ul className="space-y-4 font-medium">
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-pink mt-1">⚓</span> Long-term presence
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-pink mt-1">⚓</span> Narrative evolves naturally
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-pink mt-1">⚓</span> Direction shaped by community energy
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors">
                                    <span className="text-accent-pink mt-1">⚓</span> The project breathes and adapts
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 group-hover:text-white transition-colors border-t border-white/10 pt-2 mt-4">
                                    Whales don’t rush. They last.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
