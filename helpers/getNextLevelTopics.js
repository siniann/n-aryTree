const getNextLevelTopics = (node) => {
    if (!node) {
        return ('No node found!');
    }
    let nextLevelTopics = []
    for (let child in node.children) {
        nextLevelTopics.push(node.children[child].title)
    }
    return nextLevelTopics;
}
module.exports = {
    getNextLevelTopics

};