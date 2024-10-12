fetch("https://mdinesh.com/")
	.then((response) => {
		if (response.ok) {
			return response.text();
		}
		throw new Error("Network response was not ok.");
	})
	.then((html) => {
		console.log(html);
	})
	.catch((error) => {
		console.error("There has been a problem with your fetch operation:", error);
	});
