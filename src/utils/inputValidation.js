const fileExists = (file) => {
	if (!file) return false;

	return true;
};

const hasQuoteId = (quoteId) => {
	if (!quoteId) return false;

	return true;
};

export { fileExists, hasQuoteId };
