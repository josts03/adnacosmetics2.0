// Prvi obisk v seji -> preloader + zamaknjene hero animacije.
export const isFirstVisit = !sessionStorage.getItem("adna_visited");
sessionStorage.setItem("adna_visited", "1");

let introPending = isFirstVisit;

/** Zamik vstopnih animacij: dokler teče preloader, počakajo nanj. */
export function getIntroDelay(): number {
  return introPending ? 2.3 : 0.15;
}

export function markIntroDone() {
  introPending = false;
}
