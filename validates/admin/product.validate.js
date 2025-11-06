module.exports.createPost =  (req, res, next) => {
    if(!req.body.title){
        req.flash("error", `Da xoa thanh cong san pham`);
        res.redirect("/admin/products/create");
        return;
    }
    // phải đưa ra phản hồi vì frontend đang đợi phản hồi về
    next();
}