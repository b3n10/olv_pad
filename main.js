/*
 * Author: Francis Ben Lleve
 * Date Started: 07-24-2017
 * Last Update: 07-25-2017
 * Git: https://github.com/b3n10/olv_pad.git
 * Notes: No frameworks used. Only Vanilla JavaScript. Say NO to JQuery!
 * Todo: Need copy function HTML5 compatibility.
 */

var btn_add = document.getElementById('btn-add'),
	ul = document.getElementsByTagName('ul')[0],
	li_1 = document.getElementById('li-1'),
	div_text = document.getElementsByClassName('div-text')[0],
	txt_1 = document.getElementById('txt-1'),
	copy_1 = document.getElementsByClassName('a-copy')[0],
	clear_1 = document.getElementsByClassName('a-clear')[0],
	listCounter = 2;

li_1.addEventListener("click", function() { focuslist(this.id, 'div-1') });
li_1.addEventListener("dblclick", function() {
	li_1.setAttribute('contenteditable', true)
	li_1.classList.remove('selected');
	li_1.classList.add('rename');
});

li_1.addEventListener("keydown", function(event) {
	if (event.which === 13) {
		li_1.setAttribute( 'contenteditable', false);
		li_1.classList.remove('rename');
		li_1.classList.add('selected');
		return false;
	}
});

copy_1.addEventListener("click", function() { copyText(txt_1) });
clear_1.addEventListener("click", function() { clearText(txt_1) });

btn_add.addEventListener("click", function() {
	var li = document.createElement('li'),
		div = document.createElement('div'),
		txt = document.createElement('textarea'),
		copy = document.createElement('a'),
		clear = document.createElement('a');

	li.id = "li-" + listCounter;
	div.id = "div-" + listCounter;
	txt.id = "txt-" + listCounter;

	li.innerHTML = "tab " + listCounter;
	copy.innerHTML = "copy";
	clear.innerHTML = "clear";

	copy.classList.add("a-copy");
	clear.classList.add("a-clear");

	ul.appendChild(li);
	div.appendChild(txt);
	div.appendChild(copy);
	div.appendChild(clear);
	div_text.appendChild(div);

	li.addEventListener("click", function() {
		focuslist(li.id, div.id);
	});

	li.addEventListener("dblclick", function() {
		li.classList.remove('selected');
		li.classList.add('rename');
		li.setAttribute( 'contenteditable', true);
	});

	li.addEventListener("keydown", function(event) {
		if (event.which === 13) {
			li.setAttribute( 'contenteditable', false);
			li.classList.remove('rename');
			li.classList.add('selected');
			return false;
		}
	});

	copy.addEventListener("click", function() { copyText(txt) });
	clear.addEventListener("click", function() { clearText(txt) });

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

function copyText(txt) {
	//copy
	console.log(txt);
	txt.select();
	document.execCommand('Copy');
}

function clearText(txt) {
	//clear
	if (confirm("Are you sure you want to clear?")) {
		txt.value = "";
	}
}
