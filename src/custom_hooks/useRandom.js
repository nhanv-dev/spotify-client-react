const useRandom = () => {
    const string = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    const generateRandom = () => {
        return string + '-' + string + string + string + '-' + string + string + string
    }
    return { key: generateRandom() };
};


export default useRandom;