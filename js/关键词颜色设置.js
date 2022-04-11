/**
 * 将搜索关键词更换颜色
 */
export const changeKeyWordsColor = (str, keyword, color) => {
    if (!!str && !!keyword) {
        const subStr = `/${keyword}/g`;
        const replaceStr = str.replace(eval(subStr), `<span style='color: ${color}'>${keyword}</span>`);

        return replaceStr;
    }
};

// Vue
// <span v-html="changeKeyWordsColor(item.name,keyWords,KEY_WORDS_COLOR)"></span>

// react
// <span dangerouslySetInnerHTML={{__html: changeKeyWordsColor(item?.name,props.searchKey,KEY_WORDS_COLOR)}}></span>
