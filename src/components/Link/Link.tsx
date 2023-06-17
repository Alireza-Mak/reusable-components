import React from 'react';
import classNames from 'classnames';
import useNavigationContext from '../../hooks/use-navigation-context';
interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  activeClassName?: string;
}
const Link: React.FC<LinkProps> = ({
  children,
  to,
  className,
  activeClassName,
}) => {
  const { navigateTo, currentPath } = useNavigationContext();
  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigateTo(to);
  };
  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
