fetch("https://mohammedimran.com/")
	.then(async (response) => {
		return response.text();
	})
	.then((html) => {
		console.log(html);
	})
	.catch((error) => {
		console.error("There has been a problem with your fetch operation:", error);
	});
