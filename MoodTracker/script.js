document.addEventListener("DOMContentLoaded",()=>{
    const moodSelect= document.getElementById("mood");
    const saveMood=document.getElementById("save");
    const moodList=document.getElementById("moodlist");
    const darkModeBtn=document.getElementById("toggleDarkMode");

    loadMoods();
    // loadDarkMode();

    saveMood.addEventListener("click",()=>{
        const selectedMood=moodSelect.value;
        const currentDate = new Date().toLocaleDateString();
        const moods = JSON.parse(localStorage.getItem("moods")) || [];
        moods.push({ emoji: selectedMood, date: currentDate });
        localStorage.setItem("moods", JSON.stringify(moods));

        loadMoods(); 
    })

    function loadMoods() {
        const moods = JSON.parse(localStorage.getItem("moods")) || [];
        moodList.innerHTML = ""; 

        moods.forEach(mood => {
            const li = document.createElement("li");
            li.textContent = `${mood.emoji} - ${mood.date}`;
            moodList.appendChild(li);
        });
    }

})