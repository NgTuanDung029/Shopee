var listGoods = document.querySelector(".list-goods");
var goods = [
    {
        id: 1,
        name: "Tai nghe mèo",
        price: "499.000",
        amount: "10",
        description: "Tai nghe tai mèo Bluetooth Sunshine siêu cute, phiên bản bluetooth cực đỉnh. Phiên bản Sunshine, phiên bản mới nhất năm 2018 với chất lượng tốt hơn, đèn led đẹp hơn, chắc chắn sẽ khiến bạn nổi bật hơn bao giờ hết, mang lại cảm giác nghe nhạc sung sướng hơn bao giờ hết.",
    },
    {
        id: 2,
        name: "Bàn phím cơ Leopold",
        price: "3.270.000",
        amount: "12",
        description: "Bàn phím cơ Leopold được sản xuất từ Hàn Quốc. Phiên bản không dây với kết nối: Bluetooth 5.1 / Dây USB-C. Keycap chất liệu PBT Doubleshot siêu bền. Phù hợp với người dùng thích sự đơn giản, cần cảm giác gõ tốt nhất.",
    },
    {
        id: 3,
        name: "Robot hút bụi Xiaomi",
        price: "1.000.000",
        amount: "10",
        description: "- Thiết kế nhỏ gọn, màu trắng tinh tế có thể vượt vật cản lên tới 2 cm, di chuyển khéo léo giúp làm sạch hiệu quả. Vừa hút vừa lau nhà tiện dụng. ",
    },
    {
        id: 4,
        name: "Giày Jordan 1 High Panda, Giày Thể Thao JD1 Cao Cổ Màu Đen, Da Bò Cao Cấp Full Size Nam Nữ | JDD002",
        price: "1.000.000",
        amount: "10",
        description: "Giày Jordan 1 High Panda, Giày Thể Thao JD1 Cao Cổ Màu Đen, Da Bò Cao Cấp Full Size Nam Nữ kiểu dáng hiện đai",
    }, 
    {
        id: 5,
        name: "Nhiệt Kế Microlife Hồng Ngoại Đo Trán FR1MF1 Thụy Sỹ",
        price: "1.000.000",
        amount: "10",
        description: "Dải đo (chế độ đo nhiệt độ cơ thể): 32.0℃~42.5℃/89.6℉~108.5℉.",
    },
]
function renderGoods() {
    var list = "";
    goods.forEach(function (good) {
        list += `
        <tr>
            <td>${good.id}</td>
            <td>${good.name}</td>
            <td>${good.price}</td>
            <td>${good.amount}</td>
            <td>${good.description}</td>
            <td>
                <a href = "#goods-managerment"><button onclick="editGoods(id)" class="btn btn-primary btn-edit" id="${good.id}">Sửa</button></a>
                <button onclick="deleteGoods(id)" class="btn btn-danger btn-delete" id="${good.id}">Xóa</button>
            </td>
        </tr>
        `
    });
    listGoods.innerHTML = list;
}
renderGoods();

// add goods
var nameGoods = document.querySelector("input[name=name]");
var priceGoods = document.querySelector("input[name=price]");
var amountGoods = document.querySelector("input[name=amount]");
var descriptionGoods = document.querySelector("input[name=description]");
var create = document.querySelector("#create");

create.addEventListener("click", addGoods);

function addGoods() {
    var newGoods = {
        id: goods.length + 1,
        name: nameGoods.value,
        price: priceGoods.value,
        amount: amountGoods.value,
        description: descriptionGoods.value,
    };
    goods.push(newGoods);
    renderGoods();
}
// delete goods
function deleteGoods(id) {
    goods = goods.filter(function (good) {
        return good.id != id;
    });
    renderGoods();
}
//edit goods
var update = document.querySelector("#update");

function editGoods(id) {
    var editGoods = goods.find(function (good) {
        return good.id == id;
    });
    nameGoods.value = editGoods.name;
    priceGoods.value = editGoods.price;
    amountGoods.value = editGoods.amount;
    descriptionGoods.value = editGoods.description;
    update.addEventListener("click", function () {
        editGoods.name = nameGoods.value;
        editGoods.price = priceGoods.value;
        editGoods.amount = amountGoods.value;
        editGoods.description = descriptionGoods.value;
        renderGoods();
    });
}
