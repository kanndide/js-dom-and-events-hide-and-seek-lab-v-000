function getFirstSelector(selector) {
	return document.querySelector(selector)
};

function nestedTarget(selector) {
	return document.querySelector('#nested .target')
};

function deepestChild() {
	const level1 = document.getElementById('grand-node').querySelectorAll('div')
	return level1[level1.length - 1]
};

function increaseRankBy(num) {
	const lis = document.querySelectorAll('ul.ranked-list li')

	for (let i = 0; i < lis.length; i++) {
	  lis[i].innerHTML = (Number(lis[i].innerHTML) + num).toString()
	}
};