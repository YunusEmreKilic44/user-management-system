import express from "express";

const app = express();
app.use(express.json());

const port = 5000;

let users = [
  {
    id: 1,
    name: "Emin",
    email: "basbayanemin@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
  {
    id: 2,
    name: "Nur",
    email: "nurbasbayan@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(400).send("User not found!");
  }
  return res.send(user);
});

app.post("/users", (req, res) => {
  const { name, email, country, contact } = req.body;

  const user = {
    id: users.length + 1,
    name,
    email,
    country,
    contact,
  };

  users.push(user);
  return res.send("New user created!");
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(400).send("User not found!");
  }

  users = users.filter((u) => u.id !== Number(id));

  return res.send(users);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === Number(id));
  const { name, email, country, contact } = req.body;

  if (!user) {
    return res.status(400).send("User not found!");
  }

  user.name = name;
  user.email = email;
  user.country = country;
  user.contact = contact;

  return res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
