export const normalizeRollTargetToken = (value: string | null | undefined) => {
  const normalized = String(value ?? "").trim();
  if (!normalized) return "";

  const separatorIndex = normalized.indexOf(":");
  if (separatorIndex <= 0) return normalized;

  return normalized.slice(0, separatorIndex).trim();
};
