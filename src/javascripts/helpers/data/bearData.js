const userBears = [];

const getBearForm = (e) => {
  e.preventDefault();
  const name = document.querySelector('#bearName').value;
  const image = document.querySelector('#bearImage').value;
  const bearCardsObject = {
    name,
    image,
  };
  userBears.push(bearCardsObject);
  console.warn(bearCardsObject);
  document.querySelector('form').reset();
};

export default getBearForm;
