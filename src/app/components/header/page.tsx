import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/header.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { header } from "@/app/api/header";

export default function Header() {
  const api = header();

  if (!api.isHidden) {
    return null;
  }

  return (
    <header>
      <section className="left">
        <Link href="/">
          <p>Cookify</p>
        </Link>
      </section>
      <section className="right">
        <form onSubmit={(e) => { e.preventDefault(); api.searchBtn(); }}>
          {api.isFindShow && <input type="text" placeholder="Search recipes" onChange={(e) => { api.recipeSearch(e) }} />}
          <button type="submit">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          </button>
        </form>
      </section>
    </header>
  );
}
