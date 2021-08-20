// required to get Node and Tree
const some = require('./some');
const Node = some.Node;
const Tree = some.Tree;

// 3 test to check the code and see that it is working as expected
describe("Tests someThing function", () =>{
    it('Works with two inserts', () => {
        const leaves = new Tree();
        leaves.insert(3);
        leaves.insert(1);
        expect(leaves.root).not.toBe(null);
        expect(leaves.root.value).toBe(3);
        expect(leaves.root.left).not.toBe(null);
        expect(leaves.root.left.value).toBe(1);
    })
    it('Works with three inserts', () => {
        const leaves = new Tree();
        leaves.insert(9);
        leaves.insert(6);
        leaves.insert(4);
        expect(leaves.root).not.toBe(null);
        expect(leaves.root.value).toBe(9);
        expect(leaves.root.left).not.toBe(null);
        expect(leaves.root.left.value).toBe(6);
        expect(leaves.root.left.left).not.toBe(null);
        expect(leaves.root.left.left.value).toBe(4);
    });
    it("Works with 5 inserts with different order", () => {
        const leaves = new Tree();
        leaves.insert(5);
        leaves.insert(7);
        leaves.insert(3);
        leaves.insert(4);
        leaves.insert(9);
        expect(leaves.root).not.toBe(null);
        expect(leaves.root.value).toBe(5);
        expect(leaves.root.left).not.toBe(null);
        expect(leaves.root.left.value).toBe(3);
        expect(leaves.root.left.right).not.toBe(null);
        expect(leaves.root.left.right.value).toBe(4);
        expect(leaves.root.right).not.toBe(null);
        expect(leaves.root.right.value).toBe(7);
        expect(leaves.root.right.right).not.toBe(null);
        expect(leaves.root.right.right.value).toBe(9);    
    });
});