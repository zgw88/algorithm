/**
 * 在 JavaScript 中，Set 和 Map 都是 ES6 新增的数据结构，用于存储和操作数据。
 * 它们之间有以下区别：

1. Set：
   - Set 是一种无序且不重复的集合。
   - Set 中的元素只能是唯一的，不能重复。
   - Set 内部使用值的相等性（===）来判断是否存在相同的元素。
   - Set 可以轻松地添加、删除和查找元素。
   - 示例用法：
     ```javascript
     const set = new Set();
     
     set.add(1);
     set.add(2);
     set.add(3);
     
     console.log(set); // 输出 Set { 1, 2, 3 }
     
     set.delete(2);
     
     console.log(set); // 输出 Set { 1, 3 }
     
     console.log(set.has(3)); // 输出 true
     
     console.log(set.size); // 输出 2
     ```

2. Map：
   - Map 是一种键值对的集合，其中每个键都是唯一的。
   - Map 中的键值对可以按任意顺序排列，并且可以包含任意类型的键和值。
   - Map 使用弱引用来保持对象引用，因此当没有其他引用指向对象时，对象会被自动回收（垃圾回收机制）。
   - Map 可以轻松地添加、删除和查找键值对。
   - 示例用法：
     ```javascript
     const map = new Map();
     
     map.set("name", "John");
     map.set("age", 25);
     map.set("gender", "male");
     
     console.log(map); // 输出 Map { 'name' => 'John', 'age' => 25, 'gender' => 'male' }
     
     map.delete("age");
     
     console.log(map); // 输出 Map { 'name' => 'John', 'gender' => 'male' }
     
     console.log(map.has("gender")); // 输出 true
     
     console.log(map.size); // 输出 2
     ```

总结：
- Set 是一种无序且不重复的集合，适用于存储唯一的值。
- Map 是一种键值对的集合，键是唯一的，并且可以包含任意类型的键和值。
- Set 和 Map 都提供了方便的方法来添加、删除和查找元素或键值对。
- 在选择使用 Set 还是 Map 时，需要根据具体需求来确定。如果只需要存储唯一值，则使用 Set；如果需要存储键值对，则使用 Map。
 */

/**
 * WeakSet 和 WeakMap 是 JavaScript 中的特殊集合类型，与 Set 和 Map 相比有一些不同之处：

1. WeakSet：
   - WeakSet 是一种弱引用集合，它只能包含对象作为成员。
   - WeakSet 中的对象是弱引用的，即如果没有其他引用指向该对象，则会被垃圾回收机制自动回收。
   - WeakSet 不可迭代，因此不能使用 for...of 循环遍历其中的元素。
   - WeakSet 没有提供遍历和清空所有元素的方法。
   - 示例用法：
     ```javascript
     const weakSet = new WeakSet();
     
     const obj1 = {};
     const obj2 = {};
     
     weakSet.add(obj1);
     weakSet.add(obj2);
     
     console.log(weakSet.has(obj1)); // 输出 true
     
     weakSet.delete(obj2);
     
     console.log(weakSet.has(obj2)); // 输出 false
     ```

2. WeakMap：
   - WeakMap 是一种键值对的弱引用集合，其中键必须是对象，而值可以是任意类型。
   - WeakMap 中的键是弱引用的，即如果没有其他引用指向该键所对应的值，则键值对会被垃圾回收机制自动回收。
   - WeakMap 的键不能迭代，因此不能使用 for...of 循环遍历键或者使用 size 属性获取大小。
   - WeakMap 没有提供遍历和清空所有键值对的方法。
   - 示例用法：
     ```javascript
     const weakMap = new WeakMap();
     
     const key1 = {};
     const key2 = {};
     const value1 = "value1";
     const value2 = "value2";
     
     weakMap.set(key1, value1);
     weakMap.set(key2, value2);
     
     console.log(weakMap.get(key1)); // 输出 "value1"
     
     weakMap.delete(key2);
     
     console.log(weakMap.has(key2)); // 输出 false
     ```

总结：
- WeakSet 和 WeakMap 是一种弱引用集合类型，其中的对象或键是弱引用的，不会阻止垃圾回收机制回收它们。
- WeakSet 只能包含对象作为成员，而 WeakMap 的键必须是对象。
- WeakSet 和 WeakMap 不可迭代，没有提供遍历和清空所有元素或键值对的方法。
- 使用 WeakSet 和 WeakMap 可以避免内存泄漏问题，并且适用于需要临时存储对象或键值对的场景。
 */


/**
 * WeakMap 使用对象作为键的原因是，由于 WeakMap 是弱引用集合，它的键是弱引用的。
 * 只有对象才能被垃圾回收机制追踪和自动回收。基本数据类型（如数字、字符串等）没有垃圾回收机制追踪
 * 的能力，所以不能用作 WeakMap 的键。

关于为什么 WeakMap 不可遍历，这与其设计目标和实现方式有关。WeakMap 的设计目标之一
是提供一种轻量级的映射结构，但同时也要确保不会阻止对键或值进行垃圾回收。
为了满足这个目标，WeakMap 使用了一种特殊的内部实现方式，该方式导致了以下限制：

1. 键不可枚举：WeakMap 中的键是不可枚举的，这意味着无法通过 
for...of 循环或 Object.keys() 等方法来获取所有键。
2. 没有 size 属性：WeakMap 没有提供类似 Map 的 size 属性来获取集合中键值对的数量。
3. 无法直接遍历：由于没有办法获取所有键，也就无法直接遍历 WeakMap 中的键值对。

这些限制是为了确保 WeakMap 不会持有对对象或键的强引用，并且不会干扰垃圾回收的工作。
如果需要遍历键值对或获取集合的大小，可以考虑使用 Map 或其他适用的数据结构。

总结：
- WeakMap 使用对象作为键是因为只有对象才能被垃圾回收机制追踪和自动回收。
- WeakMap 不可遍历是为了确保它不会持有对键或值的强引用，并且不会干扰垃圾回收的工作。
这是出于设计目标和实现方式的考虑。
 */

/**
 * WeakMap 的特性决定了它在一些特定场景下非常有用。以下是一些常见的应用场景：

1. 私有数据存储：由于 WeakMap 中的键是弱引用的，可以将对象作为键来存储私有数据。这样，
在对象被垃圾回收时，对应的私有数据也会自动被清除，不会造成内存泄漏。

2. 缓存机制：使用 WeakMap 可以实现一个简单的缓存机制。将要缓存的数据作为值，
而使用对象作为键来关联数据和缓存。当对象被垃圾回收时，相应的缓存项也会被自动清除。

3. DOM 节点相关操作：在处理 DOM 节点时，WeakMap 可以用来保存额外的信息或状态，
并且不会干扰到原始 DOM 树结构。当节点从文档中移除并被垃圾回收时，相关信息也会自动被清除。

4. 防止内存泄漏：WeakMap 可以帮助避免内存泄漏问题。例如，在事件处理函数中将对象绑定到 
DOM 元素上时，可以使用 WeakMap 来关联对象和元素，并在元素移除后自动清除绑定。

需要注意的是，由于 WeakMap 的限制（如不可枚举、无法直接遍历等），在某些场景下可能需要权衡使用
 WeakMap 的方便性和功能的限制。

总结：
WeakMap 在私有数据存储、缓存机制、DOM 节点操作和防止内存泄漏等场景下非常有用。
它的特性使得它可以轻松地处理弱引用关联，确保不会干扰垃圾回收机制的工作。
 */