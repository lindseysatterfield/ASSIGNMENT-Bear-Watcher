import cardCreator from '../../components/cardCreator';

const userBears = [];

const getBearFormData = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#bearImage').value;
  const bearWeight = Math.floor(Math.random() * 800 + 400);
  const bearFacts = [
    'Bears have excellent senses of smell, sight and hearing',
    'Bears live as long as 30 years in the wild',
    'A bear’s normal heartbeat is 40 beats per minute',
    'Unlike many mammals, bears can see in color',
    'Bears have been known to eat almost anything, including snowmobile seats, engine oil, and rubber boots',
    'Bears can see almost as well as humans, and they can hear a little better',
    'Most bears are born without fur',
    'Bears have non-retractable claws like dogs and unlike cats',
    'Bears are the only large predators that regularly eat both meat and plants',
    'During hibernation, a bear does not defecate',
    'Bears can run up to 40 miles per hour, fast enough to catch a running horse',
    'Bears have two layers of fur',
  ];
  const randomFact = bearFacts[Math.floor(Math.random() * bearFacts.length)];

  const bearCardsObject = {
    name,
    imageUrl,
    bearWeight,
    randomFact,
  };
  userBears.push(bearCardsObject);
  cardCreator(userBears);
  console.warn(userBears);
  document.querySelector('#form').reset();
};

export default getBearFormData;
