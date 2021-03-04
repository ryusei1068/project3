let config = {
    userpage : document.getElementById("userpage"),
    firstPage : document.getElementById("firstpage"),
    confirm : document.getElementById("confirm"),
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
    new User("Davis", "200", 4903000000, 68),
    new User("Durant", "300", 200000000, 54),
    new User("James", "000", 10000000, 48),
    new User("Curry", "100", 5000000, 35),
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


class NavBar{
    navbar = 
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
    `;
}




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
            userlist.push(user);
            userManagement[username] = user;
        }
        else {
            UserManagement.checkUser(userManagement, username, password);
            console.log();
        }

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

    static userCard() {

    }

    
}

class UserManagement {

    static checkUser(userManagement, username, password) {
        let user = userManagement[username];
        if (user.password != password) {
            alert("Either the user ID or password is invalid");
            return false;
        }
        else {
            console.log("OK");
            return true;
        }

    }
} 



UserOperation.clickYesOrNo();
