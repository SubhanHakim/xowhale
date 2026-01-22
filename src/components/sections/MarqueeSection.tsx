export default function MarqueeSection() {
    return (
        <div className="py-12 bg-accent-cyan/10 border-y border-accent-cyan/20 overflow-hidden rotate-[-2deg] scale-110">
            <div className="flex animate-marquee whitespace-nowrap gap-12 text-4xl font-black font-meme text-accent-cyan/90 uppercase items-center">
                {Array(10).fill("🐋 WHALE SZN 🌊 NO JEETS 💎 DIAMOND FINS 🚀").map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
            </div>
        </div>
    );
}
