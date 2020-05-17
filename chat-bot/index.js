var stepTwo = document.getElementById("step2")
var stepThree = document.getElementById("step3")
var stepFour = document.getElementById("step4")
var stepFive = document.getElementById("step5")


var order=[]

function y1(){

    var msg = document.createElement("h5")
    msg.innerText = "Select which kind of Pizza"
    stepTwo.appendChild(msg)
    msg.setAttribute("class","text-center m-2")

    var veg = document.createElement("button")
    veg.innerText = "Vegetarian"
    veg.setAttribute("class","btn btn-outline-success ml-5 my-2")
    stepTwo.appendChild(veg)

    var nonVeg = document.createElement("button")
    nonVeg.innerText = "Non Veg"
    nonVeg.setAttribute("class","btn btn-outline-danger ml-5 my-2")
    stepTwo.appendChild(nonVeg)


    veg.addEventListener("click", y2v)
    nonVeg.addEventListener("click",y2n)

}

function m1(){

}

function who(){


}

function y2v(){
    console.log("inside veg")

    order.push("Vegetarian")

    var type = document.createElement("h5")
    type.innerText= "Select Type of Crust"
    type.setAttribute("class","text-center my-2")
    stepThree.appendChild(type)

    var wheat = document.createElement("button")
    wheat.innerText = "Wheat"
    wheat.setAttribute("class","btn btn-outline-info ml-5 my-2")
    stepThree.appendChild(wheat)

    var thin = document.createElement("button")
    thin.innerText = "Thin"
    thin.setAttribute("class","btn btn-outline-info ml-2 my-2")
    stepThree.appendChild(thin)

    var cheese = document.createElement("button")
    cheese.innerText = "Cheese Burst"
    cheese.setAttribute("class","btn btn-outline-info ml-2 my-2")
    stepThree.appendChild(cheese)

    wheat.addEventListener("click", y3vW)
    thin.addEventListener("click", y3vT)
    cheese.addEventListener("click", y3vC)

}

function y2n(){
    console.log("inside nonveg")

    order.push("Non Veg")

    var type = document.createElement("h5")
    type.innerText= "Select Type of Crust"
    type.setAttribute("class","text-center my-2")
    stepThree.appendChild(type)

    var wheat = document.createElement("button")
    wheat.innerText = "Wheat"
    wheat.setAttribute("class","btn btn-outline-info ml-5 my-2")
    stepThree.appendChild(wheat)

    var thin = document.createElement("button")
    thin.innerText = "Thin"
    thin.setAttribute("class","btn btn-outline-info ml-2 my-2")
    stepThree.appendChild(thin)

    var cheese = document.createElement("button")
    cheese.innerText = "Cheese Burst"
    cheese.setAttribute("class","btn btn-outline-info ml-2 my-2")
    stepThree.appendChild(cheese)

    wheat.addEventListener("click", y3nw)
    thin.addEventListener("click", y3nT)
    cheese.addEventListener("click", y3nC)

}



function y3vW(){

    order.push("Wheat Crust")

    var sel = document.createElement("h5")
    sel.innerText = "Choose From Our In house Speacials"
    stepFour.appendChild(sel)
    sel.setAttribute("class","text-center my-2")

    var veg1 = document.createElement("button")
    veg1.innerText= "Mexican Green Wave"
    veg1.setAttribute("class","btn btn-outline-dark")
    sel.appendChild(veg1)

    var veg2 = document.createElement("button")
    veg2.innerText= "Peppy Paneer"
    veg2.setAttribute("class","btn btn-outline-dark ml-1")
    sel.appendChild(veg2)

    var veg3 = document.createElement("button")
    veg3.innerText= "Spicy Extravaganza"
    veg3.setAttribute("class","btn btn-outline-dark ml-1 mt-1")
    sel.appendChild(veg3)

    var veg4 = document.createElement("button")
    veg4.innerText= "Chef's Special"
    veg4.setAttribute("class","btn btn-outline-dark ml-1 mt-1")
    sel.appendChild(veg4)

    veg1.addEventListener("click", function(){
        alert("Added")
        order.push(veg1.innerHTML)
        console.log(order)
    })

    veg2.addEventListener("click", function(){
        alert("Added")
        order.push(veg2.innerHTML)
        console.log(order)
    })

    veg3.addEventListener("click", function(){
        alert("Added")
        order.push(veg3.innerHTML)
        console.log(order)
    })

    veg4.addEventListener("click", function(){
        alert("Added")
        order.push(veg4.innerHTML)
        console.log(order)
    })



    var top = document.createElement("h5")
    top.innerText= "Add extra Toppings"
    stepFour.appendChild(top)
    top.setAttribute("class","text-center")

    var addRem = document.createElement("p")
    addRem.innerText ="Click once to ADD, double click to remove"
    stepFour.appendChild(addRem)
    addRem.setAttribute("class","text-center")

    var option1 = document.createElement("btn");
    option1.innerText = "Jalapeno";
    stepFour.appendChild(option1)
    option1.setAttribute("class"," btn-sm btn-success ml-1")

    var option2 = document.createElement("btn");
    option2.innerText = "Tomato";
    stepFour.appendChild(option2)
    option2.setAttribute("class"," btn-sm btn-danger ml-1")

    var option3 = document.createElement("btn");
    option3.innerText = "Onion";
    stepFour.appendChild(option3)
    option3.setAttribute("class"," btn-sm btn-info ml-1")

    var option4 = document.createElement("btn");
    option4.innerText = "Paneer";
    stepFour.appendChild(option4)
    option4.setAttribute("class"," btn-sm btn-light ml-1")

    var option5 = document.createElement("btn");
    option5.innerText = "Pineapple";
    stepFour.appendChild(option5)
    option5.setAttribute("class"," btn-sm btn-warning ml-1")

    option1.addEventListener("click", function(){
        alert("Added")
        order.push(option1.innerHTML)
        console.log(order)
    })

    option2.addEventListener("click", function(){
        alert("Added")
        order.push(option2.innerHTML)
        console.log(order)
    })

    option3.addEventListener("click", function(){
        alert("Added")
        order.push(option3.innerHTML)
        console.log(order)
    })

    option4.addEventListener("click", function(){
        alert("Added")
        order.push(option4.innerHTML)
        console.log(order)
    })

    option5.addEventListener("click", function(){
        alert("Added")
        order.push(option5.innerHTML)
        console.log(order)
    })


}

function y3vT(){

    order.push("Thin Crust")

}
function y3vC(){

    order.push("Chese Burst")

}
function y3nW(){
    order.push("Wheat Crust")
}
function y3nT(){
    order.push("Thin Crust")
}
function y3nC(){
    order.push("Cheese Burst")

}