import React from 'react';
import avatar from '../Assets/avatar.svg';
const Hero = () => {
  return (
    <div id="home" className="hero bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4">Hi! I'm Divine Ede</h1>
            <p className="lead">Lorem ipsum dolor sit amet, sed prima dicta reprimique an, et quo aperiri phaedrum torquatos. Ne qui ludus nostro ancillae. Ceteros salutandi philosophia usu at. Utroque laboramus contentiones his in, mel ex legendos perpetua expetenda, sint velit repudiare mei in.</p>
          </div>
          <div className="col-md-6">
            <img src={avatar} className="img-fluid rounded" alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;