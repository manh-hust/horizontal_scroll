var blocks = document.getElementsByClassName('item');
var container = document.getElementsByClassName('container');
var hs = new HorizontalScroll.default({
	blocks : blocks,
	container: container,
    isAnimated: true,
    springEffect: .8,
    skewReducer: 30
});