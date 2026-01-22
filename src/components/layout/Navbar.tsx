export default function Navbar() {
    return (
        // "Standard" Navbar: Fixed to top, full width, border-bottom
        <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-[#0b0f14]/80 backdrop-blur-lg border-b border-white/10">
            <div className="flex items-center justify-between w-full h-full max-w-7xl mx-auto px-6 lg:px-8">

                {/* LOGO - Standard Left Alignment */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-accent-cyan flex items-center justify-center text-black font-bold">
                        <img src="logo2.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xl font-bold font-display tracking-wider text-white">
                        XO<span className="text-accent-cyan">WHALE</span>
                    </span>
                </a>

                {/* LINKS - Standard Center/Right Alignment */}
                <div className="hidden md:flex items-center gap-8">
                    {['Vision', 'Memes', 'Tokenomics', 'Roadmap'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-accent-cyan transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* BUTTON - Standard Right Alignment */}
                <div>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-accent-cyan transition-colors shadow-lg shadow-cyan-500/20"
                    >
                        Join Community
                    </a>
                </div>

            </div>
        </nav>
    );
}
