import { v4 as uuid } from "uuid";

let users = [
  {
    id: uuid(),
    name: "Emin",
    email: "basbayanemin@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
  {
    id: uuid(),
    name: "Nur",
    email: "nurbasbayan@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getSingleUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(400).send("User not found!");
  }
  return res.send(user);
};

export const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;

  const user = {
    id: uuid(),
    name,
    email,
    country,
    contact,
  };

  users.push(user);
  return res.send("New user created!");
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(400).send("User not found!");
  }

  users = users.filter((u) => u.id !== id);

  return res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  const { name, email, country, contact } = req.body;

  if (!user) {
    return res.status(400).send("User not found!");
  }

  user.name = name;
  user.email = email;
  user.country = country;
  user.contact = contact;

  return res.send(user);
};
