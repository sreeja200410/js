document.addEventListener('DOMContentLoaded',()=>{
    let laysCount=0
    let drinkCount=0
    const addLays=document.getElementById('addLays')

    addLays.addEventListener('click',()=>{
        laysCount++
        laysqty.innerHTML=laysCount
        orderTotal.innerHTML=(laysCount*10) + (drinkCount*40)

    })
    decLays.addEventListener('click',()=>{
        if (laysCount > 0)
        laysCount--
        laysqty.innerHTML=laysCount
        orderTotal.innerHTML=(laysCount*10) + (drinkCount*40)
    })

    addDrnk.addEventListener('click',()=>{
        drinkCount++
        drnkqty.innerHTML=drinkCount
        orderTotal.innerHTML=(laysCount*10) + (drinkCount*40)
    })
    decDrnk.addEventListener('click',()=>{
        if (drinkCount > 0)
        drinkCount--
        drnkqty.innerHTML=drinkCount
        orderTotal.innerHTML=(laysCount*10) + (drinkCount*40)
    })
   
})