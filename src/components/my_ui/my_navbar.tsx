import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

function MyNavBar() {
  const mineNavigationMenuStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background space-x-4 px-32 py-6 text-xl font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  );
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" replace>
              <NavigationMenuLink className={mineNavigationMenuStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
            <Link to="/projects" replace>
              <NavigationMenuLink className={mineNavigationMenuStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
            <Link to="/contact" replace>
              <NavigationMenuLink className={mineNavigationMenuStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

export default MyNavBar;
