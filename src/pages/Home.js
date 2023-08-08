import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import "./home.css";

function Home() {
  return (
    <>
      <div className="home-overlay"></div>
      <div className="Home">
        <h1 className="welcome-text">Welcome to The Corner Sto</h1>
        <Carousel style={{ boxShadow: "1px 2px 9px #9CA653" }}>
          <Carousel.Item>
            <img
              style={{ height: "750px", width: "680px" }}
              className="d-block"
              src="https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#292b2c" }}>
                In a search for what an Healthy Snacks is?
              </h3>
              <p style={{ color: "#292b2c" }}>
                See in real time how healthy or unhealthy your snacks are.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "750px", width: "680px" }}
              className="d-block"
              src="https://images.unsplash.com/photo-1614242239788-3282f136fe10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "#292b2c" }}>Keep track of your habits!</h3>
              <p style={{ color: "#292b2c" }}>
                The Corner Sto will help you log your hidden secrets.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <Link to="/snacks">
          <button className="button button-secondary">Get Started!</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
