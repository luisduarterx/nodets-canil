import { Router } from "express";
import * as pageController from "../controllers/pageController";
import * as searchController from "../controllers/searchController";

const routes = Router();

routes.get("/", pageController.home);
routes.get("/dogs", pageController.dogs);
routes.get("/cats", pageController.cats);
routes.get("/fishes", pageController.fishes);

routes.get("/search", searchController.search);

export default routes;
