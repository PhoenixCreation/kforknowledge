// Dom elements
var searchbox = document.getElementById('searchbox')
var maincards = document.getElementsByClassName('course')
var courses = document.getElementsByClassName('course-title')
var tags = document.getElementsByClassName('tags')
var voicebutton = document.getElementById('voicesearchbutton')

const speechreco = window.SpeechRecognition || window.webkitSpeechRecognition
try {

  const speech = new speechreco()
  speech.onstart = function () {
    console.log("voice search started");
  }

  speech.onresult = function (event) {
    const current = event.resultIndex
    const transscript = event.results[current][0].transcript
    searchbox.value = transscript
    searchbox.focus()
    allow_only(transscript)
  }

  voicebutton.addEventListener('click', () => {
    speech.start()
  })
} catch (e) {
  var micnot = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-mic-mute-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963L11 7.879zM5 6.12l4.486 4.486A3 3 0 0 1 5 8V6.121zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z"/></svg>'
  voicebutton.innerHTML = micnot
  voicebutton.disabled = true
}
// function logging(logger) {
//     console.old = console.log;
//     console.log = function () {
//         var output = "", arg, i;
//
//         for (i = 0; i < arguments.length; i++) {
//             arg = arguments[i];
//             output += "<span class=\"log-" + (typeof arg) + "\">";
//
//             if (
//                 typeof arg === "object" &&
//                 typeof JSON === "object" &&
//                 typeof JSON.stringify === "function"
//             ) {
//                 output += JSON.stringify(arg);
//             } else {
//                 output += arg;
//             }
//
//             output += "</span>&nbsp;";
//         }
//
//         logger.innerHTML += output + "<br>";
//         console.old.apply(undefined, arguments);
//     };
// }
// logging(document.getElementById('logger'))
//
// console.log("testing");



var tagger = [];
for (var i = 0; i < courses.length; i++) {
  var title = courses[i].innerText
  tagger[i] = { title: title, tags: tags[i].innerText, elem: maincards[i]}
}

searchbox.focus()
$('#searchbox').on('change', function (e) {
  allow_only(e.target.value)
})
$('#searchbox').on('keypress', function (e) {
  allow_only(e.target.value)
})
function keyuped(e) {
  allow_only(e.value)
}
function searchbuttonclicked(){
  allow_only(searchbox.values)
}
function allow_only(e) {
  console.log(e);
  var cntr = 1
  tagger.forEach((course, i) => {
    if(course.title.toLowerCase().includes(e.toLowerCase())){
      course.elem.style = "display: block; z-index: 1"

    }
    else if(course.tags.toLowerCase().includes(e.toLowerCase())){
      course.elem.style = "display: block; z-index: 1"

    }
    else{
      course.elem.style = "display: none; z-index: -1;"
    }
  });

}
