import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU: any[] = [
  // {
  //   name: "About",
  //   icon: RectangleStackIcon,
  // },
  // {
  //   name: "Contact Us",
  //   icon: UserCircleIcon,
  // }
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-blue-900 hover:text-yellow-700 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-gradient-to-r from-yellow-100 via-white to-green-100"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color="blue-gray"
          className="text-xl font-extrabold text-blue-900"
        >
          Haasbharg
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5 text-blue-700" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <IconButton
          variant="text"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden text-blue-900"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-yellow-300 bg-gradient-to-r from-yellow-300 to-green-300 px-2 pt-4 rounded-b-xl">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-blue-700" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Button className="bg-blue-700 text-yellow-200">Log in</Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button className="bg-yellow-500 text-blue-900 font-bold shadow-md">
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
