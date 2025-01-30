import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container relative z-0">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn bg-green-100 dark:bg-gray-700 shadow-lg border-2 border-white dark:border-gray-500">
              <p className="dark:text-white">
                I have a diverse background in various domains of software
                development and machine learning. My expertise allows me to
                create visually appealing interfaces, build robust server-side
                applications, and develop intelligent systems using modern tools
                and frameworks.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="meter_1" />
                  <h5 className="dark:text-white">Front-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter_2" />
                  <h5 className="dark:text-white">Back-End Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter_3" />
                  <h5 className="dark:text-white">Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter_4" />
                  <h5 className="dark:text-white">Database Ops</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter_5" />
                  <h5 className="dark:text-white">Artificial Intelligence</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
