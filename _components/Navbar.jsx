import Image from "next/image"
import Link from "next/link"

const Navbar = async () => {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/zoo-flight-logo.gif"
          alt="Zoo Flight Logo"
          width={200}
          height={50}
          priority
        />
      </Link>
      <ul>
        <li>
          <Link href="">About Us</Link>
        </li>

        <li>
          <Link href="">Contact us</Link>
        </li>

        <li>
          <Link href="/bookings">Bookings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
