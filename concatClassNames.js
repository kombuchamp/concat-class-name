module.exports = function concatClassNames(...classNames) {
    classNames = classNames.flat().filter(Boolean);
    const result = [];
    classNames.forEach(cl => {
        result.push(cl);
    });
    return result.join(' ');
};
