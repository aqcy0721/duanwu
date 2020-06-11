import {HEIGHT} from "./config";

let countdown = 60

export function getScrollHeight(arr) {
	const h = document.documentElement.clientHeight || document.body.clientHeight;
	const w = document.documentElement.clientWidth || document.body.clientWidth;
	let allHeight = 0;
	for (let i = 0; i < arr.length; i++) {
		allHeight += HEIGHT[arr[i]]
	}
	let _rem = allHeight * 100 / (750 / w)
	return (h - _rem) + "px";
}

export function sendCode(obj) {
	if (countdown == 0) {
		obj.removeAttribute("disabled");
		obj.innerHTML = '获取验证码'
		countdown = 60;
		return;
	} else {
		obj.setAttribute("disabled", true);
		obj.innerHTML = countdown + ' s'
		countdown--;
	}
	setTimeout(function () {
		sendCode(obj)
	}, 1000)
}

export function hasClass(el, className) {
	let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
	return reg.test(el.className)
}

export function addClass(el, className) {
	if (hasClass(el, className)) {
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
	let transformNames = {
		webkit: 'webkitTransform',
		Moz: 'MozTransform',
		O: 'OTransform',
		ms: 'msTransform',
		standard: 'transform'
	}

	for (let key in transformNames) {
		if (elementStyle[transformNames[key]] !== undefined) {
			return key
		}
	}

	return false
})()

export function prefixStyle(style) {
	if (vendor === false) {
		return false
	}

	if (vendor === 'standard') {
		return style
	}

	return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}





