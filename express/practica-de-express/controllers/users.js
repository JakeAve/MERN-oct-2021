const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" },
];

const Users = {
  getAll: (req, res) => {
    res.json(users);
  },

  createNew: (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json({ status: "ok" });
  },

  getById: (req, res) => {
    console.log(req.params.id);
    res.json(users[req.params.id]);
  },

  updateById: (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json({ status: "ok" });
  },

  deleteById: (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json({ status: "ok" });
  },
};

module.exports = Users;
