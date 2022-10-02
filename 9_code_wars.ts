// суть задачи продублировать каждый символ строки
const doubleChar = (value: string): string => {
  const result = value
    .split("")
    .map((i) => i.repeat(2))
    .join("");
  return result;
};
//***************************/

// суть задачи вернуть общее растояние в сантиметрах исключив ширину первого и последнего столбика
const pillars = (num_pil: number, dist: number, width: number): number => {
  let result = 0;
  if (num_pil > 1) {
    const distanceInCentimetrs = (num_pil * dist - dist) * 100;
    const widthAllPil = width * num_pil - width * 2;
    result = distanceInCentimetrs + widthAllPil;
  }
  return result;
};

//*****************************/

// суть задачи принять 10000000.0000001 число и вернуть строку '10,00,00,00.000,000,1'

const formatToString = (num: string): string => {
  const middle = num.toString().split(".");
  const leftSide = middle[0].match(/.{1,2}/g).join(",");
  const rigtSide = middle[1].match(/.{1,3}/g).join(",");
  const result = `${leftSide}.${rigtSide}`;
  return result;
};
