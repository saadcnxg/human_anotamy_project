import { skeletal } from "./skeletal.js";
import { muscular } from "./muscular.js";
import { nervous } from "./nervous.js";
import { circulatory } from "./circulatory.js";
import { respiratory } from "./respiratory.js";
import { digestive } from "./digestive.js";

export const systems = [skeletal, muscular, nervous, circulatory, respiratory, digestive];

export const getSystem = (id) => systems.find((s) => s.id === id);

export function searchParts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return systems.flatMap((system) =>
    system.parts
      .filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
      .map((part) => ({ system, part }))
  );
}