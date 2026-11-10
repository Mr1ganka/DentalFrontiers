const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Returns the proper URL path for static assets, taking into account
 * the basePath prefix (e.g. GitHub Pages repository subpath).
 */
export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanBase = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
