export const genRequest = async (req) => {
	const response = await fetch(req);
	return checkResponse(response);
};

const checkResponse = (response) => {
	if (!response.ok) {
		console.debug(response.text);

		throw new Error("network response was not ok");
	}
	return response.json();
};
