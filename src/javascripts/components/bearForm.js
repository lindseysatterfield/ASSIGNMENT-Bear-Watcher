import printToDom from '../helpers/printToDom';

const bearForm = () => {
  let domString = '';
  domString += `<form id="form">
    <div class="form-group row col-auto justify-content-center">
      <label for="bearName" class="col-sm-2 col-form-label">Bear Name</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="bearName" required/>
      </div>
    </div>
    <div class="form-group row col-auto justify-content-center">
      <label for="bearImage" class="col-sm-2 col-form-label">Bear Image URL</label>
      <div class="col-sm-4">
        <input type="url" class="form-control" id="bearImage" required/>
      </div>
    </div>
    <div class="form-group row justify-content-center">
      <div class="col-sm-6">
        <button type="submit" id="bear-btn" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>`;

  printToDom('#form-container', domString);
};

export default bearForm;
