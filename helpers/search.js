module.exports = (query) => {
    let objectSearch = {
        keyword: "",
        regex: ""
    }
    if(query.keyword){
        objectSearch.keyword = query.keyword;
        // cái này để xử lý chuỗi tìm kiếm không tìm kiếm theo mặc định
        const regex = new RegExp(objectSearch.keyword, "i");
        objectSearch.regex = regex;
    }
    return objectSearch;
}