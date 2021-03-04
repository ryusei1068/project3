const imginsert = document.getElementById("insert");

let bgDiv = document.createElement("div");
bgDiv.classList.add("box", "bg-info", "slider-item");

imginsert.append(bgDiv)


const target = document.getElementById("target");
const sliderItems = document.querySelectorAll("#target .slider-data .slider-item");

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderItems[0]);

console.log(sliderItems);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

main.setAttribute("data-index", "0");



// animationTypeというパラメータを追加します。
function slideJump(steps, animationType) {
    let index = parseInt(main.getAttribute("data-index"));
    let currentElement = sliderItems.item(index);

    index += steps;

    if(index < 0) index = sliderItems.length -1;
    else if(index >= sliderItems.length) index = 0;

    let nextElement = sliderItems.item(index);

    main.setAttribute("data-index", index.toString());

    // animateMain関数の呼び出し
    animateMain(currentElement, nextElement, animationType);
}

function animateMain(currentElement, nextElement, animationType) {
    main.innerHTML = "";
    main.append(nextElement);
    
    extra.innerHTML = "";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");
    
    if (animationType === "right"){
        sliderShow.innerHTML = "";
        sliderShow.append(extra);
        sliderShow.append(main);
    } else if (animationType === "left") {
        sliderShow.innerHTML = "";
        sliderShow.append(main);
        sliderShow.append(extra);
    }
}

leftBtn.addEventListener("click", function(){
    slideJump(-1, "left");
});

rightBtn.addEventListener("click", function(){
    slideJump(+1, "right");
});


class Immovables{
    constructor(itemname, price, maxpurchase, feature, imgURL, per , number_of_possessions=0
        ) {
        this.itemname = itemname;
        this.price = price;
        this.maxpurchase = maxpurchase;
        this.feature = feature;
        this.imgURL = imgURL;
        this.per = per;
        this.number_of_possessions = number_of_possessions
    }
};

// this.itemname = itemname;
// this.price = price;
// this.maxpurchase = maxpurchase;
// this.feature = feature;
// this.imgURL = imgURL;
// this.per = per;
// this.number_of_possessions = number_of_possessions
// 二次元配列　<ImmovablesObj>　

let ImmovablesList = 
[
    [
        new Immovables
        (
            "Flip machine", 
            15000, 
            500, 
            25, 
            "https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png",
            "click"
        ),
        new Immovables
        (
            "Lemonade Stand", 
            30000, 
            1000, 
            30,
            "https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png",
            'sec'
        ),
        new Immovables
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
        new Immovables
        (
            "House", 
            20000000, 
            100,  
            32000,
            "https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png",
            "sec"
        ),
        new Immovables
        (
            "Town House", 
            40000000, 
            100,  
            64000,
            "https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png",
            "sec"
        ),
        new Immovables
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
        new Immovables
        (
            "Industrial Space", 
            1000000000, 
            10, 
            2200000,
            "https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png",
            "sec"
        ),
        new Immovables
        (
            "Hotel Skyscraper", 
            10000000000, 
            5, 
            25000000,
            "https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png",
            "sec"
        ),
        new Immovables
        (
            "Bullet-Speed Sky Railway", 
            10000000000000, 
            1, 
            30000000000,
            "https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png",
            "sec"
        )
    ],
]

class Capitalization {
    constructor(itemname, price, maxpurchase, feature, imgURL, per, number_of_possessions=0, income=0) {
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
        this.income = (this.number_of_possessions * this.price) * (1 + this.feature * 100 / 10000);
    }
};

// 投資商品
let capitalizationlist =
[
    new Capitalization
    (
        "ETF Stock", 
        300000, 
        "∞",
        0.1,
        "sec",
        "https://media.istockphoto.com/vectors/stocks-icon-vector-on-white-background-stocks-trendy-filled-icons-vector-id1095629146?k=6&m=1095629146&s=170667a&w=0&h=8OhmliXEQNKBmmV3PyC5ZUft8zmPHQY3IhTEbXLgmIU="
    ),
    new Capitalization
    (
        "ETF Bonds", 
        300000, 
        "∞",
        0.07,
        "sec",
        "https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png"
    ),
]


class ViewController {


    static immovalesCard(ImmmovalesObj) {
        let cardCon = document.createElement('div');
        cardCon.classList.add("card", "m-3");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "align-items-center");
        
        cardBody.innerHTML = 
        `
        <div class="card-title img">
            <img src="${ImmmovalesObj.imgURL}" alt="productImg">
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th>#</th>
                <th>trade name</th>
                <th>price</th>
                <th>per second</th>
                <th>acquisition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><i class="far fa-check-circle"></i></th>
                <td>${ImmmovalesObj.itemname}</td>
                <td>¥${new Intl.NumberFormat().format(ImmmovalesObj.price)}</td>
                <td>+${new Intl.NumberFormat().format(ImmmovalesObj.feature)} / ${Immovables.per}</td>
                <td>${Immovables.number_of_possessions}</td>
                </tr>
            </tbody>
        </table>
        `

        cardCon.append(cardBody);
        return cardCon;
    }

    static capitalizationCard(CapitalizationObj) {
        let cardCon = document.createElement('div');
        cardCon.classList.add("card", "m-3");

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "align-items-center");
        
        cardBody.innerHTML = 
        `
        <div class="card-title img">
            <img src="${CapitalizationObj.imgURL}" alt="productImg">
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th>#</th>
                <th>trade name</th>
                <th>price</th>
                <th>per second</th>
                <th>acquisition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"><i class="far fa-check-circle"></i></th>
                <td>${CapitalizationObj.itemname}</td>
                <td>¥${new Intl.NumberFormat().format(CapitalizationObj.price)}</td>
                <td>+${new Intl.NumberFormat().format(CapitalizationObj.income)} / ${Immovables.per}</td>
                <td>${Immovables.number_of_possessions}</td>
                </tr>
            </tbody>
        </table>
        `

        cardCon.append(cardBody);
        return cardCon;
    }
}
