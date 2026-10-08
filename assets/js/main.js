const start = document.querySelector("#start")
const schere = document.querySelector("#schere")
const stein = document.querySelector("#stein")
const papier = document.querySelector("#papier")
const pointsDisplay = document.querySelector(".points");
//Animation-Bilder
const gokuImg = document.querySelector("#goku");
const vegetaImg = document.querySelector("#vegeta");

alert("Presse Start um zu beginnen!")

/* Spieler Klickt */
let spielerZug

schere.addEventListener('click', (event) => {
    spielerZug = "schere"
    console.log(`Spieler hat Schere gewählt`)
    spielRunde("schere")
})
stein.addEventListener('click', (event) => {
    spielerZug = "stein"
    console.log(`Spieler hat Stein gewählt`)
    spielRunde("stein")
})
papier.addEventListener('click', (event) => {
    spielerZug = "papier"
    console.log(`Spieler hat Papier gewählt`)
    spielRunde("papier")
})

/* Computer random */
const options = ["schere", "stein", "papier"];

function sayaijinAI() {
    const i = Math.floor(Math.random() * 3)
    return options[i]
}


/* Spiel starten */
let spielGestartet = false

start.addEventListener('click', () => {
    if (spielGestartet === false) {
        spielGestartet = true
        spielerPunkte = 0
        vegetaPunkte = 0
        pointsDisplay.textContent = "0:0"
        console.log("Das Spiel hat begonnen! Wähle jetzt Schere, Stein oder Papier.")
    }
});

/* Punkte zählen */
let spielerPunkte = 0
let vegetaPunkte = 0

/* Spielrunde */

function spielRunde(spielerZug) {
    if (spielGestartet == true) {
        const pcZug = sayaijinAI()
        console.log("PC wählt", pcZug)

        if (
            (spielerZug == "schere" && pcZug == "papier") ||
            (spielerZug == "stein" && pcZug == "schere") ||
            (spielerZug == "papier" && pcZug == "stein")
        ) {
            spielerPunkte++
            console.log("Spieler bekommt einen Punkt!");
            pointsDisplay.textContent = `${spielerPunkte}:${vegetaPunkte}`

            //Animation
            gokuImg.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }], { duration: 200 });

        } else if (
            (spielerZug == "schere" && pcZug == "stein") ||
            (spielerZug == "stein" && pcZug == "papier") ||
            (spielerZug == "papier" && pcZug == "schere")
        ) {
            vegetaPunkte++
            console.log("PC bekommt einen Punkt!");
            pointsDisplay.textContent = `${spielerPunkte}:${vegetaPunkte}`

            //Animation
            vegetaImg.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }], { duration: 200 });

        } else {
            console.log("Unentschieden in dieser Runde!")
        }
        if (spielerPunkte == 3 || vegetaPunkte == 3) {
            console.log("Das Spiel ist beendet!")
            spielGestartet = false;


            if (spielerPunkte > vegetaPunkte) {
                setTimeout(() => {
                    alert("Du hast gewonnen!!!")
                }, 1000);
            } else {
                setTimeout(() => {
                    alert("Vegeta hat gewonnen!")
                }, 1000);
            }
        }
    }
} 