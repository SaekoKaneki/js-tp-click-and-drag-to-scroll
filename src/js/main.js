// document.documentElement.classList.add('js-enabled');
//
// document.querySelector('.items').addEventListener('mousedown',(event)=>{
//     document.querySelector('.items').scrollLeft;
// })
// document.querySelector('.items').addEventListener('mouseup',(event)=>{
//     document.querySelector('.items');
// })
(function () {
    const ScrollHorizontal = {
        init() {
            this.scroll = document.querySelector('.items');
            this.ClickEnfoncer = false;
            this.deplacementX = 0;
            this.scrollLeft = 0;
            window.document.documentElement.classList.add('js-enabled');
            this.scroll.addEventListener('mousedown', event => {
                this.ClickEnfoncer = true;
                this.scroll.classList.add('active');
                // offsetLeft c'est le déplacement
                this.deplacementX = event.pageX - this.scroll.offsetLeft;
                this.scrollLeft = this.scroll.scrollLeft;
            });

            this.scroll.addEventListener('mouseleave', (event) => {
                this.ClickEnfoncer = false;
                this.scroll.classList.remove('active');
            });

            this.scroll.addEventListener('mouseup', (event) => {
                this.ClickEnfoncer = false;
                this.scroll.classList.remove('active');
            });

            this.scroll.addEventListener('mousemove', event => {
                if (!this.ClickEnfoncer) return; // stop the fn from running
                event.preventDefault();
                const x = event.pageX - this.scroll.offsetLeft;
                const walk = (x - this.deplacementX) * 3;
                this.scroll.scrollLeft = this.scrollLeft - walk;
            });
        },
    }
    ScrollHorizontal.init();
})();