import * as trusts from "@arrangedev/trusts-sdk";
import { schema } from "@/lib/schemas";
import { CreateInitialState, Mints } from "@/lib/types";
import { useWallet } from "@solana/wallet-adapter-react";
import { IconCirclePlus, IconRocket } from "@tabler/icons-react";
import { useForm, yupResolver } from "@mantine/form";

export default function CreateForm() {
  const { publicKey } = useWallet();

  const initialState: CreateInitialState = {
    name: "",
    admin: "",
    isPublic: "true",
    deposit: 1,
    percentage: 1,
    targets: [],
    mint: Mints.USDC,
    interval: trusts.types.Intervals.Weekly,
    email: "",
    notificationConfig: {
      deposits: false,
      contributions: false,
      withdrawals: false,
    },
  };

  const form = useForm({
    validate: yupResolver(schema),
    validateInputOnBlur: true,
    initialValues: initialState,
  });

  return (
    <form>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              General
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Basic information regarding your vault.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="website"
                    {...form.getInputProps("name")}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Super Awesome Vault"
                  />
                </div>
                {form.errors.name && (
                  <span className="mt-4 font-poppins text-xs text-red-500 max-[480px]:text-sm">
                    {form.errors.name}
                  </span>
                )}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Admin Address
              </label>
              <p className="text-zinc-400 text-xs">
                Defaults to the current connected wallet.
              </p>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="website"
                    {...form.getInputProps("admin")}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder={publicKey?.toString()}
                  />
                </div>
                {form.errors.admin && (
                  <span className="mt-4 font-poppins text-xs text-red-500 max-[480px]:text-sm">
                    {form.errors.admin}
                  </span>
                )}
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="visible"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Visibility
              </label>
              <div className="mt-2">
                <select
                  id="visible"
                  name="visible"
                  autoComplete="visible"
                  {...form.getInputProps("isPublic")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={"true"}>Public</option>
                  <option value={"false"}>Private</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Vault Configuration
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Specific information pertaining to vault functionality.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Initial Deposit
              </label>
              <p className="text-zinc-400 text-xs">
                Starting capital for initializing the vault
              </p>
              <div className="mt-2">
                <input
                  type="number"
                  name="contribution"
                  id="contribution"
                  {...form.getInputProps("deposit")}
                  autoComplete="contribution"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
              {form.errors.deposit && (
                <span className="mt-4 font-poppins text-xs text-red-500 max-[480px]:text-sm">
                  {form.errors.deposit}
                </span>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mint
              </label>
              <p className="text-zinc-400 text-xs">
                Token for deposits and contributions.
              </p>
              <div className="mt-2">
                <select
                  id="visible"
                  name="visible"
                  autoComplete="visible"
                  {...form.getInputProps("mint")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={Mints.USDC}>USDC</option>
                  <option value={Mints.SOL}>SOL</option>
                  <option value={Mints.BONK}>BONK</option>
                  <option value={Mints.JUP}>JUP</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contribution Percentage
              </label>
              <p className="text-zinc-400 text-xs">
                Percentage of yield allocated to targets.
              </p>
              <div className="mt-2">
                <input
                  type="number"
                  name="contribution"
                  id="contribution"
                  autoComplete="contribution"
                  {...form.getInputProps("percentage")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
              {form.errors.percentage && (
                <span className="mt-4 font-poppins text-xs text-red-500 max-[480px]:text-sm">
                  {form.errors.percentage}
                </span>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contribution Interval
              </label>
              <p className="text-zinc-400 text-xs">
                Frequency of yield contribution.
              </p>
              <div className="mt-2">
                <select
                  id="visible"
                  name="visible"
                  autoComplete="visible"
                  {...form.getInputProps("interval")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={trusts.types.Intervals.Weekly}>Weekly</option>
                  <option value={trusts.types.Intervals.Monthly}>
                    Monthly
                  </option>
                  <option value={trusts.types.Intervals.Yearly}>Yearly</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Target Addresses
              </label>
              <p className="text-zinc-400 text-xs">
                Addresses where contributions will be sent to.
              </p>
              <div className="mt-2">
                <input
                  id="target1"
                  name="target1"
                  type="text"
                  autoComplete="target"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className="mt-2 flex gap-1 items-center text-zinc-400 hover:text-zinc-600"
              >
                <IconCirclePlus className="w-4" />
                <p className="text-sm">Add Address</p>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Opt into notifications about your vault, and its contributions.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <div className="w-1/2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="hello@example.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Get notified about:
              </legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      {...form.getInputProps("email")}
                      className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                    />
                  </div>
                  {form.errors.percentage && (
                    <span className="mt-4 font-poppins text-xs text-red-500 max-[480px]:text-sm">
                      {form.errors.percentage}
                    </span>
                  )}
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Deposits
                    </label>
                    <p className="text-gray-500">
                      Get an email when a deposit is made into your vault.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      Contributions
                    </label>
                    <p className="text-gray-500">
                      Get an email when a contribution is made.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="offers"
                      className="font-medium text-gray-900"
                    >
                      Withdrawals
                    </label>
                    <p className="text-gray-500">
                      Get an email when a withdrawal is made from your vault.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="inline-flex gap-2 items-center px-3.5 py-2 transition-all ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-full bg-gradient-to-bl from-[#FF3D00] to-[#FFA895] shadow-sm text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          <IconRocket className="w-5" />
          Create
        </button>
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
