function la_so() {
    let num = document.getElementById("so").value;

    if (num.trim() === "" || isNaN(num)) {
        document.getElementById("kq").style.display = "block";
        document.getElementById("kq").innerHTML = "<span style='color:red'>Số nhập không hợp lệ!</span>";
        return false;
    }

    let n = parseInt(num);

    if (n < 1 || n > 9) {
        document.getElementById("kq").style.display = "block";
        document.getElementById("kq").innerHTML = "<span style='color:red'>Làm theo chỉ dẫn đi chớ😏</span>";
        return false;
    }

    return n; 
}

function in_bang_cc() {
    let n = la_so();

    // nếu sai thì dừng
    if (n === false) return;

    document.getElementById("kq").style.display = "block";

    let s = "";

    for (let i = 1; i <= 10; i++) {
        s += n + " x " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("kq").innerHTML = s;
}