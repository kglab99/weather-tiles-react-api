// Normalize special characters to ones used by the weather API
export function normalizeString(str) {
    const iMap = {
      ð: "d",
      ı: "i",
      Ł: "L",
      ł: "l",
      ø: "o",
      ß: "ss",
      ü: "ue",
    };
    const iRegex = new RegExp(Object.keys(iMap).join("|"), "g");
    return str
      .replace(iRegex, (m) => iMap[m])
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  