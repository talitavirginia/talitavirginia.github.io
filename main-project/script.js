//////////////////// SVG code below

window.addEventListener('DOMContentLoaded', e=>{
	if(document.body.classList.contains('index')){
		loadSVG();	
	}
	
});

function loadSVG(){
	xhr = new XMLHttpRequest();
	xhr.open('GET','plasticene.svg',false);
	xhr.overrideMimeType('image/svg+xml');
	xhr.onload = function(e) {
		document.querySelector('#svg-container').appendChild(xhr.responseXML.documentElement);
		attachListeners();
	};
	xhr.send('');
}


function attachListeners(){
	const textElements = document.querySelectorAll('svg text');
	
	textElements.forEach(element=>{
		const parent = element.parentNode;
		const id = parent.id;
		const box = document.querySelector('div[data-name='+id+']');
		element.addEventListener('mouseenter', e=>{
			element.classList.add('hovered');
			showBox(box, e);
		});
		element.addEventListener('mouseleave', e=>{
			element.classList.remove('hovered');
			hideBoxes();
		});
		element.addEventListener('click', e=>{
			window.location = 'interview.php?time='+box.dataset.time;
		});

	});
}


function showBox(box, e){
	
	if(box){
		
		let top = e.pageY;
		box.classList.add('visible');
		if(top > window.innerHeight * 0.6){
			top-=box.getBoundingClientRect().height
		}
		box.style.top = top + 'px';
		box.style.left = e.pageX + 'px';

	}
	
}

function hideBoxes(){
	document.querySelectorAll('.box').forEach(box=>{
		box.classList.remove('visible');
	});
}


//////////////////// Subtitles code below

const audio = document.querySelector('video');
if(audio){
	const startTime = audio.dataset.startTime;
	
	audio.currentTime = startTime;

	document.body.addEventListener('click', () => {
		audio.play();
		document.querySelector('#play-button').style.display = 'none';
	})

	audio.addEventListener('play', () => {
		const tracks = audio.textTracks[0];
		const cues = tracks.cues;
		for (const [index, cue] of Object.entries(cues)) {
			if(typeof(cue) === 'object'){
				cue.onenter = cueEnter;
				cue.onexit = cueExit;
			}
		}
	});

	function cueEnter(){

		let subtitleText = this.text;
		if(subtitleText.includes('[[')) {
			const matches = this.text.match(/\[\[(.*)\]\]/);		
			if(matches[1]){
				document.querySelector('#'+matches[1]).style.display = 'block';
				subtitleText = subtitleText.replace(matches[0], '');
			}
			
		}
		document.querySelector('#subtitle-container').innerText = subtitleText;
	}

	function cueExit(){
		document.querySelector('#subtitle-container').innerText = '';
	}

}



