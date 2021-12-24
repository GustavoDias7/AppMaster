import React from "react";
import Slider from "react-slick";
import Avatar1 from "../assets/images/avatar-01.jpg";
import Avatar2 from "../assets/images/avatar-02.jpg";
import Avatar3 from "../assets/images/avatar-03.jpg";
import Title from "./Title";

const testimonialInfo = [
  {
    quote:
      "Tive muita sorte de encontrar a AppMaster, eu estava buscando uma empresa de confiança que faria o serviço bem feito e por sorte, encontrei eles. Obrigado a todos pelo ótimo e excelente trabalho.",
    avatar: Avatar1,
    name: "Lucas Marques",
    prof: "Designer Gráfico",
  },
  {
    quote:
      "Meu sonho desde que me formei era montar a minha própria empresa, e com a AppMaster isso foi possível, graças ao ecommerce que eles desenvolveram exclusivamente para mim e minha equipe.",
    avatar: Avatar2,
    name: "Luna Marrer",
    prof: "Empresária",
  },
  {
    quote:
      "Sem a AppMaste minha empresa não teria sobrevivido. Eu estava quase falindo e através da consultoria e melhorias feitas no meu website tudo foi de mau a muito melhor. Eles são os melhores.",
    avatar: Avatar3,
    name: "Gabriel Sales",
    prof: "Empresário",
  },
];

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};

const TestimonialsCard = ({ testi }) => {
  const { quote, avatar, name, prof } = testi;
  return (
    <div className="testimonial-card">
      <div className="content">
        <div className="quote">
          <i className="fas fa-quote-left"></i>
          <p>{quote}</p>
          <i className="fas fa-quote-right"></i>
        </div>
        <img className="avatar" src={avatar} alt="avatar" />
        <h3>{name}</h3>
        <p>{prof}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="main-container">
        <div className="section-header">
          <Title>Depoimentos</Title>
          <p>
            Veja a opinião sincera dos nossos clientes a respeito dos serviços
            prestados.
          </p>
        </div>
        <Slider {...settings} id="testimonials-container">
          {testimonialInfo.map((testi) => (
            <TestimonialsCard testi={testi} key={testi.name} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
