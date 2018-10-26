function renderNametags(nametag) {
	var finalHTML = ''
	var namesHTML = nametag.map(function (nametags) {
		var nameHTML = `
        <div class="text-center mt-5">
             <div style="width:200px;height:40px;background-color:darkblue;color:white;margin:auto;">Hello, my name is:</div>
             <div style="width:200px;height:100px;border:1px solid black;margin:auto;">${nametags}</div>
         </div>
    `
		return nameHTML;
	});

	finalHTML += namesHTML.join('');

    return finalHTML;
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}