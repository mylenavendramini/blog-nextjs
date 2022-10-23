import { NextApiResponse, NextApiRequest } from "next";
import { recipes } from "../../recipes-data";
import { Recipe, ResponseError } from "../interfaces";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Recipe[] | ResponseError>
) {
  try {
    return res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err}. Failed to load data.` });
  }
}
