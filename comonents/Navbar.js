import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCheckSquare, BsListUl } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className={`nav-link ${pathname === "/" && "active"}`} href="/">
          <BsListUl />
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${pathname === "/completed" && "active"}`}
          href="/completed"
        >
          <BsCheckSquare />
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
