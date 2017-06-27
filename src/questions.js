
// Static questions data

export let questions = [
  {
    text: 'I can shard a database.',
    pointsFor: 'back',
  },
  {
    text: 'I regularly contribute to open source projects.',
    pointsFor: 'front',
  },
  {
    text: 'I regularly contribute to open source projects.',
    pointsFor: 'design',
  },
  {
    text: 'There is something gravely wrong with this: &lt;IMG SRC=\"\">.',
    pointsFor: 'front',
  },
  {
    text: 'I can write a regex easily.',
    pointsFor: 'back',
  },
  {
    text: 'I get excited about color schemes.',
    pointsFor: 'front',
  },
  {
    text: 'This really bothers me: &lt;IMG SRC=\"\">.',
    pointsFor: 'front',
  },
  {
    text: 'I have an opinion about spaces vs. tabs.',
    pointsFor: 'back',
  }

];

export let showQuestion = () => {
  for( let q of questions ) {
    console.log(q.text);
  }
}
