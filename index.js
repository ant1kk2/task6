const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  const numbers = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
  ];

  let sumOfPositiveElements = 0;
  let countOfPositiveElements = 0;
  let maxValue = numbers[0];
  let maxValueIndex = 0;
  let countOfNegativeElements = 0;
  let countOfOddElements = 0;
  let countOfEvenElements = 0;
  let sumOfEvenElements = 0;
  let sumOfOddElements = 0;
  let mulOfPositiveElements = 1;

  for (const num of numbers) {
    if (num > 0) {
      sumOfPositiveElements += num;
      mulOfPositiveElements *= num;
      countOfPositiveElements++;
    }
    if (num < 0) {
      countOfNegativeElements++;
    }
    if (num % 2 !== 0) {
      countOfOddElements++;
      sumOfOddElements += num;
    }
    if (num % 2 === 0) {
      countOfEvenElements++;
      sumOfEvenElements += num;
    }
    if (maxValue < num) {
      maxValue = num;
      maxValueIndex = numbers.indexOf(num);
    }
  }

  alert(`Для массиву [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
Сумма позитивних елементів - ${sumOfPositiveElements}
Кількість позитивних елементів - ${countOfPositiveElements}
Максимальний елемент - ${maxValue}
Порядковий номер максимального елемента - ${maxValueIndex + 1}
Кількість негативних елементів - ${countOfNegativeElements}
Кількість непарних позитивних елементів = ${countOfOddElements}
Кількість парних позитивних елементів = ${countOfEvenElements}
Сума парних позитивних елементів = ${sumOfEvenElements}
Сума непарних позитивних елементів = ${sumOfOddElements}
Добуток позитивних елементів = ${mulOfPositiveElements}
`);
});
