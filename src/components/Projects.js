import React from 'react';


const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: '../Assets/Projects/blog.png',
    description: 'Description of Project 1...',
  },
  {
    id: 2,
    title: 'Project 2',
    image: '../Assets/Projects/chatify.png',
    description: 'Description of Project 2...',
  },
  // Add more projects as needed
];
function Projects() {
  return (
   <section id="projects" class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8">
        <h3 class="fs-5 mb-2 text-secondary text-uppercase">Portfolio</h3>
        <h2 class="display-5 mb-4">From captivating websites to breathtaking visual identities, our portfolio is a testament to our dedication.</h2>
        <button type="button" class="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5">All Portfolio</button>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row gy-3 gy-lg-4 gy-lg-0x">
      <div key={projects.id} class="col-12 col-lg-6">
        <figure class="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
          <a href="#!">
            <img class="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src={projects.image} alt={projects.title}/>
          </a>
          <figcaption>
            <h3 class="text-white bsb-hover-fadeInLeft">Visual Identity</h3>
            <div class="text-white bsb-hover-fadeInRight">Branding</div>
          </figcaption>
        </figure>
      </div>
      <div key= {projects.id} class="col-12 col-lg-6">
        <figure class="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
          <a href="#!">
          <img class="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src={projects.image} alt={projects.title}/>
          </a>
          <figcaption>
            <h3 class="text-white bsb-hover-fadeInUp">Logo Evolution</h3>
            <div class="text-white bsb-hover-fadeInDown">Design</div>
          </figcaption>
        </figure>
      </div>
      <div class="col-12 col-lg-6">
        <figure class="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
          <a href="#!">
          <img class="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src={projects.image} alt=""/>
             </a>
          <figcaption>
            <h3 class="text-white bsb-hover-fadeInLeft">Machine Learning</h3>
            <div class="text-white bsb-hover-fadeInRight">AI</div>
          </figcaption>
        </figure>
      </div>
      <div class="col-12 col-lg-6">
        <figure class="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
          <a href="#!">
          <img class="img-fluid bsb-scale-up bsb-hover-scale" loading="lazy" src={projects.image} alt=""/>
            </a>
          <figcaption>
            <h3 class="text-white bsb-hover-fadeInUp">Lens Formula</h3>
            <div class="text-white bsb-hover-fadeInDown">Photography</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>
  );
}

export default Projects;