// Dom elements
var searchbox = document.getElementById('searchbox')
var maincards = document.getElementsByClassName('course')
var courses = document.getElementsByClassName('course-title')
var tags = document.getElementsByClassName('tags')
var tagger = [];
for (var i = 0; i < courses.length; i++) {
  var title = courses[i].innerText
  tagger[i] = { title: title, tags: tags[i].innerText, elem: maincards[i]}
}
console.log(tagger);
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
