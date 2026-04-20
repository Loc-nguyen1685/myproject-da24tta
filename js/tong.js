window.onload = function () {
    let soLuong = document.getElementsByClassName("sl");
    let donGia = document.getElementsByClassName("dg");
    let thanhTien = document.getElementsByClassName("tt");
    let tongtien = 0;

    for (let i = 0; i < soLuong.length; i++) {
        let sl = parseFloat(soLuong[i].innerHTML);
        let dg = parseFloat(donGia[i].innerHTML);

        let tt = sl * dg;
        thanhTien[i].innerHTML = tt;

        tongtien += tt;
    }

    document.getElementById("tongTien").innerHTML = tongtien;
};