import printToDom from '../helpers/printToDom';

const cardCreator = (array) => {
  let domString = '';
  array.forEach((bear, i) => {
    domString += `
      <div class="card" style="width: 18rem; id="${i}">
      <img src="${bear.imageUrl}" class="card-img-top img-container" alt="...">
      <div class="card-body">
        <h5 class="card-title">${bear.name}</h5>
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
