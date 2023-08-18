import { Tabs } from './components/Tabs'
import { TextInput } from './components/Form/TextInput'
import { FileInput } from './components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectInput } from './components/Form/SelectInput'
import { SelectItem } from './components/Form/SelectInput/SelectItem'
import { TextAreaInput } from './components/Form/TextAreaInput'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <Tabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Submit
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <TextInput.Root>
                <TextInput.Control id="firstName" defaultValue="Matheus" />
              </TextInput.Root>

              <TextInput.Root>
                <TextInput.Control defaultValue="Antonino" />
              </TextInput.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="emailAddress"
              className="text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>
            <TextInput.Root>
              <TextInput.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </TextInput.Prefix>
              <TextInput.Control
                type="email"
                id="emailAddress"
                defaultValue="matrajano12@gmail.com"
              />
            </TextInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="your-photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />

              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <TextInput.Root>
              <TextInput.Control id="role" defaultValue="CTO" />
            </TextInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <SelectInput placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="pt" text="Portugal" />
              <SelectItem value="us" text="United States" />
            </SelectInput>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              timezone
            </label>
            <SelectInput placeholder="Select a timezone">
              <SelectItem value="UTC3" text="America Sao Paulo (UTC-03:00)" />
              <SelectItem
                value="UTC8"
                text="Pacific Standard Time (UTC-08:00)"
              />
            </SelectInput>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction about yourself.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <SelectInput placeholder="Select a text type">
                  <SelectItem value="normal-text" text="Normal text" />
                  <SelectItem value="MD" text="Markdown" />
                </SelectInput>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold strokeWidth="3" className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic strokeWidth="3" className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link strokeWidth="3" className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List strokeWidth="3" className="h-4 w-4 text-zinc-500" />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      strokeWidth="3"
                      className="h-4 w-4 text-zinc-500"
                    />
                  </button>
                </div>
              </div>
              <TextAreaInput id="bio" defaultValue="Write your bio..." />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="PortifolioProjects"
              className="text-sm font-medium text-zinc-700"
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className="gap-5">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple={true} />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
