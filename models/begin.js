import MenuItems from "./menu.js";

const dummyMenuItems = [
    {
      name: "Veg Burger",
      description: "A delicious veggie burger with fresh lettuce, tomatoes, and cheese.",
      price: 50.99,
    },
    {
      name: "Cheese Pizza",
      description: "A classic pizza with a generous amount of mozzarella cheese.",
      price: 88.49,
    },
    {
      name: "Pasta Alfredo",
      description: "Creamy pasta with Alfredo sauce and grated parmesan.",
      price: 70.99,
    },
    {
      name: "Chicken Wrap",
      description: "Grilled chicken wrapped in a soft tortilla with fresh veggies.",
      price: 66.99,
    },
    {
      name: "Caesar Salad",
      description: "A fresh salad with romaine lettuce, Caesar dressing, and croutons.",
      price: 40.49,
    },
  ];


  const AddItems=async()=>{
    for (const item of dummyMenuItems) {
        const [name, created] = await MenuItems.findOrCreate({
          where: { name: item.name }, 
          defaults: item,             
        });
    
        // Check if the vehicle type was created or already exists
        if (created) {
          console.log(` ${name} created.`);
        } else {
          console.log(`${name} already exists.`);
        }
    

  }
}

await AddItems()

  export default AddItems