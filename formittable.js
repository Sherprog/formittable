window.onload = function() {
  if (document.querySelector('input') !=null){
  	document.querySelector('input').focus(); 
  }
  showSaved();
}

var ownerURL = window.location.host.split('.');
var reverseURL = "-";
if (ownerURL.length < 2){
	reverseURL = "localHost"+reverseURL;
} else {
	reverseURL = ownerURL[0]+reverseURL;
	for(var i=1; i<ownerURL.length; i++){
		reverseURL = ownerURL[i]+"."+reverseURL;
	}
}

var inputsAll = document.querySelectorAll('input:not([type="submit"])');
var finputs = document.querySelectorAll('input:not([type="submit"]):not([type="password"]):not([id*="assword"]):not([class*="assword"])');
var fselx = document.getElementsByTagName('select');
var saveBtn = document.querySelector ('#formbl-save');
var restoreBtn = document.querySelector ('#formbl-restore');
var clearBtn = document.querySelector ('#formbl-delete');
var emptyBtn = document.querySelector ('#formbl-clear');
var submitBtns = document.querySelectorAll ('input[type="submit"]');

if (saveBtn != null){
	saveBtn.addEventListener('click', commitData, false);
}

if (restoreBtn != null){
	restoreBtn.addEventListener('click', showSaved, false);
}

if (clearBtn != null){
	clearBtn.addEventListener('click', clearSaved, false);
}

if (emptyBtn != null){
	emptyBtn.addEventListener('click', emptyFields, false);
}

if (fselx[0] != null) {
	for(var i=0; i<fselx.length; i++){
		fselx[i].addEventListener('change', selectChange, false);
		document.getElementById(fselx[i].name).value = fselx[i].value;
	}
	var hijo = fselx[0].firstChild;
}

if (submitBtns[0] != null) {
	for(var i=0; i<submitBtns.length; i++){
		submitBtns[i].addEventListener('click', commitData, false);
	}
}

function commitData () {
	for(var i=0; i<finputs.length; i++){
		localStorage.setItem(reverseURL+'formbl-'+finputs[i].id, finputs[i].value);
	}
}

function showSaved () {
	for(var i=0; i<finputs.length; i++){
		if (localStorage[reverseURL+'formbl-'+finputs[i].id] != null){
			finputs[i].value = localStorage[reverseURL+'formbl-'+finputs[i].id];
		} else {
			finputs[i].value = '';
		}
	}
	if (fselx[0] !=null) {
		for(var i=0; i<fselx.length; i++){
			if (localStorage[reverseURL+'formbl-'+fselx[i].name] != null){
				fselx[i].value = localStorage[reverseURL+'formbl-'+fselx[i].name];
			} else {
				selectReset();
			}
		}
	}
}

function clearSaved () {
	for(var i=0; i<finputs.length; i++){
		finputs[i].value = '';
		localStorage.removeItem(reverseURL+'formbl-'+finputs[i].id);
	}
	if (fselx[0] !=null) {
		selectReset();
	}	
}

function emptyFields () {
	for(var i=0; i<inputsAll.length; i++){
		inputsAll[i].value = '';
	}
	selectReset();
}

function selectChange() {
	for(var i=0; i<fselx.length; i++){
		document.getElementById(fselx[i].name).value = fselx[i].value;
	}
}

function selectReset() {
	for(var i=0; i<fselx.length; i++){
		hijo = fselx[i].firstChild;
		while (hijo.nodeType != 1) {
			hijo = hijo.nextSibling
		}
		fselx[i].value = hijo.value;
	}
}
