var listGoods = document.querySelector(".list-goods");
var goods = [
    {
        id: 1,
        name: "Tai nghe mèo",
        price: "1.000.000",
        amount: "10",
        description: "Tai nghe hình mèo dễ thương",
    },
    {
        id: 2,
        name: "Bàn phím cơ Leopold",
        price: "1.000.000",
        amount: "12",
        description: "Bàn phím cơ Leopold được sản xuất từ Hàn Quốc",
    },
    {
        id: 3,
        name: "Tai nghe mèo",
        price: "1.000.000",
        amount: "10",
        description: "Tai nghe hình mèo dễ thương",
    },
    {
        id: 4,
        name: "Tai nghe mèo",
        price: "1.000.000",
        amount: "10",
        description: "Tai nghe hình mèo dễ thương",
    },
    {
        id: 5,
        name: "Tai nghe mèo",
        price: "1.000.000",
        amount: "10",
        description: "Tai nghe hình mèo dễ thương",
    },
    {
        id: 6,
        name: "Tai nghe mèo",
        price: "1.000.000",
        amount: "10",
        description: "Tai nghe hình mèo dễ thương",
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
                <button onclick="editGoods(id)" class="btn btn-primary btn-edit" id="${good.id}">Sửa</button>
                <button onclick="deleteGoods(id)" class="btn btn-danger btn-delete" id="${good.id}">Xóa</button>
            </td>
        </tr>
        `
    });
    listGoods.innerHTML = list;
}
renderGoods();




function deleteGoods(id) {
    goods = goods.filter(function (good) {
        return good.id != id;
    });
    renderGoods();
}

