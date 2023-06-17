import './index.css';
import reactDOM from 'react-dom/client';
import App from './App';
import NavigationProvider from './context/navigation';

const element = document.getElementById('root') as HTMLDivElement;
const root = reactDOM.createRoot(element);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
