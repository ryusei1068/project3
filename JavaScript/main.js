let config = {
    loginpage : document.getElementById("login-page"),
    mainpage : document.getElementById("main-page"),
    title_box : document.getElementById("title"),
    user_table : document.getElementById("user-table"),
}

class Product{
    constructor(itemname, price, maxpurchase, feature, imgURL, per , owning=0,
        ) {
        this.itemname = itemname;
        this.price = price;
        this.maxpurchase = maxpurchase;
        this.feature = feature;
        this.imgURL = imgURL;
        this.per = per;
        this.owning = owning;
        this.income = this.incomeCalculation();
    }

    incomeCalculation() {
        if (this.feature < 1) {
            this.income = (this.owning * this.price) * this.feature;
        }
        else {
            this.income = this.owning * this.feature;
        }
        return this.income;
    }

    etf_stock_price(num) {
        this.price = parseInt(this.price * num * 1.1);
    }

    number_of_items_purchased(number_of_items_purchased) {
        this.owning += number_of_items_purchased;
    }

    decrease_max_purchase(num) {
        this.maxpurchase -= num;
    }

};

class User {
    constructor(items, owning_burger=0, name, age=20, days=1, money=50000) {
        this.items = items == null ? productList() : items;
        this.owning_burger = owning_burger;
        this.name = name;
        this.age = age;
        this.days = days;
        this.money = money;
    }

    burger_click() {
        this.owning_burger++;; 
    }

    total_income_per_day() {
        let total_income = 0;
        for (let i = 1; i < this.items.length; i++) {
            total_income += this.items[i].incomeCalculation();
        }
        return total_income;
    }

    income_per_day() {
        this.money += this.total_income_per_day();
    }

    income_per_click() {
        this.money += this.items[0].income
    }

    progress_days() { 
        this.days++;
    }

    birth_day() {
        this.age++;
    }

    item_purchased(amount){
        this.money -= amount;
    }
    
};


class ViewController {

    timer;

    static display_none(ele) {
        ele.classList.add("d-none");
        ele.classList.remove("d-block");
    }

    static display_block(ele) {
        ele.classList.add("d-block");
        ele.classList.remove("d-none");
    }

    static game_title(string, color) {
        const title_box = config.title_box;
        let h2 = document.createElement("h2");
        h2.classList.add("text-center",color, "mt-3");
        h2.innerHTML = string;
        
        title_box.append(h2);

        return h2;
    }

    static inisital_Screen() {
        let container = document.createElement('div');
        container.classList.add("col-lg-6", "col-6", "d-flex", "justify-content-center", "align-items-center", "flex-column");
        
        container.append(this.game_title("Welcome to Clicker Empire Game", "text-white"));
        container.innerHTML +=
        `
        <div class="col-6 col-lg-3 m-3">
            <input type="text" placeholder="username" class="col-12 mb-3" id="user-name">
            <button type="submit" class="btn btn-outline-secondary col-12" id='start'>start</button>
        </div>
        
        `
        container.querySelectorAll("#start")[0].addEventListener("click", function() {
            let user_name = container.querySelectorAll("#user-name")[0].value;

            if (user_name == "cheater") {
                let ProductList = productList();
                ProductList[9].owning = 1000;
                localStorage.setItem("cheater", JSON.stringify(new User(ProductList ,null,"cheater")));
            }

            let user_data = JSON.parse(localStorage.getItem(user_name));
            let user = null;
            
            if (user_data) {
                /*
                    local storage 取得
                */
                let name = user_data["name"];
                let age = user_data["age"];
                let days = user_data["days"];
                let money = user_data["money"];
                let items = user_data["items"];
                let owning_burger = user_data["owning_burger"]
                let users_item = [];
                for (let i = 0; i < items.length; i++) {
                    users_item.push(json_Analysis(items[i]));
                }
                user = new User(users_item, owning_burger, name, age, days, money);
            }
            else {
                /*
                    新ユーザー
                */
                user = new User(null,null, user_name);
            }

            ViewController.game_title("Cliker Empire Game", "text-secondary");
            ViewController.user_info_table(user);
            ViewController.main_page(user);

            ViewController.start(user);
        })

        return container;
    }

    static start(user_obj) {
        ViewController.timer = setInterval(() => {
            if (user_obj.days % 365 == 0) {
                user_obj.birth_day();
            } 
            user_obj.income_per_day();
            config.user_table.innerHTML = "";
            ViewController.user_info_table(user_obj);
            user_obj.progress_days();
        }, 1000);
    }

    static stop(){
        clearInterval(ViewController.timer);
    }

    static main_page(user_obj) {
        this.display_none(config.loginpage);
        let main_page = config.mainpage;
        main_page.innerHTML = "";

        let rowCon = document.createElement("div");
        rowCon.classList.add("container", "row");
        rowCon.append(this.left_Row(user_obj), this.right_Row(user_obj));

        main_page.append(rowCon);

    }

