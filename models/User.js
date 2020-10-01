class User {
  constructor(userId) {
    this.userId = userId;
    this.userMindmaps = [];
  }

  addMindmaps(treeNode) {
    if (!treeNode)
      return 'No mindmap added.';
      
    this.userMindmaps.push(treeNode);
  }

  removeMindmaps(treeNode) {
    const index = this.userMindmaps.indexOf(treeNode);
    if (index === -1) {
      throw new Error("The provided tree does not exist");
    } else {
      // splicing out the childNode
      this.userMindmaps.splice(index, 1);
    }
  }

  getAllUserMapsByUser(){
    return this.userMindmaps;
  }
}

module.exports = User;