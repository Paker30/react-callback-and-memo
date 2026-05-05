const closure = () => {
    let sharedValue = null;
    return (message) => {
        console.log('Closure called with message:', message);
        if (sharedValue !== null) {
            return sharedValue;
        }
        sharedValue = message;
        return sharedValue;
    };
};

export const singleton = closure();