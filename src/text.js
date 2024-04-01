export const obj = {
  a: [1, 2, 3],
  b: [4, 5, 6],
  c: [7, 8, 9],
};

// Fisher-Yates 알고리즘을 사용하여 객체 안의 배열을 무작위로 섞습니다.
for (let key in obj) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    const array = obj[key];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

console.log(obj);
