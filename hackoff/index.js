window.onload = function() {
    console.log("working");
    Particles.init({
      selector: '.background',
      connectParticles: true,
      color: '#0077ff',
      responsive: [
        {
        breakpoint: 800,
        options: {
          color: '#0077ff',
          maxParticles: 80,
          connectParticles: false}
        }
      ]
    });
  };
  