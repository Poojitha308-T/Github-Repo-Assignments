function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function countAndSortCategories(categories) {
    const counts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    },{});

    const sorted = Object.entries(counts)
     .sort((a, b) => b[1] -a[1])
     .map(entry => entry[0]);

    return sorted;
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
console.log(countAndSortCategories(input));