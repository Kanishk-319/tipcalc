let bill_amount_element = document.getElementById('b_amt')
let no_of_guests_element = document.getElementById('n_guests')
let service_quality_element = document.getElementById('service_quality')
let tip_animation = document.getElementById('tip_animation')
let calculate = document.getElementById('calc_btn')

const anitip = async (tip_animation, service_quality, bill_amount) => {
    let anipromise = new Promise((response, reject) => {
        console.log(tip_animation.style.animationName)
        tip_animation.style.animationName = "fade1"
        tip_animation.style.display="flex"
        console.log(tip_animation.style.animationName)
        tip_animation.style.animationIterationCount=`1`
        console.log(tip_animation.style.animationIterationCount)
        tip_animation.innerHTML = `Your tip is: ${service_quality * bill_amount}`
    })
    anipromise.catch(e => {
        alert(e)
    })
}

calculate.addEventListener('click', async () => {
    tip_animation.style.removeProperty('animation-name')
    tip_animation.style.display="hidden"
    console.log(tip_animation.style.animationName)
    let bill_amount = Number.parseInt(bill_amount_element.value)
    let no_of_guests = Number.parseInt(no_of_guests_element.value)
    let service_quality = Number.parseFloat(service_quality_element.value / 100)
    await anitip(tip_animation, service_quality, bill_amount)
})
