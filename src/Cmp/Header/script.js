const Voicecall = ()=>{
    alert('Voice call')
}

const Videocall = ()=>{
    alert('video call')
};

const Saccess = ()=>{
    alert('more options')
}
const Back = ()=>{
    alert('you are now your previous window')
}

var dataArray = [];

function displayData(e) {
    e.preventDefault();
  var data = document.getElementById("text").value;
  dataArray.push(data);
  let msg = document.getElementById('msg');
  var html = dataArray.map(function(item) {
    return "<p>" + item + "</p>";
  }).join("");
  msg.innerHTML = html
  if ( document.getElementById('text').value !== "") {
    reset()
  }
}

const reset = ()=>{
    document.getElementById('text').value = "";
}

const camera = ()=>{
    alert('open camera')
}
const file = ()=>{
    alert('attech your file')
}
const emot = ()=>{
    alert('emote')
}

export  {
    Voicecall,
    Videocall,
    Saccess,
    Back,
    displayData,
    camera,
    file,
    emot
};