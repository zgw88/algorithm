/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
}; 双指针的方式
  定义prev指向null，cur指向当前head
  每次循环都将当前节点指向前面的节点，然后当前节点和前节点后移
  循环处理 再定义 next 指向当前节点的next cur.next 指向 prev ，prev指向 cur cur=next
 */
 
  var reverseList = function(head) {
    let prev = null // 前指针节点
    let cur = head //当前指针节点
    while(cur) {
        const next = cur.next //临时节点 暂存当前的下一个节点 用于后移
        cur.next = prev // 当前节点指向它前面的节点
        prev = cur // 前指针后移
        cur = next // 当前指针后移
    }
    return prev
};