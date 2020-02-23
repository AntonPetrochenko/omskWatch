function onClickEvent(ObjectID) {
	socket.send(JSON.stringify(["InfoRequest",ObjectID]));
}

const street = document.getElementById('street');
const category = document.getElementById('category');
const name = document.getElementById('name');
const commnet = document.getElementById('commnet');

function printMessage(data) {
	message = JSON.parse(data);

	const address = document.createElement('span');

	address.innerHTML = message.address;
	street.appendChild(address);
}