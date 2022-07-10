export const addQueryParams = (url: string, filter: { [key: string]: any }) => {
  if (typeof filter === 'object') {
    const filterClone = { ...filter };
    let keys = Object.keys(filterClone);
    keys = keys.filter((k) => filterClone[k]);

    keys.forEach((k) => {
      url = url + `&${k}=${filterClone[k]}`;
    });

    return url;
  } else {
    return url;
  }
};
