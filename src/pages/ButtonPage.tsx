import Button from '../components/Button/Button';
interface StylesType {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
}
const buttonStyles: StylesType[] = [
  { label: 'default' },
  { label: 'primary', primary: true },
  { label: 'secondary', secondary: true },
  { label: 'success', success: true },
  { label: 'warning', warning: true },
  { label: 'danger', danger: true },
];
const ButtonPage = () => {
  const renderButtons = (styles: StylesType[], heading: string) => (
    <>
      <div className="pb-4 mb-4 col-span-3 sm:col-span-6 text-center text-lg font-medium uppercase border-b-2 border-gray-200">
        {heading}
      </div>
      {styles.map((style: StylesType) => (
        <Button key={style.label} {...style}>
          {style.label}
        </Button>
      ))}
    </>
  );

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
      {renderButtons(buttonStyles, 'regular')}
      {renderButtons(
        buttonStyles.map((style) => ({ ...style, outline: true })),
        'outline'
      )}
      {renderButtons(
        buttonStyles.map((style) => ({ ...style, rounded: true })),
        'rounded'
      )}
      {renderButtons(
        buttonStyles.map((style) => ({
          ...style,
          outline: true,
          rounded: true,
        })),
        'outline and rounded'
      )}
      {renderButtons(
        buttonStyles.map((style) => ({ ...style, onClick: () => {alert(`You Clicked on ${style.label.toUpperCase()} button!` )} })),
        'event listener'
      )}
    </div>
  );
};

export default ButtonPage;
