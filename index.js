// HOME SCORE

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

// GUEST SCORE

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

// SONG

let mySong = document.getElementById("mySong")
let icon = document.getElementById("icon")

function playSong() {
        if(mySong.paused) {
            mySong.play()
            icon.src = "media/pause.png"
        }
        else {
            mySong.pause();
            icon.src = "media/play.png"
        }

    }
