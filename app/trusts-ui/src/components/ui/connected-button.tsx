import { FC, Fragment, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  IconBuildingBank,
  IconEye,
  IconLogout,
  IconWallet,
} from "@tabler/icons-react";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import WalletModal from "./wallet-modal";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ConnectedButton: FC = () => {
  const { publicKey, wallet, disconnect } = useWallet();
  const [open, setOpen] = useState<boolean>(false);

  console.log(publicKey?.toString());

  return (
    <>
      <WalletModal open={open} setOpen={setOpen} />
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton>
            <button className="px-6 py-2 inline-flex gap-2 font-light items-center rounded-full bg-gradient-to-b from-[#FF3D00] to-[#FFA895] text-white transition-all ease-in-out delay-110 hover:-translate-y-1 hover:scale-101">
              <Image
                src={wallet?.adapter.icon as string}
                alt=""
                width={10}
                height={10}
                className="w-4 h-4"
              />
              {publicKey?.toString().slice(0, 3) +
                "..." +
                publicKey?.toString().slice(41, 44)}
            </button>
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-10 mt-[0.65rem] w-40 origin-top-right rounded-md bg-white dark:bg-[#262626] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              <MenuItem>
                {({ active }) => (
                  <Link href={"/vaults"} passHref>
                    <button
                      className={classNames(
                        active
                          ? "w-full inline-flex gap-2 items-center font-poppins bg-zinc-500/25 text-zinc-900 dark:text-white"
                          : "text-zinc-700 dark:text-white",
                        "w-full inline-flex gap-2 items-center font-poppins px-4 py-2 text-left text-sm rounded-lg"
                      )}
                    >
                      <IconBuildingBank stroke={1} />
                      My Vaults
                    </button>
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => setOpen(true)}
                    className={classNames(
                      active
                        ? "w-full inline-flex gap-2 items-center font-poppins bg-zinc-500/25 text-zinc-900 dark:text-white"
                        : "text-zinc-700 dark:text-white",
                      "w-full inline-flex gap-2 items-center font-poppins px-4 py-2 text-left text-sm rounded-lg"
                    )}
                  >
                    <IconWallet stroke={1} />
                    Change Wallet
                  </button>
                )}
              </MenuItem>
              {wallet?.adapter.name == "SquadsX" && (
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href={`https://v4.squads.so/squads/${publicKey?.toString()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classNames(
                        active
                          ? "w-full inline-flex gap-2 items-center font-poppins bg-zinc-500/25 text-zinc-900 dark:text-white"
                          : "text-zinc-700 dark:text-white",
                        "w-full inline-flex gap-2 items-center font-poppins px-4 py-2 text-left text-sm rounded-lg"
                      )}
                    >
                      <IconEye stroke={1} />
                      View Squad
                    </Link>
                  )}
                </MenuItem>
              )}
              <MenuItem>
                {({ active }) => (
                  <button
                    onClick={() => disconnect()}
                    className={classNames(
                      active
                        ? "w-full inline-flex gap-2 items-center font-poppins bg-zinc-500/25 text-zinc-900 dark:text-white"
                        : "text-zinc-700 dark:text-white",
                      "w-full inline-flex gap-2 items-center font-poppins px-4 py-2 text-left text-sm rounded-lg"
                    )}
                  >
                    <IconLogout stroke={1} />
                    Disconnect
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default ConnectedButton;
