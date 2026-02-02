export function getColor(v, a = 1) {
  const val = getComputedStyle(document.documentElement).getPropertyValue(`--ins-${v}`).trim();
  return v.includes('-rgb') ? `rgba(${val}, ${a})` : val;
}