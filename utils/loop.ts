export const loop = <T>(length: number, target: number, callback: (i: number) => T) => {
  const adjustedTarget = target < 0 ? length - 1 : target > length - 1 ? 0 : target;
  callback(adjustedTarget);

};