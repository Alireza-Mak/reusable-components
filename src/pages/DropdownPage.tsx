import Dropdown from '../components/Dropdown/Dropdown';
export interface DropdownItemsType {
  label: string;
  value: string;
  color: React.ReactNode;
}
export type DropdownDataType = DropdownItemsType[];
const dropdownData: DropdownDataType = [
  {
    label: 'Red',
    value: 'red',
    color: <div className="bg-red-600 w-5 h-5"></div>,
  },
  { label: 'Green', value: 'green',   color: <div className="bg-green-600 w-5 h-5"></div>},
  { label: 'Blue', value: 'blue',    color: <div className="bg-blue-600 w-5 h-5"></div>}
];
const DropdownPage = () => {
  return (
    <>
      <Dropdown dropdownData={dropdownData} dropdownTitle='Choose...' />
    </>
  );
};

export default DropdownPage;
