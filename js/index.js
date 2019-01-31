/*
 * @Author: Administrator
 * @Date:   2018-09-14 16:29:31
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-14 16:30:04
 */
// 屏幕适配
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (clientWidth > 750) {
				clientWidth = 750;

			}
			docEl.style.fontSize = clientWidth / 75 * 10 + "px";
			console.log(clientWidth)
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);