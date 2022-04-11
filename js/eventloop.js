async function foo() {
    console.log('foo')  // 4
}
async function bar() {
    console.log('bar start') // 3
    await foo() // await 阻断后面代码执行
    console.log('bar end') // 7
}
console.log('script start') // 1
setTimeout(function () {
    console.log('setTimeout') // 8
}, 0)

new Promise(function (resolve) {
    console.log('promise executor') // 2
    resolve();
}).then(function () {
    console.log('promise then') // 6
})
bar();
console.log('script end') // 5
