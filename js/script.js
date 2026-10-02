const side = document.getElementById('side');
const toggle = document.getElementById('close');

// Collapse to icon-only rail / expand back
toggle.onclick = () => {
    const isMini = side.classList.toggle('mini');
    toggle.setAttribute('aria-label', isMini ? 'Expand Sidebar' : 'Collapse Sidebar');
};

// Highlight the clicked nav item (except "New Chat")
document.querySelectorAll('nav .item:not(.new)').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('nav .item.on').forEach(el => el.classList.remove('on'));
        btn.classList.add('on');
    };
});