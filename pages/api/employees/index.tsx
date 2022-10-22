import { employees } from "@/pages/employees-data";
import { NextApiResponse, NextApiRequest } from "next";
import { Employee, ResponseError } from "../interfaces";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee[] | ResponseError>
) {
  try {
    // const { name, message } = req.body;
    // await handleFormInputAsync({ name, message });
    // res.redirect(307, "/");
    return res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}. Failed to load data.` });
  }
}
