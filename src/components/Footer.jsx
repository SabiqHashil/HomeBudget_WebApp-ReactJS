const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © 2023 - {currentYear}{" "}
        <a
          href="https://sabiqhashil.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sabiq Hashil
        </a>
      </p>
    </footer>
  );
};

export default Footer;
