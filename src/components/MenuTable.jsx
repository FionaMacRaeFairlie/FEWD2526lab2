// import FoodItem from "./FoodItem";
// import MenuCategoryRow from "./MenuCategoryRow.jsx";

// const MenuTable = ({ items }) => {

//   const rows = [];
//   let lastCategory = null;

//   let filteredItems = items.filter(item => item.available === "yes");
//   let sortedItems = filteredItems.sort((a, b) => a.category.localeCompare(b.category));

//   sortedItems.forEach((menuItem) => {
//     if (menuItem.category !== lastCategory) {
//       rows.push(
//         <MenuCategoryRow
//           category={menuItem.category}
//           key={menuItem.category} />
//       );
//     }
//     rows.push(
//       <FoodItem
//         food={menuItem}
//         key={menuItem.name} />
//     );
//     lastCategory = menuItem.category;

//   });

//   return (
//     <table style={{margin:'10px', border:'1px black solid', padding:'5px'}} >
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// export default MenuTable;


import FoodItem from "./FoodItem.jsx";
import MenuCategoryRow from "./MenuCategoryRow.jsx";
import Accordion from 'react-bootstrap/Accordion';

const MenuTable = ({ items }) => {

  const rows = [];
  let lastCategory = null;

  let filteredItems = items.filter(item => item.available === "yes");
  let sortedItems = filteredItems.sort((a, b) => a.category.localeCompare(b.category));

  sortedItems.forEach((menuItem) => {
    if (menuItem.category !== lastCategory) {

      rows.push(
        <MenuCategoryRow
          category={menuItem.category}
          key={menuItem.category} />
      );
    }
    rows.push(
      <Accordion.Item eventKey={menuItem.name} key={menuItem.name}>
        <Accordion.Header key={menuItem.name}>{menuItem.name}</Accordion.Header>
        <Accordion.Body>
          <FoodItem
            food={menuItem}
            key={menuItem.name} />
        </Accordion.Body>
      </Accordion.Item>
    );
    lastCategory = menuItem.category;

  });

  return (
    <Accordion style={{ width: 50 + '%' }}>{rows}</Accordion>
  );
}

export default MenuTable;
