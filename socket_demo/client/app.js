$(document).ready(()=>{
	console.log("jQuery?")

	const socket = io.connect()

	$("button").click(() => {
		socket.emit("click")
	})

	socket.on("update_count", new_count => {
		$("#number_of_clicks").text(new_count)
	})
})