// Завдання 1
console.log("Завдання 1");

// В HTML є список категорій ul#categories:
// * Тварини;
// * Продукти;
// * Технології.
// Напиши скрипт, який виконає наступні операції:
// * Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item. Вийде 'У списку 3 категорії.';
// * Для кожного елемента li.item в списку ul#categories,
// знайде і виведе в консоль текст заголовка елемента (тега h2)
// і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

const categoriesRef = document.querySelectorAll("#categories > li.item");
console.log(`У списку ${categoriesRef.length} категорії.`);

categoriesRef.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul > li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});



// Завдання 2
console.log("Завдання 2");

// В HTML є пустий список ul#ingredients.
// В JS є масив рядків ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsRef = document.querySelector("#ingredients");

const createLi = (item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  return itemEl;
};

const items = ingredients.map(createLi);

ingredientsRef.append(...items);



// Завдання 3
console.log("Завдання 3");

// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// Використовуй масив об'єктів images для створення тегів img вкладених в li.
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.querySelector("#gallery");
listRef.style.listStyle = "none";

images.forEach(({ url, alt }) => {
  listRef.insertAdjacentHTML(
    "beforeend",
    `<li>
        <img src="${url}" alt="${alt}" style="width: 500px; border-radius: 10%; border: solid 5px black;"></img>
    </li>`
  );
});
