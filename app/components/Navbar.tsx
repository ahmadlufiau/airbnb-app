import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb_desktop.png";
import MobileLogo from "../../public/airbnb_mobile.png";
import { UserNav } from "./UserNav";
import { SearchModalComponent } from "./SearchComponent";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image 
            src={DesktopLogo} 
            alt="Desktop Logo" 
            className="w-32 hidden lg:block"
          />

          <Image 
            src={MobileLogo} 
            alt="Mobile Logo" 
            className="w-12 block lg:hidden"
          />
        </Link>

        <SearchModalComponent />

        <UserNav></UserNav>
      </div>
    </nav>
  )
}
