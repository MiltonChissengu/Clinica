document.addEventListener('DOMContentLoaded', function(){
	const nav = document.getElementById('nav');
	const toggle = document.getElementById('navToggle');
	const navList = document.getElementById('navList');
	const navLi = document.querySelectorAll('#navList li a');

	function openMenu(){
		nav.classList.add('open');
		toggle.setAttribute('aria-expanded','true');
		navList.setAttribute('aria-hidden','false');
	}
	function closeMenu(){
		nav.classList.remove('open');
		toggle.setAttribute('aria-expanded','false');
		navList.setAttribute('aria-hidden','true');
	}

	if(toggle){
		toggle.addEventListener('click', function(e){
			if(nav.classList.contains('open')) closeMenu(); else openMenu();
		    navLi.forEach(clic => {
           		clic.onclick = () => {
				closeMenu();
		   	}
			});
		});

		// Close menu when clicking outside
		document.addEventListener('click', function(e){
			if(!nav.contains(e.target) && nav.classList.contains('open')){
				closeMenu();
			}
		});

		// Close on ESC
		document.addEventListener('keydown', function(e){
			if(e.key === 'Escape' && nav.classList.contains('open')){
				closeMenu();
			}
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