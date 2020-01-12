const LocalStorageService = {
    getItem: (key)=> {
        const linksString = localStorage.getItem(key) || '[]';
        return JSON.parse(linksString);
    },
    setItem: (key, value)=> {
        return new Promise((resolve, reject) => {
            localStorage.setItem(key, JSON.stringify(value));
            resolve();
        });
    },
};

export default LocalStorageService;