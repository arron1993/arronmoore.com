const PAGES = ['/about', '/home', '/experience', '/hobbies', '/showcase']

$(document).ready(() => {
    $(".nav-link").click(e => {
        e.preventDefault();
        let elem = $(e.currentTarget);

        loadPage(elem.attr("href"));

        $(".nav-item.active").removeClass('active');
        elem.parent().addClass('active');

    })

    function setHash(hash) {
        window.location.hash = hash;
    }

    function getHash() {
        let hash = window.location.hash.replace('#', '');
        return hash === "" ? "/home" : hash;
    }

    function loadPage(href) {
        console.log(href);
        if (PAGES.includes(href)) {
            setHash(href);
            $("#content").load(href + ".html").hide().fadeIn();
        }
    }


    loadPage(getHash());
});
