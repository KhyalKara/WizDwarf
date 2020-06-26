package biotree

import(
	 "fmt"
)

type Tree struct{
	
	Root *Node
}


func (t *Tree) AddBranch(id string)(*Node, *Tree){

	node := &Node{}

	if (*t).Root == nil{
		//Root case
		if node.RightBranch == nil && node.LeftBranch == nil{
			node = node.ChildNode(id)
			(*t).Root = node
			fmt.Println("Root added:", (*t).Root)
			return node, t
		}else if node.LeftBranch != nil{

			node.LeftBranch = node.LeftBranch.LeftBranch
			fmt.Println("LeftBranch:", node.LeftBranch)
			return node, t
		}
		
	}else{
		   if (*t).Root.LeftBranch == nil{
	   			node = node.ChildNode(id)
				(*t).Root.LeftBranch = node 
				fmt.Println("Left added:")
	   			return node, t
		   }else if (*t).Root.RightBranch == nil{
		   		node = node.ChildNode(id)
				(*t).Root.RightBranch = node 
				fmt.Println("Right added:")
	   			return node, t
		   }
	}
	return nil, nil
}