export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.floor((count + perPage - 1) / perPage);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
