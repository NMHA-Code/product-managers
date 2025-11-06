// Button status

const buttonStatus = document.querySelectorAll("[button-status]");
if (buttonStatus.length > 0) {
    let url = new URL(window.location.href);
    buttonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if (status) {
                url.searchParams.set("status", status);
            }
            else {

                url.searchParams.delete("status");
            }
            window.location.href = url.href;
        });
    })
}

// form search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        }
        else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    })
}

// pagination

const buttonPagination = document.querySelectorAll("[button-pagination]");
if (buttonPagination) {
    let url = new URL(window.location.href);
    buttonPagination.forEach((button) => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");
            url.searchParams.set("page", page);
            window.location.href = url.href;
        })
    })
}

// Checkbox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
    const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
    const inputId = checkboxMulti.querySelectorAll("input[name='id']");
    inputCheckAll.addEventListener("click", () => {
        if (inputCheckAll.checked) {
            inputId.forEach(input => {
                input.checked = true;
            });
        }
        else {
            inputId.forEach(input => {
                input.checked = false;
            })
        }
    })

    inputId.forEach(input => {
        input.addEventListener("click", () => {
            const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;
            if (countChecked == inputId.length) {
                inputCheckAll.checked = true;
            }
            else {
                inputCheckAll.checked = false;
            }
        })
    })
}


// form change multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
    formChangeMulti.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkboxMulti = document.querySelector("[checkbox-multi]");
        const InputChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");
        const typeChange = e.target.elements.type.value;
        if(typeChange == 'delete-all'){
            const isComfirm = confirm("Ban co chac muon xoa san pham nay");
            if(!isComfirm){
                return;
            }
        }
        if(InputChecked.length > 0){
            let ids = [];
            const inputIds = formChangeMulti.querySelector("input[name='ids']");
            InputChecked.forEach(input => {
                const id = input.value;
                if(typeChange == 'change-position'){
                    const position = input.closest('tr').querySelector("input[name='position']").value;
                    ids.push(`${id}-${position}`)
                }
                else{
                        ids.push(id);
            
                }
            })
            inputIds.value = ids.join(', ');
            formChangeMulti.submit();
        }
        else{
            alert("vui long chon it nhat 1 ban ghi");
        }
    })
}

// Show alert

const Showalert = document.querySelector("[show-alert]");
if(Showalert){
    const time = Showalert.getAttribute("data-time");
    const close = document.querySelector("[close-alert]");
    setTimeout(()=>{
        Showalert.classList.add("alert-hidden");
    }, time);
    close.addEventListener("click", ()=>{
        Showalert.classList.add("alert-hidden");
    })
}

// Upload anh preview hinh anh
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage){
    const uploadImageInput = document.querySelector("[upload-image-input]");
    const uploadImagePreview = document.querySelector("[upload-image-preview]");
    uploadImageInput.addEventListener("change", (e)=>{
        const file = e.target.files[0];
        if(file){
            uploadImagePreview.src= URL.createObjectURL(file);
        }
        // muốn xóa thì tìm đến thuộc tính rồi lấy tên của nó rồi .value xong xét thành '' là nó mất đi nhé (cái này làm thêm nếu muôn)
    })
}