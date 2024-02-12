import logo from './assets/logo.svg'

import { ChangeEvent, useState } from 'react'
import { NewNoteCard } from './components/NewNoteCard'
import { NoteCard } from './components/NoteCard'

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const storedNotes = localStorage.getItem('notes')

    if (storedNotes) return JSON.parse(storedNotes)

    return []
  })
  const [search, setSearch] = useState<string>('')

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes =
    search !== ''
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="Nlw Expert Logo" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Search your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1  gap-6 auto-rows-[250px] md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  )
}
