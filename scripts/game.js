window.alexBackyardGame = () => {
    game = {
        title: "Alex Backyard",
        init: function () {
            //this.startGame();
        },
        playMusic: function () {
            // Play Audio
            var audio = new Audio("assets/audio/background.mp3");
            audio.play();
        },
        startGame: function () {
            // Set Active
            document.getElementById("game").className = "active";

            // Set Moles
            var idx = 0;
            for (
                let idx = 0;
                idx <= document.getElementsByClassName("mole").length - 1;
                idx++
            ) {
                // Set click
                // Set click
                document
                    .getElementsByClassName("mole")
                    [idx].setAttribute("mole-name", idx);

                document
                    .getElementsByClassName("mole")
                    [idx].addEventListener("click", (e) => {
                        e.preventDefault();

                        this.mole.smash(idx);

                        // Cehck game score
                        const molesRemaining =
                            document.getElementsByClassName("mole").length;
                        if (molesRemaining <= 0) {
                            alert("You Win!!!");
                        }
                    });

                // Set Time
                var randomTime = Math.floor(Math.random() * 8000); // returns a random integer from 3secs to 7 seconds
                this.mole.show(randomTime, idx);
            }

            // Play Music
            this.playMusic();
        },
        mole: {
            smash: function (idx) {
                document
                    .querySelectorAll('[mole-name="' + idx + '"]')[0]
                    .remove();
            },
            show: function (delay, idx) {
                setTimeout(() => {
                    // Validate
                    let mole = document.querySelectorAll(
                        '[mole-name="' + idx + '"]'
                    )[0];
                    if (!mole) return;

                    // Set
                    document.querySelectorAll(
                        '[mole-name="' + idx + '"]'
                    )[0].className = this.activeMole(idx);
                    // document.getElementsByClassName("mole")[idx].className =
                    //     this.activeMole(idx);

                    // Stay for x seconds
                    setTimeout(() => {
                        let mole = document.querySelectorAll(
                            '[mole-name="' + idx + '"]'
                        )[0];
                        if (!mole) return;

                        document.querySelectorAll(
                            '[mole-name="' + idx + '"]'
                        )[0].className = this.idleMole(idx);
                        setTimeout(() => {
                            let mole = document.querySelectorAll(
                                '[mole-name="' + idx + '"]'
                            )[0];
                            if (!mole) return;

                            document.querySelectorAll(
                                '[mole-name="' + idx + '"]'
                            )[0].className = this.inActiveMole(idx);

                            setTimeout(() => {
                                let mole = document.querySelectorAll(
                                    '[mole-name="' + idx + '"]'
                                )[0];
                                if (!mole) return;

                                document.querySelectorAll(
                                    '[mole-name="' + idx + '"]'
                                )[0].className = this.hideMole(idx);

                                // Active in...
                                var randomTime =
                                    Math.floor(Math.random() * 8000) + 3000; // returns a random integer from 3secs to 7 seconds

                                this.show(randomTime, idx);
                            }, 800);
                        }, 1000);
                    }, 800);
                }, delay);
            },
            getMoleClassName: function (idx) {
                let mole = document.querySelectorAll(
                    '[mole-name="' + idx + '"]'
                )[0];
                if (!mole) return "";

                // Get Classname
                var currentClassName = document.querySelectorAll(
                    '[mole-name="' + idx + '"]'
                )[0].className;

                return currentClassName;
            },
            activeMole: function (idx) {
                // Get Classname
                var currentClassName = this.getMoleClassName(idx);

                currentClassName = currentClassName
                    .replace("idle", "")
                    .replace("active", "")
                    .replace("inactive", "");
                currentClassName = currentClassName + " active";

                return currentClassName;
            },
            inActiveMole: function (idx) {
                // Get Classname
                var currentClassName = this.getMoleClassName(idx);

                currentClassName = currentClassName
                    .replace("idle", "")
                    .replace("active", "")
                    .replace("inactive", "");
                currentClassName = currentClassName + " inactive";

                return currentClassName;
            },
            idleMole: function (idx) {
                // Get Classname
                var currentClassName = this.getMoleClassName(idx);

                currentClassName = currentClassName
                    .replace("idle", "")
                    .replace("active", "")
                    .replace("inactive", "");
                currentClassName = currentClassName + " idle";

                return currentClassName;
            },
            hideMole: function (idx) {
                // Get Classname
                var currentClassName = this.getMoleClassName(idx);

                currentClassName = currentClassName
                    .replace("idle", "")
                    .replace("active", "")
                    .replace("inactive", "");

                return currentClassName;
            },
        },

        //properties
        //method/functions
        //events
    };

    game.init();
    return game;
};

window.alexBackyard = {
    game: alexBackyardGame(),
};
