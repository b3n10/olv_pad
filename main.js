var btn_add = document.getElementById('btn-add'),
	ul = document.getElementsByTagName('ul')[0],
	li_1 = document.getElementById('li-1'),
	div_text = document.getElementsByClassName('div-text')[0];
	listCounter = 2;

li_1.addEventListener("click", function() {
	focuslist(this.id, 'div-1');
});

btn_add.addEventListener("click", function() {
	var li = document.createElement('li'),
		div = document.createElement('div'),
		txt = document.createElement('textarea');

	li.id = "li-" + listCounter;
	div.id = "div-" + listCounter;
	txt.id = "txt-" + listCounter;

	li.innerHTML = "tab " + listCounter;
	txt.innerHTML = listCounter;

	ul.appendChild(li);
	div.appendChild(txt);
	div_text.appendChild(div);

	li.addEventListener("click", function() {
		focuslist(li.id, div.id);
	});

	focuslist(li.id, div.id);

	listCounter++;
});

function focuslist(li, div) {
	var list = document.getElementsByTagName('li');

	for (i = 0;i < list.length;i++) {
		list[i].classList.remove('selected');
		document.getElementById('div-' + (i+1)).style.display = 'none';
	}

	document.getElementById(li).classList.add('selected');
	document.getElementById(div).style.display = 'block';
}
