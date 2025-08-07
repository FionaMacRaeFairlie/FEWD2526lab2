import { items } from "./data/data";
import MenuTable from "./components/MenuTable";

export default function App() {

  return (
  <>
    <h1 style={{ margin: '10px' }}>Menu</h1>
     <MenuTable items={items} />
    </>
  )
}
