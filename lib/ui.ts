import type { CSSProperties } from "react";

/** Animation delay helper: style={delay(".2s")} */
export const delay = (v: string): CSSProperties => ({ "--d": v } as CSSProperties);
