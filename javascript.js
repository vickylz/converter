const input = document.getElementById('link');
const iframe1 = document.getElementsByClassName('iframe')[0];
const button = document.getElementById('button');
const replacer = () => {
	const input1 = document.getElementById('link').value;
	const isMobile = input1.indexOf('.be') > 0;
	let video_id;
	if(isMobile) {
	video_id = input1.split('e/')[1];
	} else {
	video_id = input1.split('=')[1];
	};
	button.remove();
	input.remove();
	iframe1.src = `https://www.download-mp3-youtube.com/api/?api_key=MzYxOTgxOTcx&format=mp3&logo=1&video_id=${video_id}`;
	iframe1.style.display = 'block';
	console.log('isMobile: ',isMobile);
	console.log('video_id: ',video_id);
	console.log('Input value: ',input1);
	console.log('.be position: ', input1.indexOf('.be'));
};
button.addEventListener('click', replacer);