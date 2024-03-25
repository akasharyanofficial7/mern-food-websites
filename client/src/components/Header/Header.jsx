import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/dish.png";
import basket from "../../assets/basket_icon.png";
import loupe from "../../assets/search_icon.png";
function Header() {
  return (
    <Navbar className=" shadow ">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="mr-3  h-12 sm:h-12"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold  text-yellow-600">
          MacZooka
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2  gap-4 lg:gap-8">
        <img
          src={loupe}
          className="mr-3   h-5 sm:h-6  mt-3 lg:mt-2 cursor-pointer"
          alt="Flowbite React Logo"
        />
        <div className="flex display-flex  gap-0 h-2">
          <span className="text-yellow-600  font-bold absolute pl-4">2</span>
          <img
            src={basket}
            className="mr-3  h-5 sm:h-6  mt-3 lg:mt-2 pt-1  cursor-pointer"
            alt="Flowbite React Logo"
          />
        </div>

        <h2 className="mt-2 bg-gray-200  hover:bg-gray-300  px-3 py-1  border-2 border-yellow-500 text-gray-600 text-sm rounded-3xl cursor-pointer">
          Sign in
        </h2>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active className="nav">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
