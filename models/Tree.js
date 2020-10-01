const { breadthFirstSearch } = require("../helpers/breadthFirstSearch");
const { getNextLevelTopics } = require("../helpers/getNextLevelTopics");
const { printTree } = require("../helpers/printTree");

// Tree constructor
class Tree {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.children = [];
    }

    addChild(id,title) {
        if(!id || !title)
            return null;
        const node = new Tree(id,title);
        this.children.push(node);
        return node;
    }

    removeChild(childNode) {
        if(!childNode)
            return 'No node available to remove'
        const index = this.children.indexOf(childNode);

        // when the search value is not found
        if (index === -1) {
            return ("The provided node is not a child of this Tree");
        } else {
            // Modify the operating node's (this) children array by splicing out the childNode
            this.children.splice(index, 1);
        }
    }

    searchTopicsByTitle(searchTitle) {
        //validate arguments
        if (!searchTitle) {
            return ('No search term available.');
        }
        //match found in root title 
        if (this.title == searchTitle) {
            printTree(this)
            return getNextLevelTopics(this);
        }
        // performs BFS to return a matching node with the title
        const matchingNode = breadthFirstSearch(this, searchTitle);
        if (!matchingNode) {
            return ('No such node exist in the mindmap ');
        }
        printTree(matchingNode)
        let subTopics = getNextLevelTopics(matchingNode, searchTitle);
        if (!subTopics) {
            return ('No Topics found for the search');
        }
        return subTopics;
    }

}
module.exports = Tree;