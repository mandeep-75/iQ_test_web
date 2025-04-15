
import React from 'react';
import { Link } from 'react-router';


import examImg from '../assets/exam.jpg';
import mockImg from '../assets/mock-test.jpg';
import resourcesImg from '../assets/resources.jpg';
import communityImg from '../assets/community.jpg';
import heroImg from '../assets/hero.jpg';

export function Home() {
    const offerings = [
        {
            title: 'Exams',
            img: examImg,
            desc: 'Explore detailed syllabi, important topics, and past papers for all major competitive exams.',
            route: '/exams',
        },
        {
            title: 'Mock Tests',
            img: mockImg,
            desc: 'Practice under timed conditions with realistic mock tests designed by experts.',
            route: '/mock-tests',
        },
        {
            title: 'Resources',
            img: resourcesImg,
            desc: 'Access curated notes, video lectures, and reference materials to boost your preparation.',
            route: '/resources',
        },
        {
            title: 'Community',
            img: communityImg,
            desc: 'Join our forums and study groups to discuss strategies and clear your doubts.',
            route: '/community',
        },
    ];

    return (
        <>
            <section
                id="home"
                className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-start px-8"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <h1 className="text-5xl font-bold mb-4 text-white">Master Your Competitive Exams</h1>
                <p className="text-lg text-gray-300 mb-6">
                    Comprehensive study materials, mock tests, and expert guidance all in one place.
                </p>
                <button className="bg-red-500 hover:bg-teal-400 text-white py-2 px-6 rounded-lg transition">
                    Get Started
                </button>
            </section>

            <section id="features" className="max-w-7xl mx-auto my-16 px-8">
                <h2 className="text-3xl font-semibold text-center mb-12 text-white">Our Offerings</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offerings.map((item) => (
                        <Link
                            key={item.title}
                            to={item.route}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition block"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );

}
