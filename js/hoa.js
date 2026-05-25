const productList = [
    {id: "01", name: "Hạt giống hoa hồng Pháp", price:250000, image:"../assets/images/rose.jpg", productLink:"https://hatgiongphuongnam.com/hat-giong-hoa-152.html"},
    {id: "02", name: "Hạt Giống Hoa Cúc Lá Nhám Cắt Cành Hồng Kép", price:350000, image:"../assets/images/hoacuc.jpg", productLink:"https://hatgiongphuongnam.com/hat-giong-hoa-152.html"},
    {id: "03", name: "Hoa Tulip Hà Lan", price:250000, image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "04", name: "Hạt giống hoa hướng dương", price:250000, image:"../assets/images/rose.jpg", productLink:""},
    {id: "05", name: "Hạt giống hoa hồng Pháp", price:250000, image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "06", name: "Hạt giống hoa hồng Pháp", price:250000, image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "07", name: "Hạt giống hoa hồng Pháp", price:250000, image:"../assets/images/rose.jpg", productLink:"product-detail.html"},
    {id: "08", name: "Hạt giống hoa hồng Pháp", price:250000, image:"../assets/images/rose.jpg", productLink:"product-detail.html"}
];
function addProduct(id, name, price, image, link)
{
     //Khai báo và tạo một node div có class là product-item
		const productItem = document.createElement("div");
		productItem.setAttribute("class", "product-item col");
		
		//Tạo khung chứa 1
		const productDiv1 = document.createElement("div");
		productDiv1.setAttribute("class", "product-image");
		
		//Tạo hình và gán vào div1
		//Tạo
		const productImage = document.createElement("img");
		productImage.setAttribute("src", image);
		productImage.setAttribute("alt", name);
        productImage.setAttribute("class", "img-thumbnail img-fluid");

		//Gán
		productDiv1.appendChild(productImage);


        //Tạo khung chứa 2
        const productDiv2 = document.createElement("div");
		productDiv2.setAttribute("class", "product-info");

        //Tạo paragraph thư nhất
        const productName = document.createElement("p");
        const productNameText = document.createTextNode(name);
        productName.appendChild(productNameText);

         //Tạo paragraph thư hai
        const productPrice = document.createElement("p");
        const productPriceText = document.createTextNode(price);
        productPrice.appendChild(productPriceText);

         //Tạo link
        const productLink = document.createElement("a");
        const productLinkText = document.createTextNode("Xem chi tiết");
        productLink.appendChild(productLinkText);
      //  productLink.setAttribute("href", link+"?id="+id);
        productLink.setAttribute("href", link);
        productLink.setAttribute("target", "_blank");

        //Gán vào khung chứa 2
        productDiv2.appendChild(productName);
        productDiv2.appendChild(productPrice);
        productDiv2.appendChild(productLink);

		//Gán vào item
		productItem.appendChild(productDiv1);
        productItem.appendChild(productDiv2);

		//Gán vào khung chứa sản phẩm - product-list
        const productList = document.getElementById("product-list");
        productList.appendChild(productItem);


        //Tạo khung chứa của trang
        const myContainer = document.getElementById("container");
        	
        myContainer.appendChild(productList);
// Tạo nút thêm giỏ hàng
const addButton = document.createElement("button");
addButton.innerText = "Thêm vào giỏ";

addButton.setAttribute(
    "onclick",
    `addToCart('${id}','${name}',${price},'${image}')`
);

addButton.setAttribute("class","add-cart-btn");

// Gán vào productDiv2
productDiv2.appendChild(addButton);
}
// ===== GIỎ HÀNG =====
let cart = [];

// ===== THÊM SẢN PHẨM =====
function addToCart(id, name, price, image){

    // Kiểm tra sản phẩm đã tồn tại chưa
    const check = cart.find(item => item.id === id);

    if(check){
        check.quantity += 1;
    }else{
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    updateCartUI();
}

// ===== XÓA SẢN PHẨM =====
function removeFromCart(id){

    cart = cart.filter(item => item.id !== id);

    updateCartUI();
}

// ===== CẬP NHẬT GIAO DIỆN =====
function updateCartUI(){

    // Hiển thị số lượng trên icon
    const cartCount = document.querySelector(".cart-count");

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    cartCount.innerText = totalQuantity;

    // Hiển thị danh sách sản phẩm
    const cartPopup = document.querySelector(".cart-products");

    cartPopup.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(item => {

        totalPrice += item.price * item.quantity;

        cartPopup.innerHTML += `
        
            <div class="cart-item">

                <img src="${item.image}" width="60">

                <div class="cart-info">
                    <h4>${item.name}</h4>
                    <p>${item.quantity} x ${item.price.toLocaleString()}đ</p>
                </div>

                <button onclick="removeFromCart('${item.id}')">
                    ❌
                </button>

            </div>

        `;
    });

    // Tổng tiền
    document.querySelector(".cart-total-price").innerText =
        totalPrice.toLocaleString() + "đ";
}