// Data článku sdílená serverem i prohlížečem (stránka článku, sitemapa).

/** Datum, kdy se článek naposledy podstatně změnil (pro „aktualizováno“, dateModified a sitemapu). */
export function articleModified(a: { date: string; modifiedDate?: string }): string {
  return a.modifiedDate && a.modifiedDate > a.date ? a.modifiedDate : a.date;
}
