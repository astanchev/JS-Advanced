function solve() {
	const input = document.getElementById('input').value;
	const output = document.getElementById('resultOutput');
	const removeNum = sum(input);
	const length = input.length - 2 * removeNum;

	output.textContent = input
		.substr(removeNum, length)
        .split(/(\d{8})/)
		.map(a => parseInt(a, 2))
		.map(a => String.fromCharCode(a))
		.filter((x) => /[A-Za-z ]+/g.test(x))
		.join('');

	function sum(input) {

		if (input.length === 1) {
			return +input;
		}

		return sum(input
			.split('')
			.map(Number)
			.reduce((a, b) => a + b, 0)
			.toString());
	}
}