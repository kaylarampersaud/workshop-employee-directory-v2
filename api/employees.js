import express from "express";
const router = express.Router();
export default router;

import employees, {
  addEmployee,
  getEmployeeById,
  getRandomEmployee,
} from "#db/employees";

router.get("/", (req, res) => {
  res.send(employees);
});

router.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const employee = getEmployeeById(+id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});
