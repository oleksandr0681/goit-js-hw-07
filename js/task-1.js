const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);

for (const category of categories) {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const elements = category.querySelectorAll('ul li');
  console.log('Elements:', elements.length);
}
