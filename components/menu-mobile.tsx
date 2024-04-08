import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { HeaderMobile } from "./header-mobile";

export const MenuMobile = () => {
  return (
    <div className=" md:hidden bg-white fixed bottom-10 left-[50%] translate-x-[-50%] rounded-full h-[55px] w-[55px] flex items-center justify-center z-40">
      <Drawer>
        <DrawerTrigger>
          <MenuIcon className="text-purple" />
        </DrawerTrigger>
        <DrawerContent className="flex items-center ">
          <DrawerHeader className="pt-14 ">
            <Image
              src={"img/brand/logo-black.svg"}
              alt="Logo"
              width={103}
              height={200}
            />
          </DrawerHeader>
          <HeaderMobile />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
