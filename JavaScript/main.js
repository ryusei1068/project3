let config = {
    userpage : document.getElementById("userpage"),
    firstPage : document.getElementById("firstpage"),
    confirm : document.getElementById("confirm"),
    insert : document.getElementById("insert"),
    mainPage : document.getElementById("main-page"),
}

class User{
    constructor(username, password, assets=50000, age=20, days=1) {
        this.username = username;
        this.password = password;
        this.assets = assets;
        this.age = age;
        this.days = days;
    }


}

let userlist = [
    new User("Davis", "200", 490300, 28),
    new User("Durant", "300", 200000, 24),
    new User("James", "000", 100000, 31),
    new User("Curry", "100", 500000, 25),
];

let userManagement = {
    "Davis" : new User("Davis", "200", 4903000000, 68),
    "Durant" : new User("Durant", "300", 200000000, 54),
    "James" : new User("James", "000", 10000000, 48),
    "Curry" : new User("Curry", "100", 5000000, 35),
};


class Product{
    constructor(itemname, price, maxpurchase, feature, imgURL, per , number_of_possessions=0, income=0
        ) {
        this.itemname = itemname;
        this.price = price;
        this.maxpurchase = maxpurchase;
        this.feature = feature;
        this.imgURL = imgURL;
        this.per = per;
        this.number_of_possessions = number_of_possessions;
        this.income = income;
    }

    incomeCalculation() {
        if (this.feature < 1) {
            this.income = (this.number_of_possessions * this.price) * (1 + this.feature * 100 / 10000);
        }
        else {
            this.income = this.number_of_possessions * this.feature;
        }
    }
};

// this.itemname = itemname;
// this.price = price;
// this.maxpurchase = maxpurchase;
// this.feature = feature;
// this.imgURL = imgURL;
// this.per = per;
// this.number_of_possessions = number_of_possessions;
// this.income = income;
// 二次元配列　<ProductObj>　

let ProductList = 
[
    [
        new Product
        (
            "Flip machine", 
            15000, 
            500, 
            25, 
            "https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
            "click"
        ),
        new Product
        (
            "Lemonade Stand", 
            30000, 
            1000, 
            30,
            "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
            'sec'
        ),
        new Product
        (
            "Ice Cream Truck", 
            100000, 
            500, 
            120,
            "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png",
            "sec"
        ),
    ],
    [
        new Product
        (
            "House", 
            20000000, 
            100,  
            32000,
            "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
            "sec"
        ),
        new Product
        (
            "Town House", 
            40000000, 
            100,  
            64000,
            "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
            "sec"
        ),
        new Product
        (
            "Mansion", 
            250000000, 
            20, 
            500000,
            "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png",
            "sec"
        ),
    ],
    [
        new Product
        (
            "Industrial Space", 
            1000000000, 
            10, 
            2200000,
            "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
            "sec"
        ),
        new Product
        (
            "Hotel Skyscraper", 
            10000000000, 
            5, 
            25000000,
            "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
            "sec"
        ),
        new Product
        (
            "Bullet-Speed Sky Railway", 
            10000000000000, 
            1, 
            30000000000,
            "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
            "sec"
        )
    ],
    [
        new Product
        (
            "ETF Stock", 
            300000, 
            "∞",
            0.1,
            "https://media.istockphoto.com/vectors/stocks-icon-vector-on-white-background-stocks-trendy-filled-icons-vector-id1095629146?k=6&m=1095629146&s=170667a&w=0&h=8OhmliXEQNKBmmV3PyC5ZUft8zmPHQY3IhTEbXLgmIU=",
            "sec"
        ),
        new Product
        (
            "ETF Bonds", 
            300000, 
            "∞",
            0.07,
            "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
            "sec",
        ),
    ],
]

class UserOperation {

    static clickYesOrNo(){
        document.getElementById("yes").addEventListener("click", function(){
            ViewController.displayNone(config.confirm);
            config.firstPage.append(ViewController.loginpage(1));
        })

        document.getElementById("no").addEventListener("click", function(){
            ViewController.changeClassEle(null, "bg-dark", config.userpage);
            ViewController.displayNone(config.firstPage);
            config.userpage.append(ViewController.usertable(userlist));
            UserOperation.chooseUser();
        })
    }

    static chooseUser() {
        let tbodyList = document.querySelectorAll("tbody > tr");
        let username = "";
        tbodyList.forEach(element=>element.addEventListener("click", function() {
            ViewController.changeClassEle(null, "bg-white", config.userpage);
            ViewController.displayNone(config.confirm);
            ViewController.displayNone(document.querySelectorAll(".usertable")[0]);
            ViewController.displayBlock(config.firstPage);

            username = element.querySelectorAll(".username")[0].innerHTML;
            config.firstPage.append(ViewController.loginpage(0));
            config.firstPage.querySelectorAll(`input[name="username"]`)[0].value = username;
        }))
        
    }


