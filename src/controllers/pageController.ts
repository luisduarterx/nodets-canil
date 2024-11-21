import { Request, Response } from "express";
import { createObjectMenu } from "../helpers/createMenuObject";
import { pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createObjectMenu("all"),
    banner: {
      title: "Todos os Animais",
      background: "/images/allanimals.jpg",
    },
    petList: pet.getAll(),
  });
};
export const dogs = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createObjectMenu("dog"),
    banner: {
      title: "Cachorros",
      background: "/images/banner_dog.jpg",
    },
    petList: pet.findType("dog"),
  });
};
export const cats = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createObjectMenu("cat"),
    banner: {
      title: "Gatos",
      background: "/images/banner_cat.jpg",
    },
    petList: pet.findType("cat"),
  });
};
export const fishes = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createObjectMenu("fish"),
    banner: {
      title: "Peixes",
      background: "/images/banner_fish.jpg",
    },
    petList: pet.findType("fish"),
  });
};
