export default function HeroVideo() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* YouTube Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/videos/bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Optional Overlay Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold">
                {/* <h1>Overlay Text Here</h1> */}
               
            </div>
        </div>
    )
}
