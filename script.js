const SideBar = document.querySelector('.sidebar');
const menuBtn = document.getElementById("menubtn");
const closeBtn = document.querySelector('.close-btn');

function showSideBar() {
    SideBar.style.display = 'flex';
}

function hideSideBar() {
    SideBar.style.display = 'none';
}