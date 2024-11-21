import { memoryUsage } from "process";

type objectMenu = "" | "all" | "dog" | "cat" | "fish";

export const createObjectMenu = (activeMenu: objectMenu) => {
  let menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu != "") {
    menu[activeMenu] = true;
  }
  return menu;
};
