import { Box, Flex } from '@chakra-ui/react';
import _ from 'lodash';
import React, { useState } from 'react';

import Cell from 'components/Cell';
import { getNewLocation } from '../util';

const NUM_ROWS = 10;
const NUM_COLUMNS = 10;

const Spreadsheet: React.FC = () => {
  const [cellState, setCellState] = useState(
    _.times(NUM_ROWS, () => _.times(NUM_COLUMNS, _.constant(''))),
  );

  /**
   * @todo the UI of the header row is shifted funny
   *
   * @todo onMove handler should be taken out of this component into a util
   */
  return (
    <Box width="full">
      {cellState.map((row, rowIdx) => {
        return (
          <Flex key={String(rowIdx)}>
            {row.map((cellValue, columnIdx) => {
              const isFirstRow = rowIdx === 0;
              const isFirstColumn = columnIdx === 0;
              const isHeaderCell = isFirstRow || isFirstColumn;

              const type = isHeaderCell ? 'header' : 'data';
              return (
                <Cell
                  key={`${rowIdx}/${columnIdx}`}
                  value={cellValue}
                  type={type}
                  onChange={(newValue: string) => {
                    const newRow = [
                      ...cellState[rowIdx].slice(0, columnIdx),
                      newValue,
                      ...cellState[rowIdx].slice(columnIdx + 1),
                    ];
                    setCellState([
                      ...cellState.slice(0, rowIdx),
                      newRow,
                      ...cellState.slice(rowIdx + 1),
                    ]);
                  }}
                  onMove={(direction: string) => {
                    const [newRowIdx, newColumnIdx] = getNewLocation(direction, rowIdx, columnIdx);
                    console.log(
                      `moving [${rowIdx}][${columnIdx}] to ${direction}, at [${newRowIdx}][${newColumnIdx}]`,
                    );

                    const isVerticalMovement = newRowIdx !== rowIdx;
                    if (isVerticalMovement) {
                      const newDestinationRow = [
                        ...cellState[newRowIdx].slice(0, columnIdx),
                        cellValue,
                        ...cellState[newRowIdx].slice(columnIdx + 1),
                      ];

                      const newSourceRow = [
                        ...cellState[rowIdx].slice(0, columnIdx),
                        '',
                        ...cellState[rowIdx].slice(columnIdx + 1),
                      ];

                      // determine order of row insertion
                      const newRows =
                        newRowIdx < rowIdx
                          ? [newDestinationRow, newSourceRow]
                          : [newSourceRow, newDestinationRow];

                      // now, here, we find the new start insertion row index
                      const startInsertionIdx = newRowIdx < rowIdx ? newRowIdx : rowIdx;
                      setCellState([
                        ...cellState.slice(0, startInsertionIdx),
                        ...newRows,
                        ...cellState.slice(startInsertionIdx + 2),
                      ]);
                    } else {
                      // we have a lateral movement
                      const startInsertionIdx = newColumnIdx < columnIdx ? newColumnIdx : columnIdx;
                      const newColumns =
                        newColumnIdx < columnIdx ? [cellValue, ''] : ['', cellValue];

                      const newRow = [
                        ...cellState[rowIdx].slice(0, startInsertionIdx),
                        ...newColumns,
                        ...cellState[rowIdx].slice(startInsertionIdx + 2),
                      ];
                      setCellState([
                        ...cellState.slice(0, rowIdx),
                        newRow,
                        ...cellState.slice(rowIdx + 1),
                      ]);
                    }
                  }}
                />
              );
            })}
          </Flex>
        );
      })}
    </Box>
  );
};

export default Spreadsheet;
