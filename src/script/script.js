console.log("Linked")

let getcbhT = document.getElementById("pointerOut");
let getTitle = document.querySelector("title");
setTimeout(() => {
    getcbhT.innerText = "10";
    getTitle.innerText = "Callback Hell-Timer-10"
    setTimeout(() => {
        getcbhT.innerText = "9"
        getTitle.innerText = "Callback Hell-Timer-9"

        setTimeout(() => {
            getcbhT.innerText = "8"
            getTitle.innerText = "Callback Hell-Timer-8"

            setTimeout(() => {
                getcbhT.innerText = "7"
                getTitle.innerText = "Callback Hell-Timer-7"

                setTimeout(() => {
                    getcbhT.innerText = "6"
                    getTitle.innerText = "Callback Hell-Timer-6"

                    setTimeout(() => {
                        getcbhT.innerText = "5"
                        getTitle.innerText = "Callback Hell-Timer-5"

                        setTimeout(() => {
                            getcbhT.innerText = "4"
                            getTitle.innerText = "Callback Hell-Timer-4"

                            setTimeout(() => {
                                getcbhT.innerText = "3"
                                getTitle.innerText = "Callback Hell-Timer-3"

                                setTimeout(() => {
                                    getcbhT.innerText = "2"
                                    getTitle.innerText = "Callback Hell-Timer-2"

                                    setTimeout(() => {
                                        getcbhT.innerText = "Happy Independence Day"
                                        getTitle.innerText = "Callback Hell-Timer"
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)