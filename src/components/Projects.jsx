import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Chat Application',
            description: 'Real-time chat application with modern UI, message notifications, and user authentication. Built with WebSocket for instant messaging.',
            image: '💬',
            tags: ['React', 'Express.js', 'Socket.io', 'Postgres', 'Tailwind CSS', 'Render', 'Netlify', 'Neon'],
            github: '#',
            demo: 'https://chat-application-onlline.netlify.app/',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Shop Lane',
            description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard for product management.',
            image: '🛍️',
            tags: ['HTML', 'CSS', 'JavaScript', 'MockApi-products'],
            github: '#',
            demo: 'https://vamshi-shoplane-website.netlify.app/index1#',
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            title: 'Movie Search Engine',
            description: 'Advanced movie search and discovery platform with detailed information, ratings, and personalized recommendations.',
            image: '🎬',
            tags: ['React', 'JavaScript', 'TMDB API', 'Tailwind'],
            github: '#',
            demo: 'https://all-movies-search-engine.netlify.app/',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            title: 'Tic-Tac-Toe Game',
            description: 'Classic Tic-Tac-Toe game with a modern UI, score tracking, and player vs player mode.',
            image: '🎮',
            tags: ['React', 'Framer Motion', 'JavaScript', 'Tailwind CSS'],
            github: '#',
            demo: 'https://play-tic-tac-toe-game-ai.netlify.app/',
            gradient: 'from-green-400 to-emerald-500',
        },

        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather forecast app with interactive maps, hourly predictions, and location-based alerts.',
            image: '🌤️',
            tags: ['React', 'OpenWeather API', 'Charts.js', 'CSS'],
            github: '#',
            demo: '#',
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            title: 'Portfolio Builder',
            description: 'No-code portfolio website builder with drag-and-drop interface and customizable templates.',
            image: '🎨',
            tags: ['React', 'DnD Kit', 'Firebase', 'Tailwind'],
            github: '#',
            demo: '#',
            gradient: 'from-violet-500 to-purple-500',
        },
    ];

    return (
        <section id="projects" className="relative py-20">
            <div className="section-container">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                            Here are some of my recent projects that showcase my skills and passion for development.
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <AnimatedSection key={index} className={`animation-delay-${index * 200}`}>
                            <div className="group h-full">
                                <div className="relative h-full glass-effect rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                                    {/* Gradient border effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                                    {/* Card content */}
                                    <div className="relative z-10 h-full flex flex-col">
                                        {/* Icon/Image */}
                                        <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                                            {project.image}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-medium glass-effect rounded-full hover:bg-white/10 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/10 transition-all group/btn flex-1 justify-center"
                                            >
                                                <Github className="w-4 h-4 group-hover/btn:text-purple-400 transition-colors" />
                                                <span className="text-sm font-medium">Code</span>
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all group/btn flex-1 justify-center"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span className="text-sm font-medium">Demo</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hover glow effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