    static left_Row(user_obj) {

        let div = document.createElement("div");
        div.classList.add("col-12", "col-lg-6");

        div.innerHTML =
        `
            <div class="mt-3 bg-secondary">
                <div class="d-flex align-items-center flex-column text-white">
                    <h3 class="m-3" id="burgers">${new Intl.NumberFormat().format(user_obj.owning_burger)} burgers</h3>
                    <p class="m-3" id="income-per-day">${new Intl.NumberFormat().format(parseInt(user_obj.total_income_per_day()))} / per day</p>
                    <p class="m-3" id="income-per-click">${new Intl.NumberFormat().format(user_obj.items[0].income)} / per click</p>
                </div>
            </div>
            <div class="d-flex align-items-center flex-column bg-secondary mt-3">
                <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" class="m-3" id="burger-click">
            </div>
        `

        div.querySelectorAll("#burger-click")[0].addEventListener("click", function() {
            user_obj.burger_click();

            div.querySelectorAll("#burgers")[0].innerHTML = new Intl.NumberFormat().format(user_obj.owning_burger) + " burgers";
            user_obj.income_per_click();

            config.mainpage.append(ViewController.main_page(user_obj));
        })

        return div;
    }

    static right_Row(user_obj) {
        let div = document.createElement("div");
        div.classList.add("col-12", "col-lg-6");

        div.append(this.item_display(user_obj), this.log_out_reset_btn()); 

        div.querySelectorAll("#log-out")[0].addEventListener("click", function() {
            localStorage.setItem(user_obj.name, JSON.stringify(user_obj));

            ViewController.delete_innnerHTML(config.mainpage, config.title_box, config.user_table);
            ViewController.display_block(config.loginpage);

            ViewController.stop();
            // window.location.reload();
        })

        div.querySelectorAll("#reset")[0].addEventListener("click", function() {
            localStorage.removeItem(user_obj.name);

            ViewController.delete_innnerHTML(config.mainpage, config.title_box, config.user_table);
            ViewController.display_block(config.loginpage);

            ViewController.stop();
            // window.location.reload();
        })

        return div;
    }

    static user_info_table(user_obj) {

        const user_info_table = config.user_table;


        let table = document.createElement("table");
        table.classList.add("table", "table-bordered", "text-white", "mt-3",);

        table.innerHTML = 
        `
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Money</th>
                <th>Age</th>
                <th>Days</th>
            </tr>
        </thead>
        <tbody>
            <tr id="user-table">
                <th scope="row"><i class="far fa-user"></i></th>
                <td>${user_obj.name}</td>
                <td >${new Intl.NumberFormat().format(parseInt(user_obj.money))}</td>
                <td>${user_obj.age}</td>
                <td>${user_obj.days}</td>
            </tr>
        </tbody>
        `

        user_info_table.append(table);

        return table;
    }

    static item_display(user_obj) {
        let item_list = user_obj.items;

        let div = document.createElement("div");
        div.classList.add("item-display", "mt-3");
        div.style.height = "450px";
        div.style.overflow = "auto";

        let container = document.createElement("div");

        for (let i = 0; i < item_list.length; i++) {
            item_list[i].incomeCalculation();
            let card = document.createElement("div");
            card.classList.add("card", "item-card", "mt-2");

            card.innerHTML =
            `
            <div class="card-body d-flex align-items-center row" data-id="${i}">
                <div class="card-title col-3 ">
                    <img src="${item_list[i].imgURL}" alt="productImg">
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>trade name</th>
                        <th>price</th>
                        <th>per</th>
                        <th>owning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"><i class="far fa-check-circle"></i></th>
                        <td>${item_list[i].itemname}</td>
                        <td>${new Intl.NumberFormat().format(item_list[i].price)}</td>
                        <td>${new Intl.NumberFormat().format(item_list[i].income)} / ${item_list[i].per}</td>
                        <td>${item_list[i].owning}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            `

            card.addEventListener("click", function () {
                let index = card.querySelectorAll(".card-body")[0].dataset.id;
                ViewController.display_none(container);
                div.append(ViewController.purchase_page(user_obj, index, container));
            })

            container.append(card);
        }
        div.append(container);
        return div;
    }

    static log_out_reset_btn() {
        let div = document.createElement("div");
        div.innerHTML = 
        `
        <div class="user-operation-buttons col-12 d-flex justify-content-end mt-3 mb-3">
            <div class="col-4 logout-btn mx-3">
                <button type="submit" class="btn btn-secondary col-12" id="log-out">log out</button>
            </div>
            <div class="col-4 reset-btn">
                <button type="submit" class="btn btn-secondary col-12" id="reset">reset</button>
            </div>
        </div>
        `
        return div;
    }

    static backNextBtn(backString, nextString){
        let container = document.createElement("div");

        container.innerHTML =
        `
        <div class="d-flex justify-content-center">
            <div class="m-2">
                <button class="btn btn-outline-secondary" id="back-btn">${backString}</button>
            </div>
            <div class="m-2">
                <button class="btn btn-secondary" id="next-btn">${nextString}</button>
            </div>
        </div>
        `
        return container;
    }


