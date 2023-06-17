import { Fragment } from 'react';
import {
  TableDataType,
  TableItemsType,
  ConfigType,
  ConfigItemsType,
} from '../../pages/TablesPage';

interface UnsortableTableProps {
  tableData: TableDataType;
  config: ConfigType;
}
const UnsortableTable: React.FC<UnsortableTableProps> = ({
  tableData,
  config,
}) => {
 const renderedColumns = config.map((column: ConfigItemsType) => {
  if (column.addSortToHeader()) {
   return <Fragment key={column.label}>{column.addSortToHeader()}</Fragment>;
  } else {
   
   return (
     <th className="p-1 sm:p-3 border" key={column.label}>
       {column.label}
     </th>
   );
   }
  });

  const renderedRows = tableData.map(
    (tableItem: TableItemsType, index: number) => {
      const renderedCell = config.map((configItem: ConfigItemsType) => (
        <td key={configItem.label} className="border p-1 sm:p-3">
          {configItem.render(tableItem)}
        </td>
      ));
      return (
        <tr key={index} className="text-center">
          {renderedCell}
        </tr>
      );
    }
  );
  return (
    <table className="table-auto w-full text-xs sm:text-lg rounded-lg overflow-hidden">
      <thead className="text-white bg-gradient-to-r from-[#54277A] to-[#7D1D21]">
        <tr>{renderedColumns}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default UnsortableTable;
