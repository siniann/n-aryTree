const Queue = require('../helpers/Queue');

const breadthFirstSearch = (root, targetVal) => {
    if (!root || !targetVal) {
        return null;
    }
    const q = new Queue();
    q.enqueue(root);

    while (!q.isEmpty()) {
        // pop oldest entry
        const node = q.dequeue();
        //matching node found
        if (node.title == targetVal) {
            return node;
        }
        // Enqueue all children of current node
        for (let child of node.children) {
            q.enqueue(child);
        }
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};