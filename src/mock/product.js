import product0 from "assets/images/product-07.jpg";
import product1 from "assets/images/product-08.jpg";
import product2 from "assets/images/product-09.jpg";

const products = [
  {
    id: "earthquake",
    title: "Earthquake",
    type: "Finanças",
    client: "Julho Garcia",
    date: "25 de setembro de 2020",
    url: "https://play.google.com/",
    link: "/produto?id=earthquake",
    images: [product0, product0, product0],
    descriptionTitle: "Pare de perder dinheiro!",
    description:
      "Fazemos transações seguras, organizamos as finanças pessoais e evitamos gastos desnecessários.",
  },
  {
    id: "ben-kolde",
    title: "Ben Kolde",
    type: "Notícias",
    client: "Ben Kolde",
    date: "03 de abril de 2021",
    url: "https://play.google.com/",
    link: "/produto?id=ben-kolde",
    images: [product1, product1, product1],
    descriptionTitle: "Saiba de todas as nossas notícias.",
    description:
      "Os nossos clientes mais assíduos recebem todas as nossas novidades, como promoções, novos produtos e etc.",
  },
  {
    id: "easy-weather",
    title: "Easy Weather",
    type: "Previsão do tempo",
    client: "Client name",
    date: "10 de junho de 2021",
    url: "https://play.google.com/",
    link: "/produto?id=easy-weather",
    images: [product2, product2, product2],
    descriptionTitle: "Nós dizemos se vai chover mesmo. ;)",
    description:
      "Saiba qual vai ser a previsão do tempo, com base na sua localização atual, para ter uma resposta totalmente precisa.",
  },
];

export default products;
