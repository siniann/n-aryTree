let indent = 1;
const depthFirstPrint = (node, output = []) => {
    if (!node) return output;
    output.push(node.title);
    if (node.children)
        indent++;
    for (let child of node.children) {
        console.log('----' + Array(indent).join('---->'), child.title)
        depthFirstPrint(child, output);
    }
    indent--;

    return output;
}

const printTree = (tree) => {
    console.log(tree.title)
    depthFirstPrint(tree);

}

module.exports = {
    printTree
}