    static purchase_page(user_obj, index, container) {
        let item = user_obj.items[index];

        let card = document.createElement("div");
        card.classList.add("card", "mt-3");

        card.innerHTML = 
        `
        <div class="card-body d-flex align-items-center row">
            <div class="col-3">
                <img src="${item.imgURL}" alt="productImg">
            </div>
            <table class="table table-bordered">
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
                    <td>${item.itemname}</td>
                    <td>${new Intl.NumberFormat().format(item.price)}</td>
                    <td>${item.maxpurchase}</td>
                    <td>${item.feature} / ${item.per}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="m-2">
            <p class="font-monospace m-1">How Many would you like to purchase?</p>
            <input class="col-12 input_number" type="number" style="text-align: right;" min="1" max="${item.maxpurchase}">
            <div class="d-flex justify-content-end pt-3 m-2">
                <h4 id="total-amount">Total:0</h4>
            </div>
        </div>
        `
        card.append(this.backNextBtn("Go Back", "Purchase"));

        card.querySelectorAll(".input_number")[0].addEventListener("input", function () {
            let num = card.querySelectorAll(".input_number")[0].value;
            let totalAmount = item.price * num;
            card.querySelectorAll("#total-amount")[0].innerHTML = "Total: " + new Intl.NumberFormat().format(totalAmount);
        })

        card.querySelectorAll("#back-btn")[0].addEventListener("click", function() {
            ViewController.display_block(container);
            ViewController.display_none(card);
        })

        card.querySelectorAll("#next-btn")[0].addEventListener("click", function() {
            let total_Amount_String = card.querySelectorAll("#total-amount")[0].innerHTML;
            let total_Amount_int = parseInt(total_Amount_String.replace(/[^0-9]/g, ''));

            if (total_Amount_int <= user_obj.money) {
                let num = parseInt(card.querySelectorAll(".input_number")[0].value);
                user_obj.items[index].number_of_items_purchased(num);

                if (index < 9) {
                    user_obj.items[index].decrease_max_purchase(num);
                }
                user_obj.item_purchased(total_Amount_int);
                ViewController.main_page(user_obj)

                if (index == 9) {
                    user_obj.items[index].etf_stock_price(num);
                }
                
            }
            else {
                alert("You don't have enough money");
            }
        })

        return card;
    }

    static delete_innnerHTML(ele1, ele2, ele3) {
        ele1.innerHTML = "";
        ele2.innerHTML = "";
        ele3.innerHTML = "";
    }
}

// this.itemname = itemname;
// this.price = price;
// this.maxpurchase = maxpurchase;
// this.feature = feature;
// this.imgURL = imgURL;
// this.per = per;
// this.owning = owning;
// this.income = income;
// 配列　<ProductObj>　

function productList() {
    let ProductList = 
    [
        new Product
        (
            "Flip machine", 
            15000, 
            500, 
            25, 
            "https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
            "click",
            1
        ),
        new Product
        (
            "Lemonade Stand", 
            30000, 
            1000, 
            30,
            "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
            'day'
        ),
        new Product
        (
            "Ice Cream Truck", 
            100000, 
            500, 
            120,
            "https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png",
            "day"
        ),
    
    
        new Product
        (
            "House", 
            20000000, 
            100,  
            32000,
            "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
            "day"
        ),
        new Product
        (
            "Town House", 
            40000000, 
            100,  
            64000,
            "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
            "day"
        ),
        new Product
        (
            "Mansion", 
            250000000, 
            20, 
            500000,
            "https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png",
            "day"
        ),
        new Product
        (
            "Industrial Space", 
            1000000000, 
            10, 
            2200000,
            "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
            "day"
        ),
        new Product
        (
            "Hotel Skyscraper", 
            10000000000, 
            5, 
            25000000,
            "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
            "day"
        ),
        new Product
        (
            "Bullet-Speed Sky Railway", 
            10000000000000, 
            1, 
            30000000000,
            "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
            "day"
        ),
        new Product
        (
            "ETF Stock", 
            300000, 
            "unlimitation",
            0.001,
            "https://media.istockphoto.com/vectors/stocks-icon-vector-on-white-background-stocks-trendy-filled-icons-vector-id1095629146?k=6&m=1095629146&s=170667a&w=0&h=8OhmliXEQNKBmmV3PyC5ZUft8zmPHQY3IhTEbXLgmIU=",
            "day"
        ),
        new Product
        (
            "ETF Bonds", 
            300000, 
            "unlimitation",
            0.0007,
            "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
            "day"
        ),
    ];
    return ProductList;
}

function json_Analysis(item) {
    let users_item = new Product
    (
        item["itemname"],
        item["price"],
        item["maxpurchase"],
        item["feature"],
        item["imgURL"],
        item["per"],
        item["owning"],
        item["income"],
    )
    return users_item;
}

config.loginpage.append(ViewController.inisital_Screen());
