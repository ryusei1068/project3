let config = {
    mainpage : document.getElementById("mainpage"),
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
            ViewController.changeClassEle(null, "bg-dark", config.mainpage);
            ViewController.displayNone(config.firstPage);
            config.mainpage.append(ViewController.usertable(userlist));
            UserOperation.chooseUser();
        })
    }

    static chooseUser() {
        let tbodyList = document.querySelectorAll("tbody > tr");
        let username = "";
        tbodyList.forEach(element=>element.addEventListener("click", function() {
            ViewController.changeClassEle(null, "bg-white", config.mainpage);
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
        ele.classList.remove(blotout);
        ele.classList.add(input);
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
