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
export const routes: RoutesType[] = [
  { pathname: "/", name: 'Button', element: <ButtonPage /> },
  { pathname: "/modal", name: 'Modal', element: <ModalPage /> },
  { pathname:"/tables", name: 'Tables', element: <TablesPage /> },
  { pathname: "/dropdown", name: 'Dropdown', element: <DropdownPage /> },
  {pathname: "/accordion", name: 'Accordion', element: <AccordionPage />,},
  { pathname: "/counter", name: 'Counter', element: <CounterPage /> },
];


const Routes = () => {
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
