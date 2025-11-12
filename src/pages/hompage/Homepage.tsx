import { useState } from "react";
import { MENU_ITEMS } from "../../constant/menu";

export default function HomePage() {
  const [activeId, setActiveId] = useState(MENU_ITEMS[0].id);

  const activeItem = MENU_ITEMS.find((item) => item.id === activeId);

  return (
    <div className="flex  text-gray-900">
      <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">UI Tests</h1>
        <nav className="flex flex-col space-y-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`text-left px-3 py-2 rounded-lg transition ${
                item.id === activeId
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto p-6 bg-gray-600 h-full  min-h-screen flex justify-center">
        {activeItem?.component}
      </main>
    </div>
  );
}
