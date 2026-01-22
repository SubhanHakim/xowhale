export default function JoinCommunity() {
    return (
        <section className="py-24 bg-[#0b0f14] flex justify-center px-4">

            {/* 
                THE CARD: 
                - Rounded corners (rounded-[3rem])
                - Dark Navy Background (bg-[#151b26])
                - Centered Text
                - Floating Button
            */}
            <div className="w-full max-w-7xl bg-[#151b26] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/5 shadow-2xl">

                {/* Subtle Grid Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="relative z-10">
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">
                        JOIN THE POD
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium">
                        We are massive. We are calm. We are inevitable.
                    </p>

                    <a
                        href="https://x.com/i/communities/2014290168967291031"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-12 py-4 bg-accent-cyan text-black font-black text-xl rounded-2xl hover:scale-105 transition-all duration-300"
                    >
                        X Community
                    </a>
                </div>

            </div>
        </section>
    );
}
