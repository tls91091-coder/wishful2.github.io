document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
  }

  const form = document.getElementById('suggestion-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value || 'Anonymous';
      const result = document.getElementById('submission-result');
      result.textContent = 'Thanks ' + name + '! Your suggestion was received.';
      form.reset();
    });
  }
});
