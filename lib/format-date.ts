/** Format a Keystatic date ("YYYY-MM-DD") as a Thai date, e.g. "9 พฤศจิกายน 2569". */
export function formatThaiDate(date: string | null) {
  if (!date) return ""
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
