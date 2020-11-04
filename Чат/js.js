btnGeo = document.getElementById('geo')
message = document.getElementById('message')
btnSend = document.getElementById('send')
forMessages = document.getElementById('for-messages')
url = 'wss://echo.websocket.org/'

send.addEventListener('click', () => {
	if(message.value){
		console.log(message.value)
		sended = document.createElement('p')
		sended.classList.add('my-message')
		sended.innerHTML = message.value
		forMessages.appendChild(sended)
		websocket.send(message.value);
	}
})

let websocket

websocket = new WebSocket(url);
websocket.onopen = function(evt) {
	document.getElementById('status').innerHTML = "CONNECTED";
};
websocket.onclose = function(evt) {
	document.getElementById('status').innerHTML = "DISCONNECTED"
};
websocket.onmessage = function(evt) {
	response = document.createElement('p')
	response.classList.add('echo-message')
	response.innerHTML = message.value
	forMessages.appendChild(response)
	message.value = null
};
websocket.onerror = function(evt) {
	document.getElementById('status').innerHTML = "ERROR"
}

btnGeo.addEventListener( 'click', () => {
	if ("geolocation" in navigator) {
  /* местоположение доступно */
  		if ("geolocation" in navigator) {
  			navigator.geolocation.getCurrentPosition((position) => {
    		const { coords } = position;
    		sended = document.createElement('p')
			sended.classList.add('my-message')
			sended.innerHTML = (`Долгота: ${coords.latitude},
Широта: ${coords.longitude}`)
			forMessages.appendChild(sended)
  			});
			}
	} else {
	sended = document.createElement('p')
			sended.classList.add('my-message')
			sended.innerHTML = (`Местоположение недоступно`)
			forMessages.appendChild(sended)

	}
})
