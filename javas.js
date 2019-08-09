const inputs = document.querySelectorAll('.controls input');

	function hendleUpdate(){
		console.log(this.value);
		
		const suffix = this.dataset.sizing || '';

		document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

	}

	inputs.forEach(mousemove);
	inputs.forEach(change);

	function mousemove(input){
		input.addEventListener('mousemove',hendleUpdate);
	}
	function change(input){
		input.addEventListener('change',hendleUpdate);
	}