export default (context, inject) => {

	inject('formatnumber', input => {
		console.log(input)
		console.log('FORMAT NUMBER!!!!!!')

		return input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
	})
}