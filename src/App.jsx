import AppLayout from './layout/AppLayout';
import './App.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageViews = () => {

  let location = useLocation()
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)
    ReactGA.set({ path: location.pathname })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [location]);
}

function App() {
  usePageViews()
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export default App;
