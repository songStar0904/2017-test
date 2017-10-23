// 题目描述
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述:
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点

//不用去递归
//也 不用管谁包含谁，只要随便找一个节点，直到某个祖先节点（或自己）包含另一个节点就行了。 oNode.contains(oNode)是等于true的

function commonParentNode(oNode1, oNode2) {
    for(;oNode1; oNode1 = oNode1.parentNode){
        if (oNode1.contains(oNode2)){
            return oNode1;
        }
    }
}