    console.log("times.pyテスト開始")
    const timer = document.getElementById("timer") as HTMLParagraphElement
    const timer_start = document.getElementById("timer_start") as HTMLButtonElement
    const timer_stop = document.getElementById("timer_stop") as HTMLButtonElement

    console.log(timer_start)

    let isTracking: boolean = false


    let start = timer_start.addEventListener("click", ()=>{
        if (isTracking === true){
        alert("既に開始しています");
        return;
    }
        console.log("記録開始"), fetch("http://localhost:8000/timer/start", {method:"GET"})
        .then(() => {const data = new Date(); timer.textContent = data.toLocaleTimeString();}),
        isTracking = !isTracking
    })


    let end = timer_stop.addEventListener("click", ()=>{
        if (isTracking === false){
        alert("開始していません");
        return;
    }
        console.log("記録終了"), fetch("http://localhost:8000/timer/stop", {method:"POST"})
        .then(res => res.json()).then(data => timer.textContent = data),
        isTracking = !isTracking
    })

    const goal = document.getElementById("formData") as HTMLFormElement
    const submit_goal = document.getElementById("submit_task") as HTMLButtonElement
    console.log("goals.pyテスト開始")

    

    goal.addEventListener("submit", (event: Event)=>{
        let length_alert_flg = false
        event.preventDefault();
        const taskData = new URLSearchParams();
        const formData = new FormData(goal);

        for (const[k, v] of formData){
            if (v === ""){
                continue;
            }
            if(v.toString().length > 30){
                    if (!length_alert_flg){
                    alert("目標は30文字以内で記述してください");
                    length_alert_flg = true
                    return;
                }
            }
            taskData.append(k.toString(), v.toString());
            
        }

        console.log(taskData.getAll("goal"));

        if (taskData.has('goal')){
        console.log("保存実行");
        fetch("http://localhost:8000/goals/save", {method:"POST", body: taskData});
        }
        
    })
