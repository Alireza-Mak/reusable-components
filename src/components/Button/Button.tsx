import classNames from 'classnames';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  className,
  ...rest
}): JSX.Element => {
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger);
  if (count >1) {
    throw new Error(
      'Only one of primary, secondary, success, warning, dander can be true.'
    );
  }
  const classes = classNames(
    'px-3 py-1.5 border capitalize text-sm',
    className,
    {
      'bg-blue-500 hover:bg-white hover:text-blue-500 border-blue-500 text-white':
        primary,
      'bg-gray-900 hover:bg-white hover:text-gray-900 border-gray-900 text-white':
        secondary,
      'bg-green-500 border-green-500 hover:bg-white hover:text-green-500 text-white':
        success,
      'bg-yellow-400 border-yellow-400 hover:bg-white hover:text-yellow-400 text-white':
        warning,
      'bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white':
        danger,
      'rounded-full': rounded,
      '!bg-white': outline,
      '!text-blue-500 hover:!bg-blue-500 hover:!text-white': outline && primary,
      '!text-gray-900 hover:!bg-gray-900 hover:!text-white':
        outline && secondary,
      '!text-green-500 hover:!bg-green-500 hover:!text-white':
        outline && success,
      '!text-yellow-400 hover:!bg-yellow-400 hover:!text-white':
        outline && warning,
      '!text-red-500 hover:!bg-red-500 hover:!text-white': outline && danger,
    }
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
