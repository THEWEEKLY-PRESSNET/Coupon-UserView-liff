export const serchQueryToOgj = (
  searchStr: string
): { [key: string]: string } => {
  if (!searchStr) return {};
  return searchStr
    .substring(1)
    .split("&")
    .reduce((acc, cur) => {
      acc[cur.split("=")[0]] = cur.split("=")[1];
      return acc;
    }, {} as { [key: string]: string });
};
