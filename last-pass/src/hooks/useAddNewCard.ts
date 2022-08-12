const useAddNewCard = () => {
	const handleSubmit = (
        event: any,
        url: string,
        siteName: string,
        username: string,
        password: string,
    ) => {
		event.preventDefault();

		fetch('http://localhost:5000/password-cards', {
			method: 'POST',
			headers: {
				'Accept':       'application/json',
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				url,
				siteName,
				username,
				password,
			})
		});
	};

	return { handleSubmit }
};

export default useAddNewCard;