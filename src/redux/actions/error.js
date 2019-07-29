export const handleError = (error) => {
    return {
        type: 'ERROR',
        payload: error
    };
};

export const clearError = () => {
    return {
        type: 'CLEAR_ERROR'
    };
};