import printToDom from '../helpers/printToDom';

const cardCreator = (array) => {
  let domString = '';
  array.forEach((bear, i) => {
    domString += `
      <div class="card m-3" style="width: 18rem; id="${i}">
      <img src="${bear.imageUrl}" class="card-img-top" alt="image of bear">
      <div class="card-body text-center" style="height: 25px; flex: 0 1 auto; margin: 1em auto; padding: 0;>
        <h5 class="card-title text-center" style="margin: 0; padding: 0;">${bear.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${bear.bearWeight} lbs</li>
        <li class="list-group-item">${bear.randomFact}</li>
      </ul>
    </div>`;
  });
  printToDom('#bear-container', domString);
};

export default cardCreator;
