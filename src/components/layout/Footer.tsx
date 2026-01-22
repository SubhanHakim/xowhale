export default function Footer() {
    return (
        <footer className="py-20 bg-[#0b0f14] border-t border-white/10 relative overflow-hidden">

            {/* Giant Background Watermark */}
            <h2 className="text-[12rem] md:text-[20rem] leading-none font-black text-white/[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap blur-sm">
                XOWHALE
            </h2>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Logo */}
                <a href="#" className="flex items-center gap-3 mb-10 group opacity-80 hover:opacity-100 transition-opacity">
                    <span className="text-3xl">🐳</span>
                    <span className="font-black text-3xl tracking-widest text-white">
                        XO<span className="text-accent-cyan">WHALE</span>
                    </span>
                </a>

                {/* Nav Links */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {['Vision', 'Memes', 'Tokenomics', 'Roadmap'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-400 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex gap-6 mb-16">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-accent-cyan hover:text-black hover:border-accent-cyan transition-all duration-300">
                        𝕏
                    </a>
                    {/* Assuming Telegram is still relevant for Footer even if removed from main CTA, otherwise I can remove it. Keeping it as standard practice unless user explicitly banned it everywhere. The user said "jangan ada whalnya teks nya aja" for the Join section specifically. I'll include just X to be safe based on 'hanya ada X aja' request earlier for the join section. */}
                </div>

                {/* Disclaimer */}
                <div className="max-w-2xl text-slate-600 text-xs leading-relaxed font-mono">
                    <p className="mb-4">
                        RISK WARNING: $XOWHALE is a community meme coin with no intrinsic value or expectation of financial return.
                        There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
                    </p>
                    <p>
                        © {new Date().getFullYear()} XoWhale Project. All rights reversed.
                    </p>
                </div>

            </div>
        </footer>
    );
}
