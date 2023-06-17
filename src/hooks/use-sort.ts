import { useState } from 'react';
import { ConfigType, TableDataType, TableItemsType } from '../pages/TablesPage';
type SortType = 'ASC' | 'DESC' | null;
function useSort(tableData: TableDataType, config: ConfigType) {
  const [sortOrder, setSortOrder] = useState<SortType>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const setSortColumn = (label: string) => {
    if (sortBy && sortBy !== label && sortOrder !== null) {
      setSortOrder(null);
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('DESC');
      setSortBy(label);
    } else if (sortOrder === 'DESC') {
      setSortOrder('ASC');
      setSortBy(label);
    } else if (sortOrder === 'ASC') {
      setSortOrder(null);
      setSortBy(label);
    }
  };

  let updatedTableData = tableData;
  if (sortOrder && sortBy) {
    const { render } = config.find((column) => column.label === sortBy)!;
    updatedTableData = [...tableData].sort((a: TableItemsType, b: TableItemsType) => {
      const valueA = render(a);
      const valueB = render(b);
      const reverseOrder = sortOrder === 'ASC' ? 1 : -1;
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (+valueA - +valueB) * reverseOrder;
      }
    });
  }
  return {
    setSortColumn,
    sortBy,
    sortOrder,
    updatedTableData,
  };
}

export default useSort;
