const FoodItem = ({ food }) => {
    return (
        // <tr style={{ backgroundColor: food.category === "drinks" ||food.category === "pudding" ||food.category === "snack"  ? 'aliceblue' : 'powderblue' }}>
        //     <td style={{ padding:'5px'}}>{food.name}</td>
        //     <td style={{ padding:'5px'}}>{food.description}</td>
        //     <td style={{ padding:'5px'}}>{food.price} </td>
        // </tr>

        <div> 
          <p>{food.description}</p>
          <p>Price: {food.price}</p>
       </div> 

    );
};
export default FoodItem;
