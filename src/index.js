import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Topbar from "./components/Topbar";
import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import OurTeam from "./components/OurTeam";
import Contacts from "./components/Contacts";
import MainFooter from "./components/MainFooter";
import clientCarousel from "./client-carousel";
import hamburger from "./hamburger";
import imageZoom from "./image-zoom";

/* === TOPBAR === */
const contactInfo = {
  email: "gustavo@gmail.com",
  phoneNumber: "+55 (21)4002-8922",
  address: "Rio de Janeiro-RJ, Brasil",
  links: {
    twitter: "https://www.twitter.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

/* === ABOUT === */
const aboutTopics = [
  "Estamos há mais de 7 anos no mercado de tecnologia, que conta com 3 escritórios espalhados pelo Rio de Janeiro.",
  "Trabalhamos com as tecnologias mais modernas do mercado, para atender às diversas necessidades dos clientes.",
  "Começamos como uma pequena agência de 3 programadores, e dessa época em diante, tivemos vários desafios que nos fizeram crescer e nos desenvolver como profissionais da área de fabricação de software.",
];

/* === SERVICES === */
const ServicesContent = [
  {
    title: "Aplicativo",
    content:
      "Desenvolvemos a versão Android e IOS do seu app e disponibilizamos na Play Store e na App Store.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Websites",
    content:
      "Seu site será encontrado na internet e irá atrair potenciais compradores e investidores.",
    icon: "far fa-file-word",
  },
  {
    title: "Desktop",
    content:
      "Uma solução para ser instalada e utilizada diretamente no computador, sem a necessidade de ter internet.",
    icon: "fas fa-desktop",
  },
  {
    title: "Consultoria",
    content:
      "Se você já tem um app e não sabe o que fazer, nós elaboramos a melhor estratégia para seu negócio.",
    icon: "far fa-smile",
  },
];

/* === PORTFOLIO === */
const productContent = [
  {
    image: "./img/image-01.png",
    title: "Finished Task",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-02.png",
    title: "Cutter Pro",
    type: "Desktop",
    link: "#",
  },
  {
    image: "./img/image-03.png",
    title: "Slide Pointer",
    type: "Desktop",
    link: "#",
  },
  {
    image: "./img/image-04.png",
    title: "Buscadores",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-05.png",
    title: "VanArsdel",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-06.jpg",
    title: "Android Here",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-07.jpg",
    title: "Earthquake",
    type: "App",
    link: "#",
  },
  {
    image: "./img/image-08.jpg",
    title: "Ben Kolde",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-09.jpg",
    title: "Easy Weather",
    type: "App",
    link: "#",
  },
];

/* === TESTIMONIALS === */
const testimonialInfo = [
  {
    quote:
      "Tive muita sorte de encontrar a AppMaster, eu estava buscando uma empresa de confiança que faria o serviço bem feito e por sorte, encontrei eles. Obrigado a todos pelo ótimo e excelente trabalho.",
    avatar: "./img/avatar-01.jpg",
    name: "Lucas Marques",
    prof: "Designer Gráfico",
  },
  {
    quote:
      "Meu sonho desde que me formei era montar a minha própria empresa, e com a AppMaster isso foi possível, graças ao ecommerce que eles desenvolveram exclusivamente para mim e minha equipe.",
    avatar: "./img/avatar-02.jpg",
    name: "Luna Marrer",
    prof: "Empresária",
  },
  {
    quote:
      "Sem a AppMaste minha empresa não teria sobrevivido. Eu estava quase falindo e através da consultoria e melhorias feitas no meu website tudo foi de mau a muito melhor. Eles são os melhores.",
    avatar: "./img/avatar-03.jpg",
    name: "Gabriel Sales",
    prof: "Empresário",
  },
];

/* === OUR-TEAM === */
const teamInfos = [
  {
    image: "./img/avatar-05.jpg",
    title: "Carlos Vargas",
    type: "CEO",
    links: {
      twitter: "https://www.twitter.com/carlos",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: "./img/avatar-04.jpg",
    title: "Mia Sarile",
    type: "CTO",
    links: {
      twitter: "https://www.twitter.com/mia",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: "./img/avatar-06.jpg",
    title: "Rafaela Gomes",
    type: "Gerente de Projetos",
    links: {
      twitter: "https://www.twitter.com/rafaela",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: "./img/avatar-07.jpg",
    title: "Igor Rodrigues",
    type: "Gerente de Marketing",
    links: {
      twitter: "https://www.twitter.com/igor",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

const App = () => (
  <div className="app">
    <Topbar contactInfo={contactInfo} />
    <MainHeader links={contactInfo.links} />
    <Hero />
    <About aboutTopics={aboutTopics} />
    <Services ServicesContent={ServicesContent} />
    <Clients />
    <Portfolio productContent={productContent} />
    <Testimonials testimonialInfo={testimonialInfo} />
    <Cta />
    <OurTeam teamInfos={teamInfos} links={contactInfo.links} />
    <Contacts contactInfo={contactInfo} />
    <MainFooter />
  </div>
);

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);

clientCarousel();
hamburger();
imageZoom();
