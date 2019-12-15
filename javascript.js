const input = document.getElementById('link');
const iframe1 = document.getElementsByClassName('iframe')[0];
const button = document.getElementById('button');
const replacer = () => {
	const video_id = document.getElementById('link').value.split('=')[1];
	button.remove();
	input.remove();
	iframe1.src = `https://www.download-mp3-youtube.com/api/?api_key=MzYxOTgxOTcx&format=mp3&logo=1&video_id=${video_id}`;
	iframe1.style.display = 'block';
};

button.addEventListener('click', replacer);
alert(video_id);