    static getUserInfo(flag){
        let form = document.getElementById("userinfo");
        let username = form.querySelectorAll(`input[name="username"]`).item(0).value;
        let password = form.querySelectorAll(`input[name="password"]`).item(0).value;

        if (flag) {
            let user = new User
            (
                username,
                password
            );
            /*
            新規ユーザー登録
            */
            userlist.push(user);
            userManagement[username] = user;
            
            /* 
            main-page 起動
            */
            ViewController.displayNone(config.userpage);
            ViewController.buildUpMainPage(userManagement[username]);
            // config.insert.append(ViewController.itemCard(ProductList[0], 0));
            UserOperation.pushNavBtn(config.mainPage);
            UserOperation.pushItemCard(config.mainPage)
        }
        else {
            if (UserManagement.checkUser(userManagement, username, password)){

                /* 
                main-page 起動
                */
                ViewController.displayNone(config.userpage);
                ViewController.buildUpMainPage(userManagement[username]);
                // config.insert.append(ViewController.itemCard(ProductList[0], 0))
                UserOperation.pushNavBtn(config.mainPage);
                UserOperation.pushItemCard(config.mainPage);
            }
            else {
                alert("Either the user ID or password is invalid");
            }
        }
    }


    static pushNavBtn() {
        let button = document.querySelectorAll(".page-item > button");
        button.forEach(element => {
            element.addEventListener("click", function() {
                let value = parseInt(element.getAttribute("value"));
                const insert = document.querySelectorAll("#insert")[0];
                ViewController.displayBlock(insert);
                ViewController.resetInnnerHtml(insert);
                insert.append(ViewController.itemCard(ProductList[value-1], value - 1));
                UserOperation.pushItemCard();
                ViewController.resetInnnerHtml(document.querySelectorAll("#parchase")[0])
            })
        });
    }

    static pushItemCard() {
        let card = document.querySelectorAll(".card");
        card.forEach(element => {
            element.addEventListener("click", function() {
                let index = element.querySelectorAll(".itemCards > .card-body > .card-title")[0].dataset.id
                let inIndex = element.querySelectorAll(".itemCards > .card-body > .table-bordered")[0].dataset.id

                const insert = document.querySelectorAll("#insert")[0];

                console.log(insert);
                ViewController.displayNone(insert)
                const purchasePage = document.querySelectorAll("#parchase")[0]
                ViewController.displayBlock(purchasePage);
                purchasePage.append(ViewController.purchasePage(ProductList, index, inIndex));

                UserOperation.backBtn(purchasePage);
            })
        })
    }

    static backBtn(purchasePage){
        let btn = purchasePage.querySelectorAll(".back-btn")[0];
        btn.addEventListener("click", function(){
            const insert = document.querySelectorAll("#insert")[0];
            ViewController.displayBlock(insert);
            ViewController.resetInnnerHtml(purchasePage);
        })
    }

};

class ViewController {

    static displayNone(ele) {
        ele.classList.add("d-none");
        ele.classList.remove("d-block");
    }
    static displayBlock(ele) {
        ele.classList.add("d-block");
        ele.classList.remove("d-none");
    }

    static changeClassEle(blotout, input, ele) {
        ele.classList.add(input);
        ele.classList.remove(blotout);
    }

    static resetInnnerHtml(ele) {
        ele.innerHTML = "";
    }

