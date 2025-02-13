import { Popover } from "./popover/popover";

export const forTest = () => {
  return 1
}



const popover = new Popover(document.querySelector('.container'))

popover.bindtoDOM()