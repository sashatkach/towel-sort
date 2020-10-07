// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((acc, item, index) => { if (index % 2) { return acc.concat(item.sort((a, b) => b - a)) } return acc.concat(item.sort((a, b) => a - b)) }, []);
}