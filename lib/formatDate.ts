export function formatDate(date: Date, lang: "fr" | "en"): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return lang === 'fr' ? `${day}/${month}/${year}` : `${year}/${day}/${month}`;

}
