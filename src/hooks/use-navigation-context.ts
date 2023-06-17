import { useContext } from 'react';
import { NavigationContext, NavigationStore } from '../context/navigation';
export default function useNavigationContext(): NavigationStore {
  const navigationContext = useContext(NavigationContext);
  if (!navigationContext) {
    throw new Error(
      'useNavigationContext must be used within a BooksContextProvider'
    );
  }
  return navigationContext;
}
