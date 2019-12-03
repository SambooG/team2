gsap.set('.noBar', {overflow: 'hidden'});

gsap.from('.bar-anim', {opacity: 0, duration: 1, x: 200, stagger: 0.6});

$('#add-meme').on('click', function(event) {
  event.preventDefault();
  gsap.from('.res-dis', {opacity: 0, duration: 1, x: 500, stagger: 0.6});
})