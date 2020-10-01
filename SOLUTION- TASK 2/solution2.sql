CREATE SCHEMA  `n_ary`;
USE  `n_ary`;

CREATE TABLE  `n_ary`.`treeTable` 
(  `tree_id` INT NOT NULL  ,  
   `title` VARCHAR(45) NOT NULL  ,  
   `parent_id` INT NOT NULL  ,  
  PRIMARY KEY (`tree_id` ),
  FOREIGN KEY (`parent_id`) references  `treeTable` (`tree_id`),
  INDEX(`title`),
  INDEX( `parent_id`)

 );
 
CREATE TABLE `n_ary`.`usersTable` 
(  `user_id` INT NOT NULL  ,  
   `root_id` INT NOT NULL  ,  
 PRIMARY KEY ( `root_id` ),
 FOREIGN KEY (`root_id`) references  `treeTable` (`tree_id`),
 INDEX(`root_id`),
 INDEX(`user_id`)

 );

INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`,  `title`) VALUES ('1', '1',  'Btech');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`,  `title`) VALUES ('2', '1',  'CS');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`,  `title`) VALUES ('3', '1',  'ME');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('4', '2',  'Prog');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('5', '2',  'DB');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('6', '2',  'DevOps');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('7', '4',  'Java');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('8', '4',  'Python');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('9', '4',  'c++');

INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('10', '3',  'machines');
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('11', '3',  'tools');

INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('90', '90', 'MUSIC'); 
INSERT INTO `n_ary`.`treeTable` (`tree_id`, `parent_id`, `title`) VALUES ('99', '99',  'HOBBIES');


INSERT INTO `n_ary`.`usersTable` (`root_id`, `user_id`) VALUES ('1', '100');
INSERT INTO `n_ary`.`usersTable` (`root_id`, `user_id`) VALUES ('90', '100');
INSERT INTO `n_ary`.`usersTable` (`root_id`, `user_id`) VALUES ('99', '200');


# TASK 2.2: Being given the ID of the root topic, write a query to select all the root children in a mind map.
SELECT parent.tree_id AS root_id, parent.title AS root_title, child.tree_id AS root_child_id, child.title as root_child_title
FROM n_ary.treeTable parent JOIN  n_ary.treeTable child ON parent.tree_id = child.parent_id 
WHERE  parent.tree_id != child.tree_id AND parent.tree_id = 1;

#2.3. Being given the ID of the root topic, write a query to select all the level 2 topics.
#(A)if all details from the root to level 2 are required in the results

SELECT a.tree_id AS root_id, a.title AS root_title, b.tree_id AS root_child_id, b.title AS root_child_title, c.tree_id AS level2_id,c.title AS level2_title 
FROM treeTable AS a  
JOIN treeTable AS b  ON a.tree_id = b.parent_id 
JOIN treeTable c ON b.tree_id =c.parent_id
WHERE a.tree_id!= b.tree_id AND b.tree_id != c.tree_id AND  a.tree_id =1;

#2.3. Being given the ID of the root topic, write a query to select all the level 2 topics.
# (B)if title of root_node is not required in the results, query can be simplified with a nested query instead on a join operation

select a.parent_id as root_id, a.tree_id as root_child_id,a.title as root_child_title, b.title as level2_title,b.tree_id as level2_id  
from (select * from treeTable where parent_id =1 and parent_id != tree_id ) as a 
join treeTable as b on a.tree_id = b.parent_id;
