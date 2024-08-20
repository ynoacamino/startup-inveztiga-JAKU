import Link from 'next/link';
import Image from 'next/image';
import {
  MenuIcon,
} from 'lucide-react';
import {
  NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Menu } from './pages/Menu';

export default function NavBar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 max-w-6xl">
      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <Button className="h-8" variant="outline" size="icon">
            <MenuIcon size={20} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="sm:w-72 px-3 h-full flex flex-col">
          <SheetHeader className="mt-8">
            <Button
              className="flex justify-center items-center pb-2 pt-1"
              variant="link"
              asChild
            >
              <Link href="/" className="flex items-center gap-2">
                <Image src="logo.svg" width={180} height={500} alt="Logo de inveztiga" />
                <span className="sr-only">Inveztiga</span>
              </Link>
            </Button>
          </SheetHeader>

          <Menu />
        </SheetContent>
      </Sheet>

      <Image src="logo.svg" width={180} height={500} alt="Logo de inveztiga" className="md:hidden ml-3" />

      <Link href="/" className="mr-6 hidden md:flex" prefetch={false}>
        <Image src="logo.svg" width={180} height={500} alt="Logo de inveztiga" />
        <span className="sr-only">Inveztiga</span>
      </Link>

      <NavigationMenu className="hidden md:flex ml-auto">
        <NavigationMenuList>
          <Link href="/" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Inicio
            </NavigationMenuLink>
          </Link>

          <Link href="/cursos" legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cursos
            </NavigationMenuLink>
          </Link>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Soporte</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[200px] p-2">
                <Link href="/soporte#quienes-somos" legacyBehavior passHref prefetch={false}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    ¿Quienes somos?
                  </NavigationMenuLink>
                </Link>

                <Link href="/contacto" legacyBehavior passHref prefetch={false}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="justify-end flex gap-2 ml-auto md:ml-3">
        <Button variant="ghost" className="hover:bg-secondary hover:text-primary-foreground">
          <Link href="/login">Iniciar Sesión</Link>
        </Button>

        <Button>
          <Link href="/register">Crear una cuenta</Link>
        </Button>
      </div>
    </header>
  );
}
