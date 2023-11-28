let hamburger = document.querySelector('.hamburger')
        let navMenu = document.querySelector('.navMenu')
        let logo = document.querySelector('.logo')
        let ul = document.querySelector('.ul')

        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active')
            hamburger.classList.toggle('active')
            ul.classList.toggle('active')
            logo.classList.toggle('active')
        })