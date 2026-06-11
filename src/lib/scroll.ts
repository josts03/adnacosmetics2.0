import type Lenis from "lenis";

let instance: Lenis | null = null;

export function getLenis() {
  return instance;
}

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}
