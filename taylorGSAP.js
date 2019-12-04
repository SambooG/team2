gsap.set('.homepage, header', {display: 'none'});
gsap.set('.noBar', {overflow: 'hidden'});



$('#add-meme').on('click', function(event) {
  event.preventDefault();
  gsap.set('.res', {display: 'block'});
  gsap.from('.res-dis', {opacity: 0, duration: 1, x: 500, stagger: 0.6});
});

$('#start-btn').on('click', function(event) {
  event.preventDefault();
  gsap.to('#land-top', {opacity: 0, duration: 1, x: 500});
  gsap.to('#land-bottom', {opacity: 0, duration: 1, x: -500});
  gsap.set('.landing', {display: 'none', delay: 1});
  gsap.set('.bar-anim, .bar, header', {display: 'block', delay: 0.8});
  gsap.from('.bar-anim', {opacity: 0, duration: 2, x: 500, stagger: 0.6, delay: 1});
});