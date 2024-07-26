export const calculatePaginationData = (count, perPage, page) => ({
    page,
    perPage,
    totalItems: count,
    totalPages: Math.ceil(count / perPage),
    hasNextPage: page < Math.ceil(count / perPage),
    hasPreviousPage: page > 0,
});
