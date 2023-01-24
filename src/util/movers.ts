export const getNewLocation = (direction: string, rowIdx: number, columnIdx: number) => {
  switch (direction) {
    case 'ArrowDown':
      return [rowIdx + 1, columnIdx];
    case 'ArrowRight':
      return [rowIdx, columnIdx + 1];
    case 'ArrowUp':
      return [rowIdx > 0 ? rowIdx - 1 : 0, columnIdx];
    case 'ArrowLeft':
      return [rowIdx, columnIdx > 0 ? columnIdx - 1 : 0];
    default:
      return [rowIdx, columnIdx];
  }
};
