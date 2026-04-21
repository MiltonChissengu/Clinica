document.addEventListener('DOMContentLoaded', function(){
	const nav = document.getElementById('nav');
	const toggle = document.getElementById('navToggle');
	if(toggle){
		toggle.addEventListener('click', function(){
			nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', nav.classList.contains('open'))
		});
	}

	const form = document.getElementById('contactForm');
	if(form){
		form.addEventListener('submit', function(e){
			e.preventDefault();
			alert('Mensagem enviada. Obrigado.');
			form.reset();
		});
	}
});