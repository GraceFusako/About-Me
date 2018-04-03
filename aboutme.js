var paragraph = document.getElementById("paragraph")
var paragraph2 = document.getElementById("paragraph2")
var address = document.getElementById("address")
var start = document.getElementById("start")
var bear = document.getElementById("bear")
var butterfly = document.getElementById("butterfly")
var lizard = document.getElementById("lizard")
var shark = document.getElementById("shark")
var rat = document.getElementById("rat")
var nextbear = document.getElementById("nextbear")
var acceptbear = document.getElementById("acceptbear")
var refusebear = document.getElementById("refusebear")
var gobear = document.getElementById("gobear")
var bailbear = document.getElementById("bailbear")
var retry = document.getElementById("retry")

var inputaddress = document.getElementById("inputaddress")
var compare = document.getElementById("compare")

var i = 0

bear.style.visibility = "hidden"
butterfly.style.visibility = "hidden"
lizard.style.visibility = "hidden"
shark.style.visibility = "hidden"
rat.style.visibility = "hidden"
nextbear.style.visibility = "hidden"
acceptbear.style.visibility = "hidden"
refusebear.style.visibility = "hidden"
gobear.style.visibility = "hidden"
bailbear.style.visibility = "hidden"
retry.style.visibility = "hidden"

inputaddress.style.visibility = "hidden"
compare.style.visibility = "hidden"

function begin() {
    paragraph.innerHTML = "You are sitting in your motel room, staring at the box on the dest in front of you, debating about whether or not to open the box. You eventually lift the lid, tossing it across the room and take a peek inside. You discover the contents are five numbered origami animals, a cell phone with a separate memory card, and a loaded gun. You quickly realizes that the Origami Killer has Shaun. Inserting the memory card in the phone, it begins to play a video of Shaun. He in a drain that is steadily filling with rain water. Shaun calls desperately for your help, but the video suddenly ends, making you feel empty once again."
    paragraph2.innerHTML = "A message then displays on the screen. It reads, 'How far are you prepared to go to save someone you love?'. The screen changes, displaying another message, 'Five origami figures. Each figure is a trial. Each trial provides letters. The letters reveal an address.' You look back to the box, and see the five origami figures as the message mentioned. Each of them are folded to look like different animals. A Bear, a Butterfly, a Lizard, a Shark, and a Rat. Which one do you pick up first?"
    start.style.visibility = "hidden"
    bear.style.visibility = "visible"
    butterfly.style.visibility = "visible"
    lizard.style.visibility = "visible"
    shark.style.visibility = "visible"
    rat.style.visibility = "visible"
}

function chooseBear() {
    paragraph.innerHTML = "You pick up the origami bear and carefully unfold it. When you do, a small paper that looks like a buisness card falls out of the paper bear. 'Are you prepared to show courage to save your son?' The message reads, with an address and set of instructions written under it. The instructions tell you to to take the small card with you to the address listed. You quickly grab the origami figure, the phone, and the gun from the shoe box before starting towards the address that the origami figure says."
    paragraph2.innerHTML = "You stand in front of a large car garage. When you enter, there is a man working on a van to your right. When he notices you, he moves out from under the car, greeting you with a smile. After exchanging pleasantries, you ask the man about the card from the origami figure. He checks the card, and remarks on how patient you must have been as the car has been there for two years. Quickly fetching the keys, the man tells you where to find the car."
    bear.style.visibility = "hidden"
    butterfly.style.visibility = "hidden"
    lizard.style.visibility = "hidden"
    shark.style.visibility = "hidden"
    rat.style.visibility = "hidden"
    nextbear.style.visibility = "visible"
}

function bearNext() {
    paragraph.innerHTML = "You proceed to the elevator to reach the level where the car is stored. Once on level 3 of the garage, you quickly find the car by using the door unlock function on the keychain, which makes a small clicking sound that you follow until you find it. You open the driver side door, and get in. Once in the car, You begin to search for any further instruction or clues on what to do next. After a couple of minutes, you find a GPS. Turning it on, you see you are 4 miles from your target destination. You pull out of the garage and follow the directions given to you by the GPS."
    paragraph2.innerHTML = "When you reach your destination, the GPS reveals the true trial: you must show courage to save your son by driving down the wrong way of the highway for 5 miles in 5 minutes. If you accept, there is a chance that you can die, but if you don't you will not reveal the essential part of the address where Shaun is being held. Do you accept the challenge?"
    nextbear.style.visibility = "hidden"
    acceptbear.style.visibility = "visible"
    refusebear.style.visibility = "visible"
}

