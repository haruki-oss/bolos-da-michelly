/*Menu*/
openMenu.addEventListener('click', () => {
	menu.style.display = "flex"
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	setTimeout(()=> {
		menu.style.opacity = '1'
		menu.style.right = "0"
		openMenu.style.display = 'none'
	}, 10);
})
closeMenu.addEventListener('click', () => {
	menu.style.opacity = '0'
	menu.style.right = (menu.offsetWidth * -1) + 'px'
	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
	event.preventDefault(); 

	
	const tamanho = document.getElementById('tamanho').value;
	const massa = document.getElementById('massa').value;
	const recheio = document.getElementById('recheio').value;

	const precos = {
	  pequeno: 60,
	  medio: 90,
	  grande: 120,
	  baunilha: 0,
	  chocolate: 5,
	  cenoura: 8,
	  brigadeiro: 0,
	  morango: 3,
	  'brigadeiro-de-ninho': 9,
	  'doce-leite': 5
	};

	const precoTotal = precos[tamanho] + precos[massa] + precos[recheio];

	const resultadoElement = document.getElementById('resultado');
	resultadoElement.textContent = `O valor do bolo é R$ ${precoTotal.toFixed(2)}`; });
	const comprarDiv = document.getElementById('comprar');
    comprarDiv.innerHTML = '<button id="botaoComprar">Quero comprar!</button>';