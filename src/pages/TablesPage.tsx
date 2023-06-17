import { FaCarSide, FaMotorcycle, FaTruck } from 'react-icons/fa';
import { RiShip2Fill } from 'react-icons/ri';
import SortableTable from '../components/Tables/SortableTable';
import UnsortableTable from '../components/Tables/UnsortableTable';
//***  YOU NEED TO CHANGE THIS AREA FOR CUSTOMIZE****
// Define an Array of table's data and its Type
export interface TableItemsType {
  Name: string;
  Color: string;
  Price: number;
  Discount: number;
  Image: JSX.Element;
}
const tableData: TableDataType = [
  {
    Name: 'Truck',
    Color: 'bg-orange-500',
    Price: 15000,
    Discount: 0.2,
    Image: <FaTruck className="text-lg inline-block" />,
  },
  {
    Name: 'Car',
    Color: 'bg-red-500',
    Price: 7000,
    Discount: 0.05,
    Image: <FaCarSide className="text-lg inline-block" />,
  },
  {
    Name: 'Boat',
    Color: 'bg-yellow-500',
    Price: 37000,
    Discount: 0.21,
    Image: <RiShip2Fill className="text-lg inline-block" />,
  },
  {
    Name: 'Motorcycle',
    Color: 'bg-green-500',
    Price: 4000,
    Discount: 0.03,
    Image: <FaMotorcycle className="text-lg inline-block" />,
  },
];

// Base on key you can define your condition
const condition = (key: string, tableItem: TableItemsType, index: number) => {
  const value = Object.values(tableItem)[index];
  switch (key) {
    case 'Discount':
      return +tableItem.Price * +tableItem.Discount;
    case 'Color':
      return (
        <div className={`w-2.5 h-2.5 sm:w-5 sm:h-5 inline-block ${value}`} />
      );
    default:
      return value;
  }
};

// Descide to add sorting option to our table's columns
const Sortabletable: SortOption = ['Name', 'Price'];
//***  YOU NEED TO CHANGE THIS AREA FOR CUSTOMIZE****





// ********************************************
//***  YOU DO NOT NEED TO CHANGE THIS AREA ****
// ********************************************
type SortOption = string[];
export type TableDataType = TableItemsType[];
export interface ConfigItemsType {
  label: string;
  render: (tableItem: TableItemsType) => string | number | JSX.Element;
  addSortToHeader: () => React.ReactNode | null;
}
export type ConfigType = ConfigItemsType[];

const TablesPage = () => {
  const config = (keysforSort?: SortOption): ConfigType => {
    const tableKeys = Object.keys(tableData[0]);
    return tableKeys.map((key: string, index: number) => {
      return {
        label: key,
        render: (tableItem: TableItemsType) => condition(key, tableItem, index),
        addSortToHeader: () => {
          if (keysforSort && keysforSort.includes(key)) {
            return key;
          }
          return null;
        },
      };
    });
  };
  const config1 = config();
  const config2 = config(Sortabletable);
  return (
    <div className="flex flex-wrap">
      <div className="mr-2 flex-1">
        <h1 className="text-center text-lg font-bold mb-3">Unsortable Table</h1>
        <UnsortableTable tableData={tableData} config={config1} />
      </div>
      <div className="ml-2 flex-1">
        <h1 className="text-center text-lg font-bold mb-3">Sortable Table</h1>
        <SortableTable tableData={tableData} config={config2} />
      </div>
    </div>
  );
};

export default TablesPage;


