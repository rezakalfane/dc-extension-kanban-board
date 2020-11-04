export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}

export function toQueryStr(params: Record<string, any>): string {
  const paramsStr = new URLSearchParams(params).toString();
  return paramsStr ? `?${paramsStr}` : '';
}

export function toDcQueryStr(
  query: Record<string, string | undefined>
): string {
  let queryStr = '';
  for (let key in query) {
    if (query[key]) {
      queryStr += `${key}:"${query[key]}"`;
    }
  }
  return queryStr;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
