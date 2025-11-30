export function get(
  obj:  any,
  path: string | string[] | undefined,
  defaultValue: string | undefined = undefined): string  | number | undefined {
  if (!obj) {
    return defaultValue;
  }

  const pathParts = Array.isArray(path) ? path : (path ?? '').split('.');

  if (!pathParts || pathParts.length === 0) {
    return obj;
  }

  const current: any = typeof obj === 'object' ? obj : {};

  for (const part of pathParts) {
    if (part) {
      if (current[part] !== undefined) {
        return current[part];
      } else {
        return defaultValue;
      }
    }
  }
}
