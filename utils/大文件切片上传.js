// https://juejin.cn/post/6956172874348986382
// https://juejin.cn/post/7027674099400851464

// 1.什么是分片上传 分片上传，就是将所要上传的文件，按照一定的大小，
// 将整个文件分隔成多个数据块（我们称之为Part）来进行分别上传，
// 上传完之后再由服务端对所有上传的文件进行汇总整合成原始的文件。

// 2.分片上传的场景
//
// 1.大文件上传
// 2.网络环境环境不好，存在需要重传风险的场景


const calculateHashWorker = async ()=>{
    return new Promise(resolve => {
        this.worker = new Worker('./hash.js');
        this.worker.postMessage({chunks:this.chunks}) //文件通过hash标识唯一性
        this.worker.onmessage = e =>{
            const {progress,hash} = e.data
            this.hashProgress = Number(progress.toFixed(2)) //展示计算hash进度条
            if (hash){
                resolve(hash)
            }
        }
    })
}

const uoloadFile = async ()=>{
    this.chunks = this.createFileChunk(this.file) //获取文件切片后的数组
    const hash = await this.calculateHashWorker() //计算md5
}

//切片上传
const createFileChunk = (file) =>{
    const chunks = []
    let cur = 0
    const CHUNK_SIZE = 1024 * 1024 *1 //把文件分块指定大小
    while (cur < file.size){
        chunks.push({
            index:cur,
            file:file.slice(cur,cur + CHUNK_SIZE)
        })
        cur += file.size
    }
    return chunks
}

const uploadChunks = async (uploadList= []) =>{
    const list = this.chunks.filter(chunks => uploadList.indexOf(chunk.hash) == -1).map(({chunk, hash,index},i) =>{
        const form = new FormData()
        form.append('chunk',chunk)
        form.append('hash',hash)
        form.append('filename',this.container.file.name)
        form.append('filehash',this.container.hash)
        return {form,index,status: Status.wait}
    }).map(({form,index})=>{
        request({
            url:'/upload',
            data: form,
            onprogress:this.createProgresshandler(this.chunks[index]),
            requestList:this.requestList
        })
    })

    await Promise.all(list)
}
