btnWH = document.getElementById('btnWH');
btnWH.addEventListener( 'click', () => {
	w = window.innerWidth
	h = window.innerHeight
	alert(`Ширина вашего экрана: ${w}
Высота вашего экрана: ${h}`)
})

btnCoords = document.getElementById('btnCoords');
btnCoords.addEventListener( 'click', () => {
	if ("geolocation" in navigator) {
  /* местоположение доступно */
  		if ("geolocation" in navigator) {
  			navigator.geolocation.getCurrentPosition((position) => {
    		const { coords } = position;
    		alert(`Долгота: ${coords.latitude},
Широта: ${coords.longitude}`);
  			});
			}
	} else {
	}
})