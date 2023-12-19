import "./css/mycontent.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import MyAlarm from "../modal/alarm/page";
import { myContent } from "@/app/api/mycontent";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MyContent() {
  const api = myContent();

  return (
    <div className="container">
      <button>
        <Link href={"https://github.com/FullStackWeavers/Cookify_NEXT"}>
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </Link>
      </button>
      <button onClick={api.AlarmModalClick}>
        <FontAwesomeIcon className="icon" icon={faBell} />
      </button>
      {api.isAlarm ? <MyAlarm AlarmModalClick={api.AlarmModalClick} /> : null}
      {api.isLogin === true ? (
        <Link href="/">
          <button onClick={api.LogoutClick}>
            <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
          </button>
        </Link>
      ) : null}
      {api.isLogin === true ? (
        <div>
          <Link href="/mypage">
            <div className="profile">
              <Image
                className="icon"
                src={api.isUser.picture}
                alt="Profile Image"
                width={50}
                height={50}
              />
            </div>
          </Link>
        </div>
      ) : (
        <Link href="/start">
          <button onClick={api.LoginClick}>
            <span>
              Login
            </span>
          </button>
        </Link>
      )}
    </div>
  );
}
