var smallBox = document.getElementById('small-box');
var smallImg = Array.from( smallBox.children );
var middleImg = document.getElementById('middle-img');
var middleBox = document.getElementById('middle-box');



smallImg.forEach( v => {
	v.onmouseover = function () {
		// 去掉所有的class名
		// smallImg.forEach( n => n.classList.remove('active'));
		// 当前img添加class名
		// this.classList.add('active');

		// 切换中型图片和大型图片的src地址

		middleImg.src = this.src;
		// largeImg.src = this.src;
	};
});