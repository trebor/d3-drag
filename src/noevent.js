import {event} from "d3-selection";

export function nopropagation() {
  event.stopImmediatePropagation();
}

export default function() {
  console.log('here!');
  event.preventDefault();
  event.stopImmediatePropagation();
}
