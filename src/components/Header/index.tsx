import Link from "../Link";
import "./styles.css";

function Header() {
  return (
    <header>
      <p>Din Din</p>
      <Link texto="Cursos" redirect="/cursos"/>
      <Link texto="Blog" redirect="/blog"/>
      <Link texto="Contato" redirect="/contato" />
    </header>
  );
}

export default Header;
