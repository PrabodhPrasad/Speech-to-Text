const sbtn=document.getElementById('sbtn');
const output=document.getElementById('output');
const recognition=new(window.SpeechRecognition||window.webkitSpeechRecognition)();
recognition.onstart=()=>{
    sbtn.textContent='...';
};
recognition.onresult=(event)=>{
    const transcript=event.results[0][0].transcript;
    output.textContent=transcript;
};
recognition.onend=()=>{
    sbtn.textContent='Recognize Speech';
};
sbtn.addEventListener('click',()=>{
    recognition.start();
});
function ctc(){
    navigator.clipboard.writeText(output.textContent);
}