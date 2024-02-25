import Cards from "../../components/cards";
function Main() {
  return (
    <>
      <section id="hero" className="text-light p-5 pb-3 pb-sm-4 pt-0">
        <h1 className="fs-3">Hi there,</h1>
        <h2 className="display-2">I'm Annette</h2>
        <p className="text-primary">Front end developer student at Noroff</p>
      </section>
      <section id="projects">
        <Cards />
      </section>
      <section
        id="about"
        className="p-5 bg-dark d-sm-flex justify-content-center justify-content-md-between flex-wrap"
      >
        <div className="mb-5 col-sm-5 col-md-3 col-lg-2">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="profile"
            className="d-block mx-auto "
          />
        </div>
        <article className="d-flex flex-column col-sm-5 col-md-4 text-light">
          <h2 className="mb-3">About me</h2>
          <p>
            I live in a small city north of Norway. I'm a 30 y/o mother of two
            beautiful girls. My hobbies includes digital art, music and playing
            video games. People consider me a highly creative person.
          </p>
          <h2 className="my-3">Life Goals:</h2>
          <ul className="ps-3 lh-lg mb-4">
            <li>Learn something new every day</li>
            <li>Further improve my coding skills</li>
            <li>Travel the world</li>
            <li>Be an inspiration for others</li>
          </ul>
        </article>
        <div
          id="skillset"
          className="text-light px-sm-5 px-md-0 col-12 col-md-4"
        >
          <h2 className="w-100">Skill set</h2>
          <div className="d-flex flex-column gap-2">
            <button className="btn btn-primary text-light fw-bold p-2 mt-4 px-5 d-block mx-auto w-100">
              HTML
            </button>
            <button className="btn btn-primary text-light fw-bold p-2 px-5 d-block mx-auto w-100">
              CSS
            </button>
            <button className="btn btn-primary text-light fw-bold p-2 px-5 d-block mx-auto w-100">
              JAVASCRIPT
            </button>
            <button className="btn btn-primary text-light fw-bold p-2 px-5 d-block mx-auto w-100">
              FIGMA
            </button>
            <button className="btn btn-primary text-light fw-bold p-2 px-5 d-block mx-auto w-100">
              WORDPRESS
            </button>
            <button className="btn btn-primary text-light fw-bold p-2 px-5 d-block mx-auto w-100">
              BOOTSTRAP
            </button>
            <button className="btn btn-primary text-light fw-bold p-2 px-5 d-block mx-auto w-100">
              REACT
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
