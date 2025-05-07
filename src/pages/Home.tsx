import rpmgBanner from '../assets/logos/RPMG_banner.jpg';

const Home = () => {
    return (
        <section 
            className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center" 
            style={{ backgroundImage: `url(${rpmgBanner})` }}
            aria-labelledby="hero-heading"
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            
            {/* Content centered on top of background */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-87 text-center">
                <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Radyo Pilipino
                </h1>
                
                <p className="mt-4 text-xl text-white text-center max-w-3xl mx-auto">
                    Broadcasting the voice of the Philippines since 1980
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        AM Stations
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        FM Stations
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                        TV Stations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;