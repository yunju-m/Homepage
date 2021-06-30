(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Router {
    nowPage = '';
    constructor({ pages }) {
        this.app = document.getElementById('app');

        window.onhashchange = () => {
            this.pages = pages;
            this.nowPage = window.location.hash.replace('#', '');
            console.log(this.nowPage);

            const page = this.pages.find((page) => page.path === this.nowPage);
            const Page = page.page;
            const currentPage = new Page({router: this});
            this.app.innerHTML = '';
            this.app.innerHTML += currentPage.render();
            currentPage.mount();
        };
    }

    push(pageName) {
        window.location.hash = pageName;
    }
}
module.exports=Router;
},{}],2:[function(require,module,exports){

const MainPage = require('./pages/MainPage');
const ActivityPage = require('./pages/ActivityPage');
const Router = require('./Router');

const pages = [
    { page: MainPage, path: 'main' },
    { page: ActivityPage, path: 'activity' }
];

const router = new Router({ pages });
},{"./Router":1,"./pages/ActivityPage":3,"./pages/MainPage":4}],3:[function(require,module,exports){
class ActivityPage {
    constructor({router}) {
        this.router = router;
    }

    mount() {
        const button = document.querySelector('.other-button');
        button.addEventListener('click', () => {
            this.router.push('main');
        });
    }

    render() {
        $(document).ready(function(){
            $("#activity").load("/");
                $("#activity").load("/build/activitypage.html");
                });
        return `<span>다른 페이지</span>
                <button type="button" class="other-button">Main Page</button>
                `
    }
}
// var app = Sammy(function(){this.get("#activity", function(){
//     $("#activity").load("/build/activitypage.html");
//     });
// });
// $(function (){
//     app.run()
// });
module.exports=ActivityPage;
},{}],4:[function(require,module,exports){
class MainPage {
    constructor({router}) {
        this.router = router;
    }

    mount() {
        const button = document.querySelector('.main-button');
        button.addEventListener('click', () => {
            this.router.push('activity');
        });
    }

    render() {
        return `<span>메인 페이지</span>
                <button type="button" class="main-button">Other Page</button>
                `;
    }
    
}
module.exports = MainPage;
},{}]},{},[2]);
