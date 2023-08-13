import React from 'react';

import aboutImage from '../Logo/img1.jpg';

const teamMembers = [
  {
    img: 'https://media.istockphoto.com/id/951132442/photo/mastering-new-culinary-heights.jpg?s=612x612&w=0&k=20&c=96kg8oMcQ1VlItWhwRI69aAO_CWiZjHvNuvNYPiE59M=',
    name: 'John Doe',
    role: 'Head Chef',
    bio: 'Passionate about creating innovative dishes that combine tradition with modern flavors.',
  },
  {
    img: 'https://image.shutterstock.com/image-photo/african-american-female-chef-having-260nw-2150289105.jpg',
    name: 'Jane Smith',
    role: 'Sous Chef',
    bio: 'Expert in managing kitchen operations and ensuring high-quality food preparation.',
  },
  {
    img: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2021-07/chef%20%287%29.jpg',
    name: 'Mr. Cheesy',
    role: 'Sous Chef',
    bio: 'Skilled in orchestrating seamless kitchen operations and dedicated to delivering top-notch culinary creations.',
  },
  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div className="about-us-wrapper p-6">
      <div className="about-us-content mb-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p>
          Welcome to Nameste-Food! We are passionate about bringing you the finest culinary experiences.
        </p>
        <p>Our team of dedicated chefs and food enthusiasts work tirelessly to create dishes that tantalize your taste buds and satisfy your cravings.</p>
        <p>At Nameste-Food!, we believe that food is not just a necessity; it's an art, a culture, and a source of joy. Our mission is to provide you with exceptional dining experiences that create lasting memories.</p>
        <p>Whether you're a fan of gourmet cuisine, comfort food, or exotic flavors, you'll find something that suits your palate on our menu.</p>
        <p>Join us on a culinary journey and explore a world of flavors right at your fingertips.</p>
        
      </div>
      <div className="our-team-section">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="team-members-container grid gap-6 grid-cols-1 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div className="team-member-card bg-white p-4 rounded-lg shadow-md" key={index}>
              <div className="team-member-info">
                <h3 className="team-member-name text-xl font-semibold mb-2">{member.name}</h3>
                <img className="team-member-image w-full h-auto rounded-lg mb-2" src={member.img} alt={member.name} />
                <p className="team-member-role text-gray-600">{member.role}</p>
                <p className="team-member-bio text-gray-800">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
