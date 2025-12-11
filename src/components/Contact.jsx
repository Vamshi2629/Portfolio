import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        alert('Thanks for reaching out! I\'ll get back to you soon.');
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'vamshiboda948@gmail.com', link: 'mailto:vamshiboda948@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Hyderabad, India', link: null },
    ];

    const socialLinks = [
        { icon: Github, label: 'GitHub', link: 'https://github.com' },
        { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
        { icon: Twitter, label: 'Twitter', link: 'https://twitter.com' },
    ];

    return (
        <section id="contact" className="relative py-20">
            <div className="section-container">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
                            Have a project in mind or just want to say hi? Feel free to reach out!
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                    </div>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left side - Contact info */}
                    <AnimatedSection className="space-y-8">
                        <div className="glass-effect rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Let's build something amazing together!
                            </p>

                            {/* Contact info items */}
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-4 group">
                                            <div className="p-3 glass-effect rounded-lg group-hover:bg-white/10 transition-colors">
                                                <Icon className="w-6 h-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                                                {info.link ? (
                                                    <a
                                                        href={info.link}
                                                        className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-300 font-medium">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Social links */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-sm text-gray-500 mb-4">Follow me on</p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                                                aria-label={social.label}
                                            >
                                                <Icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right side - Contact form */}
                    <AnimatedSection>
                        <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary group"
                            >
                                Send Message
                                <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Contact;
