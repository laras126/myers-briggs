export function createScoresObject(ques) {
  let Scores = {};

  ques.forEach( qdata => {
    if( !Scores.hasOwnProperty(qdata.type) ) {
      Scores[qdata.type] = 0;

      // Add to UI
      let div = document.getElementById('bar-template'),
          clone = div.cloneNode(true);

      clone.removeAttribute('id');
      clone.children[0].innerHTML = qdata.type;
      clone.children[1].innerHTML = Scores[qdata.type];
      clone.children[1].id = qdata.type + 'Value';

      document.querySelector('#js-bar-container').appendChild(clone);
    }
  });

  return Scores;
}
