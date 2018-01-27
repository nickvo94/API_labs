/* eslint no-unused-vars: "off" */
/* eslint linebreak-style: ["error", "windows"] */
/* global paper */
/* eslint no-trailing-spaces: "error" */
/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */

paper.install(window);

window.onload = function init() {
    paper.setup('myCanvas');
	with(paper){
		var path = new Path();
		path.strokeColor = 'black';
		var start = new Point(100, 100);
		path.moveTo(start);
		path.lineTo(start.add([ 200, -50 ]));
		view.draw();
	}
}



