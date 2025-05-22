// 1.Ecrire un programme fonctionnel qui prend une liste puis renvoie un autre liste selon la logique
const numbers = [1, 7, 10, 9, 8 , 2];
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);
// 2. Ecrire un programme fonctionnel qui prend une liste puis renvoie un autre liste selon la logiqueconst numbers = [1, 3, 4];
const numbers = [1, 3, 4];
const result = numbers.reduce((acc, val) => {
  const last = acc.length > 0 ? acc[acc.length - 1] : 1;
  acc.push(last * val);
  return acc;
}, []);
console.log(result);
// 3. Ecrire un programme fonctionnel qui divise le texte en lignes, convertit chaque ligne en majuscules,filtre les lignes contenant la lettre "I", puis les imprime.
const text = `bonjour
informations
salut
important`;

text.split('\n')                             
    .map(line => line.toUpperCase())        
    .filter(line => line.includes("I"))     
    .forEach(line => console.log(line));    

// 4. A partir d'une liste de nombres, trouver le nombre maximum dans cette liste.
const numbers = [1, 7, 10, 9, 8];
const max = Math.max(...numbers);
console.log(max); 

// 5. Calculer le prix total TTC (TVA 25%) d’une liste de produits
const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
  
  const totalTTC = products
    .map(p => p.price * 1.25)
    .reduce((total, priceTTC) => total + priceTTC, 0);
  
  console.log(totalTTC); 
  
  