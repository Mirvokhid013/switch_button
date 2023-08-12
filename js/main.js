var elswitchButton = document.querySelector(".input__selector");
        elswitchButton.addEventListener("change" , function() {
            console.log(elswitchButton.checked);
            if (elswitchButton.checked == true ) {
                // document.body.style.backgroundColor = "#0d131f";
                // document.body.style.color = "white";
                document.body.classList.add("dark")
            } else {
                // document.body.style.backgroundColor = "#fff";
                // document.body.style.color = "#0d131f";
                document.body.classList.remove("dark");
            }
            
        })