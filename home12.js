var arr = [
	{
		"title": "First Block",
		"imageURL": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/android_ambassador_v1_cmyk_200px.max-200x200.png",
		"border": "7px dotted yellow"
	},
	{
		"title": "Second Block",
		"imageURL": "https://www.cmcgroups.com/wp-content/uploads/2018/02/logo-att-color-trans-200x200.png",
		"border": "7px dashed yellow"
	},
	{
		"title": "Third Block",
		"imageURL": "https://21clradio.com/wp-content/uploads/2015/09/Blend-Space-Logo-1.png",
		"border": "7px solid yellow"
	}
];

function createNewBlocks() {
	var answer = Number(prompt("How meny block add?"));
	if(answer > 6 || answer < 1){
		return;
	}
	var parentEl = document.getElementById("blocks");
	for (var i = 0; i < answer; i++) {
		var obj = arr[i % 3];
		var newEl =   document.createElement("div");
		newEl.style.border = obj.border;
		newEl.innerHTML= obj.title;
		newEl.style.backgroundImage = "url(" + obj.imageURL + ")";
		parentEl.append(newEl);
	}
}

function deleteBlocks() {
	var answer = Number(prompt("How block number delete?"));
	var parentEl = document.getElementById("blocks");
	parentEl.removeChild(parentEl.children[answer-1]);

}
