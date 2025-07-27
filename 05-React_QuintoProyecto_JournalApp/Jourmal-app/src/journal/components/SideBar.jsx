import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import { useQuery } from "@tanstack/react-query";
import { getNotas } from "../../helpers/getNotas";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const SideBar = ({ drawerWidth = 240, onSelectNote, activeNoteId }) => {
  const { displayName, uid } = useSelector((state) => state.auth);

  const { data: notes = [], isLoading, error } = useQuery({
    queryKey: ["notas", uid],
    queryFn: () => getNotas(uid),
    enabled: !!uid,
    select: (data) => {
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  });

  return (
    <aside className="">
      <div className="md:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="rounded-full">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SidebarContent
              displayName={displayName}
              notes={notes}
              isLoading={isLoading}
              error={error}
              onSelectNote={onSelectNote}
              activeNoteId={activeNoteId}
            />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block w-64 h-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 border-r rounded-br-3xl shadow-lg">
        <SidebarContent
          displayName={displayName}
          notes={notes}
          isLoading={isLoading}
          error={error}
          onSelectNote={onSelectNote}
          activeNoteId={activeNoteId}
        />
      </div>
    </aside>
  );
};

function SidebarContent({ displayName, notes, isLoading, error, onSelectNote, activeNoteId }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 p-4">
        <div className="bg-white text-purple-700 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow">
          {displayName ? displayName[0].toUpperCase() : "U"}
        </div>
        <div>
          <div className="font-bold flex items-center gap-1 text-white">
            Bienvenido <span role="img" aria-label="saludo">👋</span>
          </div>
          <div className="text-white font-bold text-sm">{displayName}</div>
        </div>
      </div>
      <hr className="mb-2 border-white/30" />
      <div className="flex-1 overflow-y-auto px-2">
        {isLoading && <div className="px-2 text-sm text-white/80">Cargando notas...</div>}
        {error && <div className="px-2 text-red-200 text-sm">Error al cargar notas</div>}
        <ul className="space-y-1">
          {notes.map((note) => (
            <SideBarItem
              key={note.id}
              {...note}
              onSelectNote={onSelectNote}
              isSelected={note.id === activeNoteId} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
