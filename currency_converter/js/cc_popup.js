$(document).ready(function() {
	$('#button').click(function() {
		$.getJSON('http://data.fixer.io/api/latest?access_key=dc44288a96a8f50e5253344272e5c835&format=1', function(exchange_rates) {
			var base_value = $('#base_value').val();
			var base_curr = $('#base_curr').val();
			var new_curr = $('#new_curr').val();
			var new_value = base_value / exchange_rates.rates[base_curr] * exchange_rates.rates[new_curr];
			new_value = Math.round((new_value + 0.00001) * 100) / 100;
			$('#new_value').val(new_value);
		});
	});
});

