import getBearForm from './bearData';

const domEvents = () => {
  document.querySelector('#bear-btn').addEventListener('click', getBearForm);
};

export default domEvents;
