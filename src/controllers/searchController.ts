import { Request, Response } from "express";
import { pet } from "../models/pet";

export const search = (req: Request, res: Response) => {
  if (!req.query.q) {
    res.redirect("/");
  }
  let query: string = req.query.q as string;

  res.render("pages/page", {
    query,
    petList: pet.getSearch(query),
  });
};
