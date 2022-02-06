//  节点
class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 链表类
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  // 尾部添加节点
  addAtTail(value) {
    // 创建新节点
    const node = new LinkNode(value);

    // 检测链表是否存在数据
    if (this.count === 0) {
      this.head = node;
    } else {
      // 找到链表尾部节点，将最后一个节点的 next 设置为 node
      let cur = this.head;
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.count++;
  }

  // 头部添加节点
  addAtHead(value) {
    const node = new LinkNode(value);

    if (this.count === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.count++;
  }

  // 获取节点（根据索引，从零开始算起）
  get(index) {
    if (this.count === 0 || index < 0 || index > this.count) {
      return;
    }

    // 不算头节点
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // 添加节点（根据索引）
  addAtIndex(value, index) {
    if (this.count === 0 || index >= this.count) {
      return;
    }

    // index <= 0, 在头部添加
    if (index <= 0) {
      return this.addAtIndex(value);
    }

    const prev = this.get(index - 1);
    const next = prev.next;
    const node = new LinkNode(value);

    prev.next = node;
    node.next = next;

    this.count++;
  }

  // 删除（根据索引）
  removeAtIndex(index) {
    if (this.count === 0 || index < 0 || index > this.count) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const prev = this.get(index - 1);
      prev.next = prev.next.next;
    }

    this.count--;
  }
}

const l = new LinkedList();
