function onClickEvent(ObjectID) {
	GlobalObjectID = ObjectID
	socket.send(JSON.stringify(["InfoRequest",ObjectID]));
	$('.sendReviews').css('opacity', '1');
	$('.reviews').css('opacity', '1');
}

var GlobalObjectID;

function sendGenericComment() {
	message = JSON.stringify(
		[
			"SendComment",
			[
				GlobalObjectID,
				1,
				prompt("Комментарий"),
				1
			]
		]
	)
	socket.send(message);
}

street = document.getElementById('street');
category = document.getElementById('category');
name = document.getElementById('name');
comment = document.getElementById('comment');

function printMessage(data) {
	message = JSON.parse(data);

	address = message.address;
	street.textContent = address;

	// for (var value of message.comments[0].category) {
	// 	category.textContent = value;
	// }

	// for (var value of message.comments[0].name) {
	// 	name.textContent = value;
	// }

	// for (var value of message.comments[0].content) {
	// 	comment.textContent = value;
	// }

	commentBox = document.querySelectorAll(".comments")[0]
	commentBox.innerHTML = ""
	message.comments.forEach( (comment) => {
		commentBox.innerHTML += 
		`
		
		<div class="overview">
			<p class="categ" id="category">​${comment.category}</p>
			<p class="commentname" id="name">${comment.name} пишет:</p>
			<p id="comment">${comment.content}</p>
			<div class="line-end"></div>
		</div>
		`
	})

	//message.innerHTML = 
}
