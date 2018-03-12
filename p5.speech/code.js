let speech;
window.onload = function() {};

function listen() {
	speech = new p5.SpeechRec();
    let p1 = document.getElementById('p1');    
	speech.onResult = function() {
        let speechStr = speech.resultString;
        p1.innerHTML = speechStr;
		//document.body.innerHTML = "You said: <h2>"+speech.resultString+"</h2>";
		//document.body.innerHTML += "<div><button onclick=\"listen()\">Click to listen again</button></div>";
	}
	speech.start();	
}