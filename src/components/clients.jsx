import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import client1 from "../assets/images/client-logo-01.svg";
import client2 from "../assets/images/client-logo-02.svg";
import client3 from "../assets/images/client-logo-03.svg";
import client4 from "../assets/images/client-logo-04.svg";
import client5 from "../assets/images/client-logo-05.svg";
import client6 from "../assets/images/client-logo-06.svg";
import client7 from "../assets/images/client-logo-07.svg";
import client8 from "../assets/images/client-logo-08.svg";
import Title from "./Title";

const clients = [
  {
    src: client1,
    alt: "Client name 1",
  },
  {
    src: client2,
    alt: "Client name 2",
  },
  {
    src: client3,
    alt: "Client name 3",
  },
  {
    src: client4,
    alt: "Client name 4",
  },
  {
    src: client5,
    alt: "Client name 5",
  },
  {
    src: client6,
    alt: "Client name 6",
  },
  {
    src: client7,
    alt: "Client name 7",
  },
  {
    src: client8,
    alt: "Client name 8",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => (
  <section id="clients">
    <div className="main-container">
      <div className="section-header">
        <Title>Clientes</Title>
        <p>
          Temos orgulho de fazer parceria com os maiores empresas do mercado.
          Nós tornamos seus negócios ainda mais promissores com o nosso serviços
          e estratégia de negócio.
        </p>
      </div>
      <div id="client-carousel-container">
        <Slider {...settings}>
          {clients.map((client) => {
            return (
              <div key={client.alt} className="logo-container">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="client-logo"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  </section>
);

export default Clients;
