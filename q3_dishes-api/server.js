const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

// Read dishes from db.json
const getDishes = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

// Write dishes to db.json
const saveDishes = (dishes) => {
  fs.writeFileSync("db.json", JSON.stringify(dishes, null, 2), "utf-8");
};

// POST /dishes → Add new dish
app.post("/dishes", (req, res) => {
  const dishes = getDishes();
  const newDish = req.body;
  if (!newDish.id || !newDish.name || !newDish.price || !newDish.category) {
    return res.status(400).json({ message: "All fields are required." });
  }
  dishes.push(newDish);
  saveDishes(dishes);
  res.status(201).json(newDish);
});

// GET /dishes → All dishes
app.get("/dishes", (req, res) => {
  const dishes = getDishes();
  res.status(200).json(dishes);
});

// GET /dishes/:id → Dish by ID
app.get("/dishes/:id", (req, res) => {
  const dishes = getDishes();
  const dish = dishes.find((d) => d.id == req.params.id);
  if (dish) res.status(200).json(dish);
  else res.status(404).json({ message: "Dish not found." });
});

// PUT /dishes/:id → Update by ID
app.put("/dishes/:id", (req, res) => {
  const dishes = getDishes();
  const index = dishes.findIndex((d) => d.id == req.params.id);
  if (index !== -1) {
    dishes[index] = { ...dishes[index], ...req.body };
    saveDishes(dishes);
    res.status(200).json(dishes[index]);
  } else {
    res.status(404).json({ message: "Dish not found." });
  }
});

// DELETE /dishes/:id → Delete by ID
app.delete("/dishes/:id", (req, res) => {
  let dishes = getDishes();
  const newDishes = dishes.filter((d) => d.id != req.params.id);
  if (newDishes.length === dishes.length) {
    return res.status(404).json({ message: "Dish not found." });
  }
  saveDishes(newDishes);
  res.status(200).json({ message: "Dish deleted." });
});

// GET /dishes/get?name= → Search by (partial) name
app.get("/dishes/get", (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ message: "Name query is required." });

  const dishes = getDishes();
  const filtered = dishes.filter((d) => d.name.toLowerCase().includes(name.toLowerCase()));

  if (filtered.length) res.status(200).json(filtered);
  else res.status(404).json({ message: "No dishes found" });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
