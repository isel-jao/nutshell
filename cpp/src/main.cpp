#include <iostream>
#include "bst.hpp"
int main()
{

	BST<int> bst;
	bst.insert(15);
	bst.insert(11);
	bst.insert(8);
	bst.insert(5);
	bst.insert(9);
	bst.insert(10);
	bst.insert(30);
	bst.insert(50);
	bst.insert(40);
	bst.insert(7);
	bst.insert(6);
	bst.erase(50);
	bst.print();
	return 0;
}