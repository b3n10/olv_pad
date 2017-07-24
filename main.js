var btn_add = document.getElementById('btn-add'),
	ul = document.getElementsByTagName('ul')[0],
	li_1 = document.getElementById('li-1'),
	div_text = document.getElementsByClassName('div-text')[0],
	listCounter = 2;

li_1.addEventListener("click", function() {
	focuslist(this.id, 'div-1');
});

li_1.addEventListener("dblclick", function() {
	li_1.setAttribute( 'contenteditable', true);
});

li_1.addEventListener("keydown", function(event) {
	if (event.which === 13) {
		li_1.setAttribute( 'contenteditable', false);
		return false;
	}
});

btn_add.addEventListener("click", function() {
	var li = document.createElement('li'),
		div = document.createElement('div'),
		txt = document.createElement('textarea');

	li.id = "li-" + listCounter;
	div.id = "div-" + listCounter;
	txt.id = "txt-" + listCounter;

	li.innerHTML = "tab " + listCounter;

	ul.appendChild(li);
	div.appendChild(txt);
	div_text.appendChild(div);

	li.addEventListener("click", function() {
		focuslist(li.id, div.id);
	});

	li.addEventListener("dblclick", function() {
		li.setAttribute( 'contenteditable', true);
	});

	li.addEventListener("keydown", function(event) {
		if (event.which === 13) {
			li.setAttribute( 'contenteditable', false);
			return false;
		}
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
