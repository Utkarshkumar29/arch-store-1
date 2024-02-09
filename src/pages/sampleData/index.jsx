// src/SampleData.js

const generateRandomData = (count) => {
    const data = [];
    const categories = ['A', 'B', 'C','D', 'E'];
  
    for (let i = 0; i < count; i++) {
      const date = new Date(2022, 0, 1 + Math.floor(Math.random() * 365));
      const category = categories[Math.floor(Math.random() * categories.length)];
      const value = Math.floor(Math.random() * 100) + 1;
  
      data.push({
        date: date.toISOString().split('T')[0],
        category,
        value,
      });
    }
  
    return data;
  };
  
  const sampleData = generateRandomData(1000); // Change the count as needed
  
  export default sampleData;
  