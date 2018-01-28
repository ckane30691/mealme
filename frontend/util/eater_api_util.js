export const fetchEaters = () => (
	$.ajax({
		method: 'GET',
		url: `eaters`
	})
);
