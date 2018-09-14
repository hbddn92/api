const hello = (state = 'test button', action) => {
  switch (action.type) {
	case 'HELLO_SAGA_ASYNC':
		console.log(action)
		return action.data
	default:
		return state
  }
}

export default hello
