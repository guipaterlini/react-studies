import Link from "../Link";
import Logo from "../../assets/images/logo-header.png";
import "./styles.css";

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo do dindin" />
      <Link texto="Cursos" redirect="/cursos" />
      <Link texto="Blog" redirect="/blog" />
      <Link texto="Contato" redirect="/contato" />
    </header>
  );
}

export default Header;
