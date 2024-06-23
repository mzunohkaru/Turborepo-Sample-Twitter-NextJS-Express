import Link from "next/link";

import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TryOutlinedIcon from "@mui/icons-material/TryOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export function Sidebar() {
  return (
    <div className="w-32 h-screen bg-gray-100 p-4">
      <div className="text-2xl font-bold mb-4">Twitter</div>
      <ul>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <CottageRoundedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <Person2OutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <PeopleAltOutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <TryOutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/message" legacyBehavior>
            <a className="flex items-center p-2 hover:bg-gray-200 rounded">
              <EmailOutlinedIcon className="ml-2" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
