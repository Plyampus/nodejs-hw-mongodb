const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    const isContactType = (contactType) => ['work', 'home', 'personal'].includes(contactType);

    if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
    const isBoolean = typeof isFavourite === 'boolean';
    if (!isBoolean) return;
    return isFavourite;
};


export const parseFilterParams = (query) => {
    const { contactType, isFavourite } = query;

    const parsedContactType = parseContactType(contactType);
    const parsedIsFavorite = parseIsFavourite(isFavourite === 'true');

    return {
        contactType: parsedContactType,
        isFavourite: parsedIsFavorite,
    };
};
