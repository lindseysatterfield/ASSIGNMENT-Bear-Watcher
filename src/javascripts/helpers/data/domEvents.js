import getBearFormData from './bearData';

const domEvents = () => {
  document.querySelector('#bear-btn').addEventListener('click', getBearFormData);
};

export default domEvents;
