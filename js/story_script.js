import * as GClasses from './game_classes.js';
import * as story0 from './stories/luke_s_story.js';
const STORIES = [story0.story]


const DESELECTED_OPTION_COLOR = "#888888"
const SELECTED_OPTION_COLOR = "#f9f9f5"
const SCARTED_OPTION_COLOR = "#c0c0be"
const SCARTED_TEXT_COLOR = "#c7c7c7"
const OVERED_OPTION_COLOR = "#fefec6"


//animation variables---------------------
const TEXT_ANIMATION_DELAY = 1
const OPTIONS_ANIMATION_DELAY = 14
const ANIMATING_NOTHIN = -1
const ANIMATING_TEXT = 0
const ANIMATING_OPTIONS = 1
let animationState = ANIMATING_TEXT
let toAnimateText = null
let textAnimationClock = 0
let optionsAnimationClock = 0
let optionToAnimate = 0
let currBtnsOptions = new Array(0)
let currDiv

//game logich things------------------------
let currStory
checkStory()
instantiateNode(currStory.currNode)


//functionc----------------------
function checkStory() {
    currStory = null
    for (let i = 0; i < STORIES.length; i++) {
        if (STORIES[i].name == STORY_ID) {
            currStory = STORIES[i]
        }
    }

    if (currStory == null) {
        //console.log("not found")
        window.location.href = "menu.php"
    }
}

/**
* @param {GClasses.StoryNode} node
*/
function instantiateNode(node) {
    let div = document.createElement("div");
    let img = document.createElement("img")
    currDiv = document.createElement("div")
    toAnimateText = document.createElement("p")

    img.src = "imgs/" + currStory.folder + "/" + node.image
    toAnimateText.innerText = ""
    img.style.animation = "fadeIn 2s ease-in"

    currDiv.append(toAnimateText)
    div.appendChild(img)
    div.appendChild(currDiv)

    if (screen.width >= screen.height) {
        div.classList.add("node_div")
        img.classList.add("node_part")
        currDiv.classList.add("node_part")
        toAnimateText.classList.add("adventure_font")
        toAnimateText.classList.add("adventure_text")
    } else {
        div.classList.add("node_div_m")
        img.classList.add("node_part_m")
        currDiv.classList.add("node_part_m")
        toAnimateText.classList.add("adventure_font_m")
        toAnimateText.classList.add("adventure_text_m")

    }


    for (let i = 0; i < node.options.length; i++) {

        let currBtn = document.createElement("button")
        currBtn.innerText = node.options[i].text
        currBtn.value = i
        if (node.options[i].isAllowed(currStory.player)) {
            currBtn.style.background = DESELECTED_OPTION_COLOR
            currBtn.addEventListener("click", mouseClick);
            currBtn.addEventListener('mouseover', mouseOverStart);
            currBtn.addEventListener('mouseout', mouseOverEnd);
        } else {
            currBtn.style.background = SCARTED_OPTION_COLOR
            currBtn.style.clor = SCARTED_TEXT_COLOR

        }

        currBtnsOptions.push(currBtn)

        if (screen.width >= screen.height) {
            currBtn.classList.add("adventure_font")
            currBtn.classList.add("adventure_option")
        } else {
            currBtn.classList.add("adventure_font_m")
            currBtn.classList.add("adventure_option_m")
        }

    }


    document.body.appendChild(div)
    //div.scrollIntoView()
    //initialize the animation
    animationState = ANIMATING_TEXT

}

function mouseClick(e) {
    //console.log(currBtnsOptions.length)
    for (let i = 0; i < currBtnsOptions.length; i++) {
        let currBtn = currBtnsOptions[i]
        if (currBtn.value == e.target.value) {
            //console.log("wwwww")
            currStory.currNode.options[i].execute(currStory.player)
            currStory.currNode = currStory.currNode.options[i].pointedNode
            currBtn.style.background = SELECTED_OPTION_COLOR
        } else {
            //console.log("ffff")
            currBtn.style.background = SCARTED_OPTION_COLOR
            currBtn.style.clor = SCARTED_TEXT_COLOR
        }
        currBtnsOptions[i].removeEventListener('mouseover', mouseOverStart);
        currBtnsOptions[i].removeEventListener('mouseout', mouseOverEnd);
        currBtnsOptions[i].disabled = true
    }
    currBtnsOptions = new Array()
    instantiateNode(currStory.currNode)



}
function mouseOverStart(e) {
    e.target.style.background = OVERED_OPTION_COLOR


}
function mouseOverEnd(e) {
    e.target.style.background = DESELECTED_OPTION_COLOR


}


//thread---------------------------
setInterval(function () {
    //console.log("frame")
    //console.log(currStory + "   " + currStory.currNode + "   " + animationState)
    //image animation made in css
    if (currStory != null && currStory.currNode != null && animationState != ANIMATING_NOTHIN) {
        //console.log("animation frame")
        if (animationState == ANIMATING_TEXT) {
            //animating the text of the curr node
            textAnimationClock++
            if (textAnimationClock >= TEXT_ANIMATION_DELAY) {
                let s = ""
                let i = toAnimateText.innerText.length
                while ((s.length == 0 || s[s.length - 1] == " " || s[s.length - 1] == "\n") && i < currStory.currNode.text.length) {
                    s = s + currStory.currNode.text[i]
                    i++
                }
                toAnimateText.innerText = toAnimateText.innerText + s
                textAnimationClock = 0
                toAnimateText.scrollIntoView()

                switch (s[s.length - 1]) {
                    case ".":
                        textAnimationClock -= TEXT_ANIMATION_DELAY * 8
                        break
                    case ",":
                    case ";":
                        textAnimationClock -= TEXT_ANIMATION_DELAY * 6
                        break
                    default:
                        textAnimationClock -= TEXT_ANIMATION_DELAY
                        break
                }


                //for when the text end with spaces (spaces are automaticly deleted from the html)
                if (i == currStory.currNode.text.length) {
                    animationState = ANIMATING_OPTIONS
                    optionsAnimationClock = OPTIONS_ANIMATION_DELAY - 1
                    optionToAnimate = 0
                }
            }

        } else if (animationState == ANIMATING_OPTIONS) {
            //animating the options of the curr node
            optionsAnimationClock++
            if (optionsAnimationClock >= OPTIONS_ANIMATION_DELAY) {
                if (optionToAnimate == currStory.currNode.options.length) {
                    animationState = ANIMATING_NOTHIN
                } else {
                    if (optionToAnimate != 0) {
                        currDiv.appendChild(document.createElement("br"))
                    }
                    let currBtn = currBtnsOptions[optionToAnimate]
                    currDiv.appendChild(currBtn)
                    currBtn.style.animation = "fadeIn 1s ease-in"
                    currBtn.scrollIntoView()
                    optionsAnimationClock = 0
                    optionToAnimate++
                }


            }
        }
    }

}, 50);