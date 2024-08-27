import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { DropdownMenuProfile } from './DropdownMenuProfile';
import SideBarPhone from './SideBarPhone';
import Soporte from './Soporte';

export default function NavBar() {
  return (
    <header className="sticky z-20 top-5 w-[96%] md:container mx-auto flex h-14 md:h-20 shrink-0 items-center px-4 md:px-6 md:border-none border md:bg-white bg-slate-50 m-5 rounded-xl">
      <SideBarPhone />

      <Link
        href="/"
        className=" flex w-40 md:w-48 md:px-0 px-3 mx-auto md:ml-0"
        prefetch={false}
      >
        <Image
          src="/logo.svg"
          width="0"
          height="0"
          alt="Logo de inveztiga"
          className=" w-full h-auto lg:ml-3"
          priority
        />
        <span className="sr-only">Inveztiga</span>
      </Link>

      <NavigationMenu className="hidden md:flex ml-auto ">
        <NavigationMenuList>
          <Link href="/" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Inicio
            </NavigationMenuLink>
          </Link>

          <Link href="/cursos" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Cursos
            </NavigationMenuLink>
          </Link>

          <Link href="/herramientas" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={cn(
                buttonVariants({ variant: 'linkHover2' }),
                navigationMenuTriggerStyle(),
              )}
            >
              Herramientas
            </NavigationMenuLink>
          </Link>

          <Soporte />
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenuProfile />
    </header>
  );
}
