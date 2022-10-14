exports.handler = async (event, context) => {
	function CustomError(message) {
		this.name = 'CustomError';
		this.message = message;
	}
	CustomError.prototype = new Error();

	throw new CustomError('This is a custom error!');
};
