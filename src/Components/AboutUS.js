import React from 'react'
 
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
 
];

const AboutUs = () => {
  return (
    <div className="about-us-wrapper p-6">
     
        
 <div className="text-center py-5">
  <h1 className="text-3xl font-bold ">Welcome to Nameste Food!</h1>
</div>
  <p className="text-gray-700">
    At <span className="font-bold">Nameste Food </span>, we have a deep passion for all things delicious. Our journey began with a simple idea: to create a platform that celebrates the artistry, culture, and flavors of the culinary world. We're more than just a food website; we're a community of food enthusiasts, chefs, home cooks, and adventurers who share a common love for exceptional cuisine.
  </p>
  
  <h2 className="text-xl font-bold mt-6 mb-3 text-center">What We Offer:</h2>
  <p className="text-gray-700">
    <span className="text-lg font-bold">Expert Chef Insights:</span> Learn from the best! Our team of seasoned chefs and culinary experts share their insights, techniques, and trade secrets to help you elevate your cooking skills.
  </p>
  <p className="text-gray-700 mt-2">
    <span className="text-lg font-bold">Engaging Food Stories:</span> Immerse yourself in the captivating stories behind your favorite dishes, ingredients, and culinary traditions.
  </p>
  <p className="text-gray-700 mt-2">
    <span className="text-lg font-bold">Stunning Visuals:</span> Our vibrant photography and engaging videos capture the essence of food in its most mouthwatering form.
  </p>
  <div className="our-team-section">
        <h2 className="text-2xl font-bold mb-3 mt-4 text-center">Our Team</h2>
        <p>Our team of dedicated chefs and food enthusiasts work tirelessly to create dishes that tantalize your taste buds and satisfy your cravings.</p>
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
      <h2 className="text-xl font-bold mt-6  text-center">Our Mission:</h2>
  <p className="text-gray-700 leading-relaxed mt-3">
    Our mission is to bring you on a gastronomic adventure that transcends borders and tantalizes your taste buds. We curate and share delectable recipes, culinary tips, and insightful articles that inspire you to explore the vibrant world of cooking and dining. Whether you're a seasoned chef or a kitchen novice, we're here to ignite your culinary creativity and help you discover new flavors.
  </p>
  <h2 className="text-xl font-bold mt-6 mb-3 text-center">Join Us:</h2>
  <p className=" text-gray-700 leading-relaxed mt-3">
    Come join us on this delectable journey! Whether you're looking for mouthwatering recipes, culinary inspiration, or a community of fellow food enthusiasts, <span className="font-bold">Nameste Food</span> has something for you. Let's explore, create, and savor the magic of food together.
  </p>
 
    </div>
   
  );
};

export default AboutUs;
