import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Teams.css';
import pavan from '../assets/pavan.jpeg';
import krishna from '../assets/krishna.jpeg';
import sandeep from '../assets/sandeep.jpeg';
import nareen from '../assets/nareen.jpeg';
import sunil from '../assets/sunil.jpeg';
import dheeru from '../assets/dheeru.jpeg';
import charan from '../assets/charan.jpeg';
import prabhath from '../assets/prabhath.jpeg';

const teamMembers = [
    {
        id: 1,
        name: 'Pavan Gollapalli',
        role: 'Founder & CEO',
        image: pavan,
    },
    {
        id: 2,
        name: 'Krishna Bhagavan',
        role: 'Chief Technology Officer (CTO)',
        image: krishna,
    },
    {
        id: 3,
        name: 'Sandeep Jakka',
        role: 'Chief Operating Officer (COO)',
        image: sandeep,
    },
    {
        id: 4,
        name: 'Nareen Kumar Mangam',
        role: 'Chief Information Security Officer (CISO)',
        image: nareen,
    },
    {
        id: 5,
        name: 'Charan Tej',
        role: 'Product Design Lead',
        image: charan,
    },
    {
        id: 6,
        name: 'Sunil Garbana',
        role: 'Front-End Engineer',
        image: sunil,
    },
    {
        id: 7,
        name: 'Dheeraj Bathi',
        role: 'Head of Product & Quality Assurance',
        image: dheeru,
    },

    {
        id: 8,
        name: 'Prabhath',
        role: 'Client Acquisition & Automation Lead',
        image: prabhath,
    }
];

const Teams = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <section className="teams-section" id="teams">
            <div className="teams-container">
                <motion.div
                    className="teams-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="teams-title">Our exclusive members</h2>

                </motion.div>

                <div className="teams-carousel">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="team-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        // onClick={() => setActiveIndex(index)} 
                        // Note: onClick handling for 3D rotation would require more complex state/CSS mapping,
                        // keeping it simple with CSS hover effects for now as per template which looks static/hover-based.
                        >
                            <img src={member.image} alt={member.name} className="team-card-image" />
                            <div className="team-card-overlay">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Teams;
