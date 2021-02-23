import getBearFormData from './river';

const domEvents = () => {
  document.querySelector('#bear-btn').addEventListener('click', getBearFormData);
};

export default domEvents;
