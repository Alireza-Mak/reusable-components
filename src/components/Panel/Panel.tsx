import classNames from 'classnames';

interface PanelProps extends React.HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}
const Panel: React.FC<PanelProps> = ({ children, className, ...rest }) => {
  const classes = classNames(
    className,
    'min-[1280px]:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20'
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
