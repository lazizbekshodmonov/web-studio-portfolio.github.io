var navbarcollapse = document.getElementsByClassName('navbar-collapse')[0],
    navbtnremove = document.getElementById('nav-btn-remove'),
    navbtnadd = document.getElementById('nav-btn-add');
    // scrollnone = document.getElementsByTagName('body');

        navbtnadd.addEventListener('click', navbaraddd)
        navbtnremove.addEventListener('click', navbarremove)

    function navbaraddd (){
        document.body.classList.add('scroll-none')
        navbarcollapse.classList.add('display-block')
    }

    function navbarremove (){
        document.body.classList.remove('scroll-none')
        navbarcollapse.classList.remove('display-block')

    }