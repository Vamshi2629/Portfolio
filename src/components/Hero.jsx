import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const fullText = "Full Stack Developer";

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background Orbs */}
            {/* Animated Background Orbs */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-orb w-96 h-96 bg-purple-500 top-20 -left-20 animate-float"></div>
                <div className="floating-orb w-80 h-80 bg-pink-500 bottom-20 -right-20 animation-delay-400" style={{ animationName: 'float' }}></div>
                <div className="floating-orb w-72 h-72 bg-cyan-500 top-1/2 left-1/2 animation-delay-800" style={{ animationName: 'float' }}></div>
            </div> */}

            <div className="section-container relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Greeting with fade-in animation */}
                    <div className="animate-fade-in">
                        <p className="text-lg md:text-xl text-gray-400 mb-4 font-medium">
                            👋 Hello, I'm
                        </p>
                    </div>

                    {/* Name with slide-up animation */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up animation-delay-200">
                        <span className="gradient-text font-display">Boda Vamshi</span>
                    </h1>

                    {/* Typing effect for role */}
                    <div className="h-12 md:h-16 mb-8 animate-slide-up animation-delay-400">
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-600">
                        I craft beautiful, responsive web applications with modern technologies.
                        Passionate about creating seamless user experiences and bringing ideas to life.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-800">
                        <button onClick={scrollToProjects} className="btn-primary group">
                            View My Work
                            <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </button>
                        <a href="#contact" className="btn-secondary">
                            Let's Connect
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center animate-fade-in animation-delay-1000">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                        >
                            <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                        >
                            <Linkedin className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                        >
                            <Mail className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
