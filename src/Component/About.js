import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Welcome to The Blogging Journey!</h2>
        <p style={styles.paragraph}>
          At <strong>The Blogging Journey</strong>, we’re passionate about helping bloggers of all levels thrive in their digital endeavors. Whether you’re a seasoned pro or just starting out, our blog is designed to provide valuable insights, practical tips, and inspiration to help you navigate the ever-evolving world of blogging.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Mission</h2>
        <p style={styles.paragraph}>
          Our mission is to empower bloggers by offering a wealth of knowledge and resources that cover all aspects of blogging. From content creation and SEO strategies to monetization and personal branding, we aim to be your go-to source for everything you need to take your blog to the next level.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Meet the Team</h2>
        <div style={styles.teamMember}>
          <h3 style={styles.memberName}>Alex Johnson</h3>
          <p style={styles.memberRole}>Founder & Chief Blogger</p>
          <p style={styles.paragraph}>With over a decade of experience in the blogging industry, Alex Johnson founded <strong>The Blogging Journey</strong> to share his passion for content creation and digital marketing. Alex has helped numerous bloggers grow their platforms and achieve their goals, and he’s excited to share his expertise with our community.</p>
        </div>
        <div style={styles.teamMember}>
          <h3 style={styles.memberName}>Sarah Lee</h3>
          <p style={styles.memberRole}>Content Strategist</p>
          <p style={styles.paragraph}>Sarah Lee brings a wealth of knowledge in content strategy and SEO. Her mission is to help bloggers create compelling, search-optimized content that attracts and retains readers. Sarah’s insights and tips are designed to help you craft content that stands out in the crowded blogosphere.</p>
        </div>
        <div style={styles.teamMember}>
          <h3 style={styles.memberName}>Michael Brown</h3>
          <p style={styles.memberRole}>Technical Advisor</p>
          <p style={styles.paragraph}>Michael Brown is our go-to expert for all things technical. From website performance and hosting solutions to troubleshooting common blogging issues, Michael provides practical advice to ensure your blog runs smoothly and efficiently.</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Our Story</h2>
        <p style={styles.paragraph}>
          <strong>The Blogging Journey</strong> was born out of a passion for blogging and a desire to help others succeed. What started as a personal project quickly grew into a comprehensive resource for bloggers. Our team’s collective experience and dedication to the craft have driven us to create a platform that addresses the needs and challenges faced by bloggers every day.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>What We Offer</h2>
        <p style={styles.paragraph}>
          On <strong>The Blogging Journey</strong>, you’ll find a variety of content aimed at enhancing your blogging experience:
          <ul style={styles.list}>
            <li><strong>Expert Tips & Guides:</strong> In-depth articles on content creation, SEO, social media, and more.</li>
            <li><strong>Case Studies & Success Stories:</strong> Real-life examples of successful bloggers and the strategies they used.</li>
            <li><strong>Tools & Resources:</strong> Recommendations for tools and resources to streamline your blogging process.</li>
            <li><strong>Inspiration & Motivation:</strong> Stories and advice to keep you motivated and inspired on your blogging journey.</li>
          </ul>
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Get in Touch</h2>
        <p style={styles.paragraph}>
          We love connecting with our readers and fellow bloggers! If you have any questions, suggestions, or just want to share your blogging experiences, feel free to reach out to us at [email address] or connect with us on [social media links]. We’re here to support you every step of the way.
        </p>
      </section>

      
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '30px',
    color: '#1a73e8',
  },
  section: {
    marginBottom: '30px',
  },
  subHeading: {
    fontSize: '2.2rem',
    marginBottom: '15px',
    borderBottom: '2px solid #1a73e8',
    paddingBottom: '10px',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  teamMember: {
    marginBottom: '25px',
  },
  memberName: {
    fontSize: '1.8rem',
    margin: '0 0 5px',
    color: '#1a73e8',
  },
  memberRole: {
    fontSize: '1.3rem',
    color: '#555',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  backLink: {
    display: 'block',
    marginTop: '30px',
    fontSize: '1.2rem',
    color: '#1a73e8',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default About;
