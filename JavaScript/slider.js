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

// class Capitalization {
//     constructor(itemname, price, maxpurchase, feature, imgURL, per, number_of_possessions=0, income=0) {
//         this.itemname = itemname;
//         this.price = price;
//         this.maxpurchase = maxpurchase;
//         this.feature = feature;
//         this.imgURL = imgURL;
//         this.per = per;
//         this.number_of_possessions = number_of_possessions;
//         this.income = income;
//     }

//     incomeCalculation() {
//         if (this.feature < 1) {
//             this.income = (this.number_of_possessions * this.price) * (1 + this.feature * 100 / 10000);
//         }
//         else {
//             this.income = this.number_of_possessions * this.feature;
//         }

//     }
// };

// 投資商品
// let capitalizationlist =
// [
//     new Product
//     (
//         "ETF Stock", 
//         300000, 
//         "∞",
//         0.1,
//         "https://media.istockphoto.com/vectors/stocks-icon-vector-on-white-background-stocks-trendy-filled-icons-vector-id1095629146?k=6&m=1095629146&s=170667a&w=0&h=8OhmliXEQNKBmmV3PyC5ZUft8zmPHQY3IhTEbXLgmIU=",
//         "sec"
//     ),
//     new Product
//     (
//         "ETF Bonds", 
//         300000, 
//         "∞",
//         0.07,
//         "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png",
//         "sec",
//     ),
// ]


class ViewController {

    static displayNone(ele) {
        ele.classList.add("d-none");
        ele.classList.remove("d-block");
    }
    static displayBlock(ele) {
        ele.classList.add("d-block");
        ele.classList.remove("d-none");
    }

    static resetInnnerHtml(ele) {
        ele.innerHTML = "";
    }

    // static immovalesCard(ImmmovalesObjList) {

    //     let container = document.createElement('div');

    //     ImmmovalesObjList.forEach(ImmmovalesObj=> {
    //         let cardCon = document.createElement('div');
    //         cardCon.classList.add("card", "m-3");

    //         let cardBody = document.createElement("div");
    //         cardBody.classList.add("card-body", "d-flex", "align-items-center", "row");

    //         cardBody.innerHTML = 
    //         `
    //         <div class="card-title img col-3">
    //             <img src="${ImmmovalesObj.imgURL}" alt="productImg">
    //         </div>
    //         <table class="table table-bordered">
    //             <thead>
    //                 <tr>
    //                 <th>#</th>
    //                 <th>trade name</th>
    //                 <th>price</th>
    //                 <th>per</th>
    //                 <th>acquisition</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                 <th scope="row"><i class="far fa-check-circle"></i></th>
    //                 <td>${ImmmovalesObj.itemname}</td>
    //                 <td>¥${new Intl.NumberFormat().format(ImmmovalesObj.price)}</td>
    //                 <td>+${new Intl.NumberFormat().format(ImmmovalesObj.feature)} / ${ImmmovalesObj.per}</td>
    //                 <td>${ImmmovalesObj.number_of_possessions}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         `
    //         cardCon.append(cardBody);   
    //         container.append(cardCon)
    //     })
    //     return container;
    // }

    // static capitalizationCard(CapitalizationObjList) {

    //     let container = document.createElement('div');
    //     CapitalizationObjList.forEach(CapitalizationObj=> {
    //         let cardCon = document.createElement('div');
    //         cardCon.classList.add("card", "m-3");

    //         let cardBody = document.createElement("div");
    //         cardBody.classList.add("card-body", "d-flex", "align-items-center", "row");
    //         cardBody.innerHTML += 
    //         `
    //         <div class="card-title img col-3">
    //             <img src="${CapitalizationObj.imgURL}" alt="productImg">
    //         </div>
    //         <table class="table table-bordered">
    //             <thead>
    //                 <tr>
    //                 <th>#</th>
    //                 <th>trade name</th>
    //                 <th>price</th>
    //                 <th>per</th>
    //                 <th>acquisition</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                 <th scope="row"><i class="far fa-check-circle"></i></th>
    //                 <td>${CapitalizationObj.itemname}</td>
    //                 <td>¥${new Intl.NumberFormat().format(CapitalizationObj.price)}</td>
    //                 <td>+${new Intl.NumberFormat().format(CapitalizationObj.income)} / ${CapitalizationObj.per}</td>
    //                 <td>${CapitalizationObj.number_of_possessions}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         `
    //         cardCon.append(cardBody);   
    //         container.append(cardCon)
    //     })
    //     return container;
    // }
    static itemCard(ProductObjList, index) {
        let container = document.createElement('div');
        let i = 0;
        ProductObjList.forEach(productObj=> {
            let cardCon = document.createElement('div');
            cardCon.classList.add("card", "m-3");

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
        console.log(container);
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
        /*
        <div class="card m-3 bg-light">
            <div class="card-body d-flex align-items-center row">
                <div class="card-title img col-3" data-id="0">
                    <img src="https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png" alt="productImg">
                </div>
                <table class="table table-bordered" data-id="0">
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
                            <td>Flip machine</td>
                            <td>¥15,000</td>
                            <td>+25</td>
                            <td>32000 / sec</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="m-2">
                <p class="font-monospace m-1">How Many would you like to purchase?</p>
                <input class="col-12" type="text">
                <div class="d-flex justify-content-end pt-3 m-2">
                    <h4 id="total-amount">Total:¥200000</h4>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-2">
                    <button class="btn btn-outline-primary back-btn">Go Back</button>
                </div>
                <div class="m-2">
                    <button class="btn btn-primary next-btn">Purchase</button>
                </div>
            </div>
        </div>
        */
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
}


class UserOperation {
    static pushNavBtn() {
        let button = document.querySelectorAll(".page-item > button");
        button.forEach(element => {
            element.addEventListener("click", function() {
                let value = parseInt(element.getAttribute("value"));
                const insert = document.getElementById("insert");
                ViewController.displayBlock(insert);
                ViewController.resetInnnerHtml(insert);
                insert.append(ViewController.itemCard(ProductList[value-1], value - 1));
                UserOperation.pushItemCard(insert);
                ViewController.resetInnnerHtml(document.getElementById("parchase"))
            })
        });
    }

    static pushItemCard(insert) {
        let card = insert.querySelectorAll(".card");
        card.forEach(element => {
            element.addEventListener("click", function() {
                let index = element.querySelectorAll(".card-title")[0].dataset.id;
                let inIndex = element.querySelectorAll(".table")[0].dataset.id;
                const insert = document.getElementById("insert");
                ViewController.displayNone(insert)
                const purchasePage = document.getElementById("parchase")
                ViewController.displayBlock(purchasePage);
                purchasePage.append(ViewController.purchasePage(ProductList, index, inIndex));

                UserOperation.backBtn(purchasePage);
            })
        })
    }

    static backBtn(purchasePage){
        let btn = purchasePage.querySelectorAll(".back-btn")[0];
        btn.addEventListener("click", function(){
            const insert = document.getElementById("insert");
            ViewController.displayBlock(insert);
            ViewController.resetInnnerHtml(purchasePage);
        })
    }

}


UserOperation.pushNavBtn();

const insert = document.getElementById("insert");
insert.append(ViewController.itemCard(ProductList[0], 0));
