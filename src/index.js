import { currency_list } from "./currencies.js";

const url = process.env.SITE_URL;
let options = '';

for (const [key, value] of Object.entries(currency_list)) {
	options += `<option value=${key} ${(key === "USD" ? "selected=selected": "")}>${value} (${key})</option>`;
}

document.getElementById('base_curr').innerHTML = options;
document.getElementById('new_curr').innerHTML = options;

const convertCurrency = async() => {
	document.addEventListener('DOMContentLoaded', () => {
		const convert = document.getElementById("convert");
		convert.addEventListener("click", () => {
			fetch(url)
				.then((res) => res.json())
				.then((exchange_rates) => {
					const baseValue = document.getElementById('base_value').value;
					const baseCurr = document.getElementById('base_curr').value;
					const newCurr = document.getElementById('new_curr').value;
					let newValue = document.getElementById('new_value');

					if (isNaN(baseValue)) {
						newValue.value = "Invalid input"
					} else {
						let result = baseValue / exchange_rates.rates[baseCurr] * exchange_rates.rates[newCurr];
						result = Math.round((result + 0.00001) * 100) / 100;
						newValue.value = result;
					}
			});
		});
	});
};

convertCurrency();

