export function setColor(property, color) {
  let root = document.querySelector(":root");
  root.style.setProperty(`--${property}`, color);
}

export function getColor(property) {
  return getComputedStyle(document.documentElement).getPropertyValue(
    `--${property}`
  );
}
