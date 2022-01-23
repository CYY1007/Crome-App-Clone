const makeclock = () =>{
    console.log("make clock")
    const date = new Date()
    const time = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const clockText = `${String(time).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`
    clock.innerText = clockText
}

makeclock()
setInterval(makeclock,1000)