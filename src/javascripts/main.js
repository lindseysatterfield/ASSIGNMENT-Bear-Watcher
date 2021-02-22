import '../styles/main.scss';
import initialScreen from './components/initialScreen';
import bearForm from './components/bearForm';
import domEvents from './helpers/data/domEvents';

const init = () => {
  initialScreen();
  bearForm();
  domEvents();
};

init();
