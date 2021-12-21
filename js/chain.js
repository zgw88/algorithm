// 链式调用
function mychains(word){
    let words = word
    function chain(word){
        console.log(word,'word 6')
        words += ' -> ' + word
        return chain
    }

    chain.valueOf = function (){
        return words
    }

    return chain
}
const a = mychains('ni')('hao').valueOf()

console.log(a,'valof')

//
let ChainsMy = {
    set: (name)=> {
        this.value = name || 'nihao'
        return ChainsMy
    },
    get: () =>{
        console.log(this.value,'value 27')
        return ChainsMy
    },
    action: (like) =>{
        console.log(like,'like 31')
        return like || 'aichi'
    }
}

ChainsMy.set('hh').get().action('meinv')
