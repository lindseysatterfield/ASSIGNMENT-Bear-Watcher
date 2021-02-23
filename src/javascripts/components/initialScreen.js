const initialScreen = () => {
  document.querySelector('body').innerHTML = `
  <div id="main-container">
  <h1 class="mb-4 text-light">Bear Watcher</h1>
  <h4 class="mb-5 text-light">Enter a bear name and image url to see fun bear facts</h4>
  <div id="form-container"></div>
  <h2 class="mt-5 mb-5 text-light">Welcome to Bear River!</h2>
  <div id="bear-container" class="d-flex flex-wrap justify-content-center align-content-start"></div>
  </div>`;
};

export default initialScreen;
