const Tree = require('./models/Tree')
const User = require('./models/User')
const {printTree} = require('./helpers/printTree');

// create rootnode in mindmap data for testing
let tree = new Tree('Engineering');
let tree1 = new Tree('Hobbies')
let tree2 = new Tree('Movies')
let tree3 = new Tree('Dreams')

// create users
let user1 = new User(100);
let user2 = new User(200);

//associate users with mindmaps
user1.addMindmaps(tree);
user1.addMindmaps(tree2);
user1.addMindmaps(tree3);
user2.addMindmaps(tree1);

// add topics/level2/ level3 to root
let cs = tree.addChild('Computer Science');
let me = tree.addChild('Mechanical')
let civil = tree.addChild('Civil');

let programming = cs.addChild('Programming');
let database = cs.addChild('Database');
let devops = cs.addChild('Devops');

let machine = me.addChild('Machines');
let tools = me.addChild('Tools');

let java = programming.addChild('Java');
let python = programming.addChild('Python');


tree1.addChild('Swimming')
tree1.addChild('Reading')
tree1.addChild('Sleeping')

tree2.addChild('Action');
tree2.addChild('Comedy');

tree3.addChild('Scary')
tree3.addChild('Funny')
tree3.addChild('Happy')


//print all mindmaps of a user
console.log(`Listing all mindmaps by user id:  ${user1.userId}`);

let mindmapsByUser = user1.getAllUserMapsByUser();
mindmapsByUser.forEach(item => {
    console.log(`---------------  Displaying Mindmap ${mindmapsByUser.indexOf(item)+1} ---------------`);
    printTree(item);
});


/* 
console.log(`Listing all mindmaps by user id:  ${user2.userId}`);

let mindmapsByUser2 = user2.getAllUserMapsByUser();
mindmapsByUser2.forEach(item => {
    console.log(`---------------  Displaying Mindmap ${mindmapsByUser2.indexOf(item)+1} ---------------`);
    printTree(item);
});
 */


let searchKey = 'Engineering';
console.log(`--------------- Searching for topic: '${searchKey}' in '${tree.title}' Mindmap--------------- `);
let results = tree.searchTopicsByTitle(searchKey);
if (results.length == 0)
    console.log('No Sub Topics Found')
else
    console.log(results)

