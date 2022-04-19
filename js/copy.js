const copyOrderNumber = () => {
    //选中节点
    const copyEle = document.querySelector('.copy-emial')
    //创建Range对象（某个区域内连续的内容）
    const range = document.createRange()
    //清除页面中已有的selection
    window.getSelection().removeAllRanges()
    //选中需要复制的节点
    range.selectNode(copyEle)
    //执行选中元素
    window.getSelection().addRange(range)
    //执行 copy 操作
    const copyStatus = document.execCommand('Copy')
    // 对成功与否定进行提示
    if (copyStatus) {
        message.success('复制成功')
    } else {
        message.error('复制失败')
    }
    // 移除选中的元素
    window.getSelection().removeAllRanges()
}
