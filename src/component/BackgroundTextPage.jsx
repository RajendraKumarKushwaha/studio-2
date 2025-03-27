export default function BackgroundTextPage({ text }) {
    return (
        <div className="h-80 mt-16 bg-[url('/images/two.jpg')] bg-[center_70%] bg-cover bg-no-repeat flex items-center justify-center text-white">
            <h1 className="text-4xl para text-[#f28b00] font-bold">{text}</h1>
        </div>

    );
}
