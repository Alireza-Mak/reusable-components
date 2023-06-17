import classNames from 'classnames';
interface DropdownPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  rest?: MouseEvent;
}
const DropdownPanel: React.FC<DropdownPanelProps> = ({
  children,
  className,
  ...rest
}) => {
  const finalClassNames = classNames(
    className,
    'border rounded p-3 shadow bg-white w-full'
  );
  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
};

export default DropdownPanel;
