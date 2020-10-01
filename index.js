const Tree = require('./models/Tree');
const User = require('./models/User');
const {printTree} = require('./helpers/printTree');

// create rootnode in mindmap data for testing
let tree = new Tree(1,'Engineering');
let tree1 = new Tree(2,'Hobbies');
let tree2 = new Tree(3,'Movies');
let tree3 = new Tree(4,'Dreams');

// create users
let user1 = new User(100);
let user2 = new User(200);

//associate users with mindmaps
user1.addMindmaps(tree);
user1.addMindmaps(tree2);
user1.addMindmaps(tree3);
user2.addMindmaps(tree1);

// add topics/level2/ level3 to root
let cs = tree.addChild(5,'Computer Science');
let me = tree.addChild(6,'Mechanical')
let civil = tree.addChild(7,'Civil');

let programming = cs.addChild(8,'Programming');
let database = cs.addChild(9,'Database');
let devops = cs.addChild(10,'Devops');

let machine = me.addChild(11,'Machines');
let tools = me.addChild(12,'Tools');

let java = programming.addChild(13,'Java');
let python = programming.addChild(14,'Python');


tree1.addChild(15,'Swimming');
tree1.addChild(16,'Reading');
tree1.addChild(17,'Sleeping');

tree2.addChild(18,'Action');
tree2.addChild(19,'Comedy');

tree3.addChild(20,'Scary');
tree3.addChild(21,'Funny');
tree3.addChild(22,'Happy');


//print all mindmaps of a user
console.log(`Listing all mindmaps by user id:  ${user1.userId}`);

let mindmapsByUser = user1.getAllUserMapsByUser();
mindmapsByUser.forEach(item => {
    console.log(`---------------  Displaying Mindmap ${mindmapsByUser.indexOf(item)+1} ---------------`);
    printTree(item);
});

let searchKey = 'Engineering';
console.log(`--------------- Searching for topic: '${searchKey}' in '${tree.title}' Mindmap--------------- `);
let results = tree.searchTopicsByTitle(searchKey);
if (results.length == 0)
    console.log('No Sub Topics Found');
else
{
    console.log(`Topics under ${searchKey} : `)
    console.log(results);

}

