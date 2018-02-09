
let SpeechRecognition = webkitSpeechRecognition;
let SpeechGrammarList = webkitSpeechGrammarList;
let SpeechRecognitionEvent = webkitSpeechRecognitionEvent;

function testSpeech() {
	let inputTown = document.getElementById('town');
	let button = document.getElementById('voice');
	button.innerHTML = "...";
	button.disabled = true;

	let recognition = new webkitSpeechRecognition();
	let speechRecognitionList = new SpeechGrammarList();
	recognition.grammars = speechRecognitionList;
	recognition.lang = 'ru-Ru';
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;

	recognition.start();

	recognition.onresult = function(event) {
		let speechResult = event.results[0][0].transcript;
		speechResult = speechResult.charAt(0).toUpperCase() + speechResult.substr(1);
		inputTown.value = speechResult;
		console.log('Confidence: ' + event.results[0][0].confidence);
	}

	recognition.onspeechend = function() {
		recognition.stop();
		button.innerHTML = "Войс";
		button.disabled = false;
		
	}

	recognition.onerror = function(event) {

	}
}
