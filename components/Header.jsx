function Header() {
  return (
    <>
      {" "}
      <div className="header">
        <img
          src="./components/images/header_logo.png"
          className="header--logo"
          alt="Header Logo"
        />
        <h1 className="title">Meme Generator</h1>
        <h2 className="header--info">React Course - Project 3</h2>
      </div>
    </>
  );
}

export default Header;
