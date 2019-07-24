const current = (current) => {
    return {
        type: 'CURRENT_STOP',
        payload: current
    };
};

export default current;