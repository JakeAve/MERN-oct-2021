export const units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

const crearFechaRelativa = (d1, { d2 = new Date(), locale = "es-CL" } = {}) => {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const elapsed = new Date(d1).valueOf() - new Date(d2).valueOf();
  for (const u in units)
    if (Math.abs(elapsed) > units[u] || u === "second")
      return rtf.format(Math.round(elapsed / units[u]), u);
  return "";
};

export const fechaCorta = (d, { locale = "es-CL" } = {}) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(d));
};

export default crearFechaRelativa;
