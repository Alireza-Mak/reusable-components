
import useSort from '../../hooks/use-sort';
import {
  ConfigItemsType,
  ConfigType,
  TableDataType,
} from '../../pages/TablesPage';
import UnsortableTable from './UnsortableTable';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

interface SortableTableProps {
  tableData: TableDataType;
  config: ConfigType;
}

const SortableTable: React.FC<SortableTableProps> = ({ tableData, config }) => {
const {setSortColumn,sortBy,sortOrder,updatedTableData} = useSort(tableData, config);

  const getIcons = (label: string) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else {
      if (sortOrder === null) {
        return (
          <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
          </div>
        );
      } else if (sortOrder === 'DESC') {
        return (
          <div>
            <GoArrowSmallUp className="invisible" />
            <GoArrowSmallDown />
          </div>
        );
      } else if (sortOrder === 'ASC') {
        return (
          <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown className="invisible" />
          </div>
        );
      } else {
        return (
          <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
          </div>
        );
      }
    }
  };
  
  const updatedConfig = config.map((column: ConfigItemsType) => {
    if (column.addSortToHeader()) {
      return {
        ...column,
        addSortToHeader: () => (
          <th
            className="cursor-pointer"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center justify-center">
              {getIcons(column.label)}
              {column.label}
            </div>
          </th>
        ),
      };
    } else {
      return { ...column };
    }
  });

  return (
    <UnsortableTable config={updatedConfig} tableData={updatedTableData} />
  );
};

export default SortableTable;

// enum SortType {
//   ASC = 'ASC',
//   DESC = 'DESC',
// }

// function sortData(data: any, sortType: SortType) {
//   function getSortValue(tableItem: any) {
//     return tableItem.Price;
//   }
//   return data.sort((a: any, b: any) => {
//     const valueA = getSortValue(a);
//     const valueB = getSortValue(b);
//     const reverse = sortType===SortType.ASC ? 1 : -1;
//     if (typeof valueA === 'string' && typeof valueB === 'string') {
//       return valueA.localeCompare(valueB) * reverse;
//     } else {
//       return (valueA - valueB) * reverse;
//     }
//   });
// }