function bearAccept() {
    paragraph.innerHTML = "You have accepted the trial. Pulling the car out of park, you accelerate onto the highway. You weave back and forth across the highway, your heart beating quickening with the speed of the car."
    paragraph2.innerHTML = "You have driven about 3 1/2 miles when you see a police barrier ahead of you. The cops have their guns pulled, aiming for the tires of your car. Bullets begin to penetrate the body of your car. You must act quickly. There are two barriers blocking the rode, but their is just enought room for a car in between them, but their is also a large hole in the metal fence seperating the road from the ground. Which do you do? Keep going through he police barrier or bail through the fence?"
    acceptbear.style.visibility = "hidden"
    refusebear.style.visibility = "hidden"
    gobear.style.visibility = "visible"
    bailbear.style.visibility = "visible"
}

function bearRefuse() {
    paragraph.innerHTML = ""
    paragraph2.innerHTML = ""
    acceptbear.style.visibility = "hidden"
    refusebear.style.visibility = "hidden"
    bear.style.visibility = "visible"
    butterfly.style.visibility = "visible"
    lizard.style.visibility = "visible"
    shark.style.visibility = "visible"
    rat.style.visibility = "visible"
}

function bearWin() {
    paragraph.innerHTML = "You bust through the barrier, continuing for the rest of the 5 miles, barely finishing before the 5 minues are up. You swirve across the road, right through the metal fencing, and roughly crashing into a tree. After crashing the car, the GPS tells you that your 'reward' is in the glove compartment and the key is inside the GPS. You break the GPS, and a key falls out of it. Still buckled in, you continue to struggle to unlock the glove compartment. Once unlocked, one of the memory chips for your phone falls out. Grabbing the chip, you unbuckle your self from your seat, and kick open the door before crawling free."
    paragraph2.innerHTML = "Once free of the burning car, you attach the memory chip to your phone. The screen lights up with another video of Shaun trapped in a hole filling with water. The video fades away, being replaced with letters that fill in a portion of the address where Shaun is supposedly being held. Injured but determined, You heads back to your motel. (Write the address down. You will need it later.)"
    address.innerHTML = "_ 5 _ _ _ _ _ _ _ _ _ R _ _ _ E _ _ _ T _ _ _ _"
    i += 1
    gobear.style.visibility = "hidden"
    bailbear.style.visibility = "hidden"
    if(i == 5) {
        paragraph.innerHTML = "You only have an hour left before Shaun is killed. Each of the trials has given you part of an address. Type in the address to save Shaun's life!"
        function compareAddress() {
            if(inputaddress == "852 Theodore Roosevelt Road") {

            }
            else {

            }
        }
    }
    else {
        paragraph.innerHTML = "You have completed the Bear Trial. Which origami figure will your choose next?"
        paragraph2.innerHTML = ""
        address.innerHTML = ""
        bear.style.visibility = "visible"
        butterfly.style.visibility = "visible"
        lizard.style.visibility = "visible"
        shark.style.visibility = "visible"
        rat.style.visibility = "visible"
    }
    
}

function bearLose() {
    paragraph.innerHTML = ""
    paragraph2.innerHTML = ""
    address.innerHTML = ""
    gobear.style.visibility = "hidden"
    bailbear.style.visibility = "hidden"
    retry.style.visibility = "visible"
}

function chooseButterfly() {

}

function chooseLizard() {

}

function chooseShark() {

}

function chooseRat() {

}

function startOver() {
    paragraph.innerHTML = "Shaun Mars has gone missing. It is suspected that he has been taken by the Origami Killer. You have been sent a box of origami figures by the killer, each of them containing a task that must be completed to discover the address that Shaun Mars is being held. You have 5 days to find him. Good luck."
    paragraph2.innerHTML = ""
    address.innerHTML = ""
    retry.style.visibility = "hidden"
    start.style.visibility = "visible"
}