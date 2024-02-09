import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'lucide-react'

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.DialogTrigger className="rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-200">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Start by recording an audio note or, if you prefer, just use text .
        </p>
      </Dialog.DialogTrigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50">
          <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none">
            <Dialog.DialogClose className="absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.DialogClose>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Add note
              </span>

              <p className="text-sm leading-6 text-slate-400">
                Start by{' '}
                <button className="font-medium text-lime-400 hover:underline">
                  recording an audio
                </button>{' '}
                note or, if you prefer,{' '}
                <button className="font-medium text-lime-400 hover:underline">
                  just use text
                </button>
                .
              </p>
            </div>

            <button
              type="button"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-bold hover:bg-lime-500"
            >
              Save note
            </button>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
