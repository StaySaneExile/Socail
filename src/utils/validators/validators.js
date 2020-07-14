export const requiredField = (value) => {
    if(value) return undefined
    return 'Required field';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `max length ${maxLength} symbols`
    return undefined;
}