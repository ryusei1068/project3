let config = {
    mainpage : document.getElementById("mainpage"),
    firstPage : document.getElementById("firstpage"),
    confirm : document.getElementById("confirm"),
}

class User{
    constructor(username, passward, assets=50000, age=20, days=1) {
        this.username = username;
        this.passward = passward;
        this.assets = assets;
        this.age = age;
        this.days = days;
    }

    static getUserNameAndPass() {
        const form = document.getElementById("userinfo");
    }
}

let userlist = [
    new User("Davis", "200", 4903000000, 68),
    new User("Durant", "300", 200000000, 54),
    new User("James", "000", 10000000, 48),
    new User("Curry", "100", 5000000, 35),
];



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
            ViewController.displayNone(config.firstPage);
            config.mainpage.append(ViewController.usertable(userlist));
        })

        document.getElementById("no").addEventListener("click", function(){
            ViewController.displayNone(config.confirm);
            config.firstPage.append(ViewController.loginpage(0));
        })
    }

    static print(flag){
        console.log(flag);
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

    
    static usertable(userlist) {
        let container = document.createElement("div");
        container.classList.add("container");
        let table = document.createElement("table");
        table.classList.add("table", "table-hover");
    
        table.innerHTML = 
        `
        <thead class="thead-dark">
        <tr>
            <th>#</th>
            <th>UserName</th>
            <th>Age</th>
            <th>Assets</th>
        </tr>
        </thead>
        `
    
        let tbody = document.createElement("tbody");
        for (let i = 0; i < userlist.length; i++) {
            tbody.innerHTML += 
            `
            <tr>
                <th scope="row" class=${i+1}>${i+1}</th>
                <td class=${i+1}>${userlist[i].username}</td>
                <td class=${i+1}>${userlist[i].age}</td>
                <td class=${i+1}>${new Intl.NumberFormat().format(userlist[i].assets)}</td>
            </tr>
            `
        }
        table.append(tbody);
        container.append(table);
        return container;
    }

    static loginpage(flag) {
        let btnname = flag ? "Register" : "Login";
        let container = document.createElement("div");
        container.innerHTML = 
        `
        <form action="" id="userinfo" onsubmit="UserOperation.print(${flag}); event.preventDefault()">
            <div class="input-group mt-3">
                <input type="text" placeholder="UserName" class="form-control" name="username">
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
    
}



let userManagement = {
    "James" : "000",
    "Durant" : "300",
    "Davis" : "200",
    "Curry" : "100",
}


UserOperation.clickYesOrNo();
