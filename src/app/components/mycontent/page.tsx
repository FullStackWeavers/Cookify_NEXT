import "./css/mycontent.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import MyChat from "../modal/chat/page";
import MyAlarm from "../modal/alarm/page";
import { myContent } from "@/app/api/mycontent";

export default function MyContent() {
  const api = myContent();

  if (!api.isHidden) {
    return null;
  }

  return (
    <div className="container">
      <button onClick={api.ChatModalClick}>
        <FontAwesomeIcon className="icon" icon={faComment} />
      </button>
      {api.isChat ? <MyChat ChatModalClick={api.ChatModalClick} /> : null}
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
          <button onClick={api.LoginClick}>login</button>
        </Link>
      )}
    </div>
  );
}
