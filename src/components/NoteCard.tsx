export function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 flex items-start flex-col p-5 space-y-3 text-left">
      <span className="text-sm font-medium text-slate-300">2 days ago</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos,
        explicabo maiores culpa in accusamus repellendus obcaecati modi
        recusandae id cum molestiae! Atque quod corrupti possimus, provident
        maxime voluptate quis eos?
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
