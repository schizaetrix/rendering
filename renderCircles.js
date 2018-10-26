function renderCircles(circle) {
	var finalHTML = ''
	var circlesHTML = circle.map(function (circles) {
		var circleHTML = `
        <div class="text-center mt-5">
            <div style="width:${circles.radius}px;height:${circles.radius}px;border-radius:50px;background-color:${circles.color};margin:auto;"></div>
        </div>
    `
		return circleHTML;
	});

	finalHTML += circlesHTML.join('');

    return finalHTML;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}