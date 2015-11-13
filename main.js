var questionsArr = [
  ["Have you ever sharded a database?", "back", "Back-end"],
  ["Do you identify as a designer?", "des", "Designer"],
  ["Do you identify as a developer?", "sen", "Senior"]
  ["Do you look at Sidebar everyday?", "des", "Designer"],
  ["Have you ever submitted a pull request?", "dev", "Developer"],
  ["Is there anything wrong with this?<br><code>&lt;IMG SRC=\"hello.png\"></code>", "dev", "Developer"],
  ["Do you know the difference between <code>call()</code> and <code>apply()</code>?", "front", "Front-end"],
  ["Are you a core contributer on any open source projects?", "sen", "Senior"],
  ["Have you ever managed more than 3 team members?", "sen", "Senior"],
  ["Do you know what <code>===</code> means?", "gen", "Generalist"],
  ["Are you proud of your dotfiles?", "sen", "Senior"],
  ["Do you know the difference between a font and a typeface?", "des", "Designer"],
  ["Do you regularly update a blog?", "sen", "Senior"]
];

function $(el) {
  return document.querySelectorAll(el);
}

var App = {
  el: {
    answers: $("#answers"),
    choice: $("input[name='answer']"),
    result: $("#result"),
    question: $("#question")
  },

  updateForm: function(id) {
    App.el.question[0].innerHTML = questionsArr[i][0];
    var el = $(id),
        width = el[0].offsetWidth,
        right = el[0].style.right,
        oldWidth = parseInt(width, 10),
        oldRight = parseInt(right, 10);

    if($('#answerL')[0].checked) {
      var newWidth = oldWidth + 20 + 'px';
      var newRight = oldRight + 20 + 'px';
    } else {
      var newWidth = oldWidth - 20 + 'px';
      var newRight = oldRight - 20 + 'px';
    }
    
    el[0].style.right = newRight;    
    el[0].style.width = newWidth;
    
  },
    
  bindUIActions: function() {
    App.el.answers[0].addEventListener("click", function() {
      App.goToNext();
      App.updateForm("#"+questionsArr[i][1]);
      
      if( questionsArr[i][1] == "dev" ) {
        $("#devResult")[0].innerHTML = "Developer ";        
      } else if( questionsArr[i][1] == "des" ) {
        $("#devResult")[0].innerHTML = "Designer ";        
      }
      
      if( questionsArr[i][1] == "gen" ) {
        $("#genResult")[0].innerHTML = "Generalist ";
      } else if( questionsArr[i][1] == "spec" ) {
        $("#genResult")[0].innerHTML = "Specialist ";
      }
      
      if( questionsArr[i][1] == "sen" ) {
        $("#payResult")[0].innerHTML = "Senior ";
      } else if( questionsArr[i][1] == "jun" ) {
        $("#payResult")[0].innerHTML = "Junior ";
      }
      
      if( questionsArr[i][1] == "front" ) {
        $("#sideResult")[0].innerHTML = "Front-end ";
      } else if( questionsArr[i][1] == "back" ) {
        $("#sideResult")[0].innerHTML = "Back-end ";
      }
      
    });
  },

  goToNext: function() {
    // Attempting to get the current index then increment by 1
/*    var index = questionsArr.indexOf(App.el.question[0].innerText);
    i = index;*/
    i = Math.floor((Math.random() * questionsArr.length) + 1);
    return questionsArr[i];
  },

  init: function() {
    this.bindUIActions(App.el.answers[0]);
  },
  
  updateTitle: function() {

  }
}

App.init();