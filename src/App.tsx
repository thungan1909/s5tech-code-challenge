import { useState } from "react";
import { MENU_ITEMS } from "./constant/menu";

function App() {
  const [activeId, setActiveId] = useState(MENU_ITEMS[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeItem = MENU_ITEMS.find((item) => item.id === activeId);

  return (
    <div className="flex min-h-screen text-gray-900 overflow-x-hidden">
      {/* Mobile toggle button */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gray-700 text-white rounded-md shadow-md"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-100 border-r border-gray-200 p-4 flex flex-col overflow-y-auto
          transform transition-transform duration-300 z-20
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative`}
      >
        <h1 className="text-xl font-bold mb-6">99Tech Code Challenge</h1>
        <nav className="flex flex-col space-y-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveId(item.id);
                setSidebarOpen(false); // closes sidebar on mobile after selection
              }}
              className={`text-left px-3 py-2 rounded-lg transition ${
                item.id === activeId
                  ? "bg-green-700 text-white font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-600 h-full  min-h-screen flex justify-center">
        {activeItem?.component}
      </main>
    </div>
  );
}

export default App;
