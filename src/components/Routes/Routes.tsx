import AccordionPage from '../../pages/AccordionPage';
import ButtonPage from '../../pages/ButtonPage';
import CounterPage from '../../pages/CounterPage';
import DropdownPage from '../../pages/DropdownPage';
import ModalPage from '../../pages/ModalPage';
import TablesPage from '../../pages/TablesPage';

// import UnsortableTablePage from '../../pages/UnsortableTablePage';
import Panel from '../Panel/Panel';
import Route from './Route';

export type RoutesType = {
  pathname: string;
  name: string;
  element: React.ReactNode;
};
export const url = '/reusable-components';

export const routes: RoutesType[] = [
  { pathname: `${url}/`, name: 'Button', element: <ButtonPage /> },
  { pathname: `${url}/modal`, name: 'Modal', element: <ModalPage /> },
  { pathname: `${url}/tables`, name: 'Tables', element: <TablesPage /> },
  { pathname: `${url}/dropdown`, name: 'Dropdown', element: <DropdownPage /> },
  {pathname: `${url}/accordion`, name: 'Accordion', element: <AccordionPage />,},
  { pathname: `${url}/counter`, name: 'Counter', element: <CounterPage /> },
];


export const Routes = () => {
  const renderRoutes = routes.map((route: RoutesType) => {

    return (
    <Route
      key={route.name}
      pathname={route.pathname}
      element={route.element}
    />
  )});
  return <Panel>{renderRoutes}</Panel>;
};

export default Routes;
