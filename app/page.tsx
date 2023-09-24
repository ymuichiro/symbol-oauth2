import List from "@/components/atom/list";
import ListItemButton from "@/components/atom/list-item-button";
import NavBars from "@/components/moleculs/nav-bars";

export default function Home() {
  return (
    <main>
      <NavBars />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="w-full max-w-6xl px-4">
          <List divider>
            <ListItemButton>tet</ListItemButton>
            <ListItemButton>tet</ListItemButton>
            <ListItemButton>tet</ListItemButton>
            <ListItemButton>tet</ListItemButton>
          </List>
        </div>
      </div>
    </main>
  );
}
