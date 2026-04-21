// Toggle do menu em telas pequenas
document.addEventListener('DOMContentLoaded', function(){
	const nav = document.getElementById('nav');
	const toggle = document.getElementById('navToggle');
	if(toggle){
		toggle.addEventListener('click', function(){
			nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', nav.classList.contains('open'))
		});
	}

	// Formulário - demonstração (não envia dados reais)
	const form = document.getElementById('contactForm');
	if(form){
		form.addEventListener('submit', function(e){
			e.preventDefault();
			const fd = new FormData(form);
			const name = fd.get('name')?.toString().trim();
			const email = fd.get('email')?.toString().trim();
			const message = fd.get('message')?.toString().trim();
			if(!name || !email || !message){
				alert('Por favor preencha todos os campos.');
				return;
			}
			// Simula envio
			alert('Obrigado, ' + name + '! Sua mensagem foi recebida.');
			form.reset();
		});
	}
});