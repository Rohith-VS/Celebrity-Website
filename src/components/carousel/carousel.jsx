import Carousel from "react-bootstrap/Carousel";
import goal from "../../images/goalscore.jpeg";
import ballon from "../../images/ballondor.jpg";
import uefa from "../../images/uefa.jpg";
import "./carousel.scss";

const Carousels = () => {
  return (
    <Carousel className="carousel" variant="dark">
      <Carousel.Item>
        <img className="d-block w-100 img" src={uefa} alt="First slide" />
        <Carousel.Caption>
          <h3 className="title">CR7 with UCL</h3>
          <p className="titlep">Ronaldo with his trophy collection in RM.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img" src={ballon} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="title1">Ballon d'Or</h3>
          <p className="title1p">Ronaldo with the Best player award Ballon d'Or 2016.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img" src={goal} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="title">National Duty</h3>
          <p className="titlep">
            Ronaldo in action at euro cup 2016.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
