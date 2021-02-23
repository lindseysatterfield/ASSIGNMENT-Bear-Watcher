const initialScreen = () => {
  document.querySelector('body').innerHTML = `
  <div id="main-container">
  <h1 class="mb-4">Bear Watcher</h1>
  <div id="form-container"></div>
  <h2>Bears</h2>
  <div id="bear-container" class="d-flex"></div>
  </div>`;
};

export default initialScreen;