    static itemCard(ProductObjList, index) {
        let container = document.createElement('div');
        let i = 0;
        ProductObjList.forEach(productObj=> {
            console.log(i)
            let cardCon = document.createElement('div');
            cardCon.classList.add("card", "m-3", "itemCards");

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "d-flex", "align-items-center", "row");
            cardBody.innerHTML += 
            `
            <div class="card-title img col-3" data-id="${index}">
                <img src="${productObj.imgURL}" alt="productImg">
            </div>
            <table class="table table-bordered" data-id="${i}">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>trade name</th>
                    <th>price</th>
                    <th>per</th>
                    <th>acquisition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"><i class="far fa-check-circle"></i></th>
                    <td>${productObj.itemname}</td>
                    <td>¥${new Intl.NumberFormat().format(productObj.price)}</td>
                    <td>+${new Intl.NumberFormat().format(productObj.income)} / ${productObj.per}</td>
                    <td>${productObj.number_of_possessions}</td>
                    </tr>
                </tbody>
            </table>
            `
            cardCon.append(cardBody);   
            container.append(cardCon);
            i++;
        })
        console.log(this.itemCard)
        return container;
    }

    static backNextBtn(backString, nextString){
        let container = document.createElement("div");

        container.innerHTML =
        `
        <div class="d-flex justify-content-center">
            <div class="m-2">
                <button class="btn btn-outline-primary back-btn">${backString}</button>
            </div>
            <div class="m-2">
                <button class="btn btn-primary next-btn">${nextString}</button>
            </div>
        </div>
        `
        return container;
    }

    static purchasePage(ProductObjList, index, inIndex) {
        let productObj = ProductObjList[index][inIndex];

        let card = document.createElement('div');
        card.classList.add("card", "m-3", "bg-light");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-felx", "align-items-center", "row");

        cardBody.innerHTML = 
        `
        <div class="card-title img col-3" data-id="${index}">
            <img src="${productObj.imgURL}" alt="productImg">
        </div>
        <table class="table table-bordered" data-id="${inIndex}">
            <thead>
                <tr>
                    <th>#</th>
                    <th>trade name</th>
                    <th>price</th>
                    <th>max purchase</th>
                    <th>per</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><i class="far fa-check-circle"></i></th>
                    <td>${productObj.itemname}</td>
                    <td id="item-price">¥${productObj.price}</td>
                    <td id="max-purchase">${productObj.maxpurchase}</td>
                    <td>${productObj.feature} / ${productObj.per}</td>
                </tr>
            </tbody>
        </table>
        <div class="m-2">
            <p class="font-monospace m-1">How Many would you like to purchase?</p>
            <input class="col-12" type="number" style="text-align: right;">
            <div class="d-flex justify-content-end pt-3 m-2">
                <h4 id="total-amount">Total:${0}</h4>
            </div>
        </div>
        `
        cardBody.append(this.backNextBtn("Go Back", "Purchase"));
        card.append(cardBody);

        return card;
    }

    
    static usertable(userlist) {
        let container = document.createElement("div");
        container.classList.add("container", "usertable");
        let table = document.createElement("table");
        table.classList.add("table", "table-hover");

        container.innerHTML =
        `
        <h2 class="text-center text-white">
            Clicker Empire Game Users
        </h2>
        <p class="text-center font-monospace text-white mt-4">Please Choose...</p>
        `
    
        table.innerHTML = 
        `
        <thead class="thead-dark text-white">
        <tr>
            <th>#</th>
            <th>UserName</th>
            <th>Age</th>
            <th>Assets</th>
        </tr>
        </thead>
        `
    
        let tbody = document.createElement("tbody");
        tbody.classList.add("text-white");
        for (let i = 0; i < userlist.length; i++) {
            tbody.innerHTML += 
            `
            <tr class=${i+1}>
                <th scope="row">${i+1}</th>
                <td class="username">${userlist[i].username}</td>
                <td>${userlist[i].age}</td>
                <td>${new Intl.NumberFormat().format(userlist[i].assets)}</td>
            </tr>
            `
        }
        table.append(tbody);
        container.append(table);
        return container;
    }

    static loginpage(flag) {
        let btnname = flag ? "SignUp" : "Login";
        let container = document.createElement("div");
        container.innerHTML = 
        `
        <form action="" id="userinfo" onsubmit="UserOperation.getUserInfo(${flag}); event.preventDefault()">
            <div class="input-group mt-3">
                <input type="text" placeholder="UserName" class="form-control" name="username" value="">
            </div>
            <div class="input-group mt-3">
                <input type="password" placeholder="PassWord" class="form-control" name="password">
            </div>
    
            <div class="d-flex col-12 justify-content-end mt-3">
                <div class="col-5">
                    <button type="submit" class="btn btn-primary col-12" id="login">${btnname}</button>
                </div>
            </div>
        </form>
        `
        return container;
    }

    static userCard(User) {
        let div = document.createElement("div");
        div.classList.add("col-12" ,"col-lg-6", "d-flex", "flex-column", "align-items-center");

        let table = document.createElement("table");
        table.classList.add("table", "table-bordered", "text-white");

        table.innerHTML = 
        `
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Assets</th>
                <th>Age</th>
                <th>Days</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><i class="far fa-user"></i></th>
                <td>${User.username}</td>
                <td>${new Intl.NumberFormat().format(User.assets)}</td>
                <td>${User.age}</td>
                <td>${User.days}</td>
            </tr>
        </tbody>
        `

        div.append(table);
        div.append(ViewController.insertAndPurchaseblock())
        return div;
    }

    static insertAndPurchaseblock() {
        let div = document.createElement("div");
        div.classList.add("bg-dark");
        div.innerHTML = 
        `
            <div class="list-group" id="insert"></div>
            <div id="parchase" class=""></div>
        `
        return div;
    }

    static siteMap() {
        let nav = document.createElement("nav");

        nav.innerHTML = 
        `
        <ul class="pagination">
            <li class="page-item m-1">
                <button type="button" class="btn btn-outline-light"  value="1">1</button>
            </li>
            <li class="page-item m-1">
                <button type="button" class="btn btn-outline-light" value="2">2</button>
            </li>
            <li class="page-item m-1">
                <button type="button" class="btn btn-outline-light" value="3">3</button>
            </li>
            <li class="page-item m-1">
                <button type="button" class="btn btn-outline-light" value="4">4</button>
            </li>
        </ul>
        `
        return nav;
    }

    static navBar() {
        let navCon = document.createElement("div");
        let nav = document.createElement("nav");
        nav.classList.add("navbar", "navbar-dark", "bg-dark");

        nav.innerHTML = 
        `
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        `

        let div = document.createElement("div");
        div.classList.add("collapse");
        div.setAttribute("id", "navbarToggleExternalContent");
        div.innerHTML =
        `
        <div class="bg-dark p-4">
            <div><button class="btn btn-bg-dark text-white" id="save">SAVE</button></div>
            <div><button class="btn btn-bg-dark text-white" id="LogOut">LogOut</button></div>
            <div><button class="btn btn-bg-dark text-white" id="History">History</button></div>
        </div>
        `

        navCon.append(nav);
        navCon.append(div);
        return navCon;
    }

    static clickburgerBox() {
        let div = document.createElement("div");
        div.classList.add("col-12", "col-lg-6", "d-flex");

        let innerDiv = document.createElement("div");
        innerDiv.classList.add("col-12", "d-flex", "justify-content-center", "justify-content-center",  "align-items-center", "flex-column", "bg-dark", "font-monospace");

        innerDiv.innerHTML = 
        `
        <div class="bg-light d-flex justify-content-center align-items-center flex-column">
            <h5>Burgers</h5>
            <p>$25 per Clicke</p>
            <div class="countBurger d-flex justify-content-center align-items-center flex-column">
                <h5 class="burgercount text-info">Clicke Here ↓↓↓↓</h5>
                <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" class="burgerclick burgerimg py-2 hover" id="burgerclick">
            </div>
        </div>
        `
        div.append(innerDiv);

        return div;
    }

    static containerRow() {
        let div = document.createElement("div");
        div.classList.add("container","mt-3");
        div.innerHTML = 
        `
            <h2 class="text-white text-center">Clicker Empire Game</h2>
            <div class="row mt-3"></div>
        `
        return div;
    }

    static buildUpMainPage(User) {
        const mainpage = config.mainPage;
        mainpage.append(ViewController.navBar());
        mainpage.append(ViewController.containerRow());

        let classRow = mainpage.querySelectorAll(".container > .row")[0];
        classRow.append(ViewController.userCard(User));
        classRow.append(ViewController.itemCard(ProductList[0], 0));
        classRow.append(ViewController.clickburgerBox());
        console.log(classRow);

    }
    
}

