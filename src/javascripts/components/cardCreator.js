const cardCreator = (array) => {
  array.forEach((bear) => {
    document.querySelector('#bear-container').innerHTML += `
      <div class="card" style="width: 18rem; id="${bear.bearId}">
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
};

export default cardCreator;
