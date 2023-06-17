import useNavigationContext from "../../hooks/use-navigation-context";


interface RouteProps {
  element: React.ReactNode;
  pathname: string;
}
const Route = ({ element, pathname }: RouteProps): JSX.Element | null => {
  const { currentPath } = useNavigationContext();

  if (pathname === currentPath) {
    return <div>{element}</div>;
  } else {
    return null;
  }
};

export default Route;
