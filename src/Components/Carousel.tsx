interface Props {
  imgs: string[];
  headers: string[];
  descriptions: string[];
}

const Carousel = ({ imgs, headers, descriptions }: Props) => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide bg-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {imgs.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to={`${index}`}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imgs.map((img, index) => (
          <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
            <img src={img} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{headers[index]}</h5>
              <p>{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    // <div
    //   id="carouselExampleAutoplaying"
    //   className="carousel slide bg-dark"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleAutoplaying"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleAutoplaying"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleAutoplaying"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleAutoplaying"
    //       data-bs-slide-to="3"
    //       aria-label="Slide 4"
    //     ></button>
    //   </div>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={logoOrange} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={logoJaune} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={logoRouge} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //     <div className="carousel-item">
    //       <img src={logoJaune} className="d-block w-100" alt="..." />
    //       <div className="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the fourth slide.</p>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleAutoplaying"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleAutoplaying"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default Carousel;
