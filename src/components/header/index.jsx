function Header() {
  return (
    <>
      <header>
        <div className="p-5 d-flex gap-3 justify-content-center ">
        <a href="https://www.facebook.com/profile.php?id=61555973171194" target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/icons/fb.png`}
              alt="facebook account"
              className="icon"
            />
          </a>
          <a href="https://github.com/Queenen" target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/icons/github.png`}
              alt="github account"
              className="icon"
            />
          </a>
          <a href="mailto:annette_bjork@fastmail.com">
            <img
              src={`${process.env.PUBLIC_URL}/icons/envelope.png`}
              alt="github account"
              className="icon"
            />
          </a>
          <a href="tel:+4745474043">
            <img
              src={`${process.env.PUBLIC_URL}/icons/phone.png`}
              alt="github account"
              className="icon"
            />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
