const {breadthFirstSearch} = require("../helpers/breadthFirstSearch");
const {getNextLevelTopics} = require("../helpers/getNextLevelTopics");
const {printTree} = require("../helpers/printTree");

// Tree constructor
class Tree {
    constructor(title) {
        this.title = title;
        this.children = [];
    }
    addChild(title) {
        const node = new Tree(title);
        this.children.push(node);
        return node;
    }

    removeChild(childNode) {
        const index = this.children.indexOf(childNode);

        // when the search value is not found
        if (index === -1) {
            throw new Error("The provided node is not a child of this Tree");
        } else {
            // Modify the operating node's (this) children array by splicing out the childNode
            this.children.splice(index, 1);
        }
    }


    
     searchTopicsByTitle (searchTitle) {
        //validate arguments
        if ( !searchTitle ) {
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