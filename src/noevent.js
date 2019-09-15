import {event} from "d3-selection";

export function nopropagation() {
  event.stopImmediatePropagation();
}

export default function() {
  console.log('mark', 1);
  if (event.cancelable) {
    console.log('mark', 2);
    event.preventDefault();
  }
  event.preventDefault();
  event.stopImmediatePropagation();
}
