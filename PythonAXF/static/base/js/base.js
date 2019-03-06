$(function () {
    // 字体大小自适应
    document.documentElement.style.fontSize = innerWidth / 320 * 16 + 'px';

    // 隐藏滚动条
    $('#content').width(innerWidth+20)
})