class UserManagement {

    static checkUser(userManagement, username, password) {
        let user = userManagement[username];
        if (user.password != password) {
            return false;
        }
        else {
            return true;
        }

    }
} 



UserOperation.clickYesOrNo();

/*
`
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
            <div><button class="btn btn-bg-dark text-white" id="save">SAVE</button></div>
            <div><button class="btn btn-bg-dark text-white" id="LogOut">LogOut</button></div>
            <div><button class="btn btn-bg-dark text-white" id="History">History</button></div>
        </div>
    </div>

    <div class="container mt-3">
        <h2 class="text-white text-center">Clicker Empire Game</h2>
        <div class="row mt-3">
            <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
                <table class="table table-bordered text-white">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Assets</th>
                        <th>Age</th>
                        <th>Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><i class="far fa-user"></i></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        </tr>
                    </tbody>
                </table>   
                <div class="bg-light">
                    <div class="list-group" id="insert">
                        
                    </div>
                    <div id="parchase" class="">

                    </div>
                </div>
                <nav aria-label="Page navigation example" class="mt-3" id="navBtn">
                    <ul class="pagination">
                        <li class="page-item m-1">
                            <button type="button" class="btn btn-outline-light"  value="1">1</button>
                        </li>
                        <li class="page-item m-1">
                            <button type="button" class="btn btn-outline-light" value="2">2</button>
                        </li>
                        <li class="page-item m-1">
                            <button type="button" class="btn btn-outline-light" value="3">3</button>
                        </li>
                        <li class="page-item m-1">
                            <button type="button" class="btn btn-outline-light" value="4">4</button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="col-12 col-lg-6 d-flex ">
                <div class="col-12 d-flex justify-content-center  align-items-center flex-column bg-dark font-monospace">
                    <div class="bg-light d-flex justify-content-center align-items-center flex-column">
                        <h5>Burgers</h5>
                        <p>$25 per Clicke</p>
                        <div class="countBurger d-flex justify-content-center align-items-center flex-column">
                            <h5 class="burgercount text-info">Clicke Here ↓↓↓↓</h5>
                            <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" class="burgerclick burgerimg py-2 hover" id="burgerclick">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

`
*/
