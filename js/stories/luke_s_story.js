import * as GClasses from '../game_classes.js';
export let story = new GClasses.Story("Luke's story", "luke", null)

const ID_ITEM_KNIFE = 0


let str

let nodeTmp1 = new GClasses.StoryNode("start_image.jpeg", "scelta 1 ", [])
let nodeTmp2 = new GClasses.StoryNode("start_image.jpeg", "scelta 2 ", [])
let optionTmp = new GClasses.StoryOption("opzione1!", nodeTmp1, null, null)
let optionTmp2 = new GClasses.StoryOption("opzione2!", nodeTmp2, null, null)
let nodeTmp = new GClasses.StoryNode("start_image.jpeg", "caiooo dasf fsdg ds\n fds sdsdf ", [optionTmp, optionTmp2])
optionTmp.pointedNode = nodeTmp
story.currNode = nodeTmp

str = 'You try to interrup the drugs they were giving to the patient, unfortunatly while you where trying to understand how the bag worked you make it fall making a loud "SPLASH" that allerts the people in the other room, while one of them is fixing the bag the other put you in a room and lock it; there is no escape from it.'
let node11111 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option11111 = new GClasses.StoryOption("help him", node11111, null, null)

str = 'You prontly stab the poor soul and hide behind a column. The patient start screaming trying to break free from the restrains. This catches the attention of the dwo doctors who rush out the room and take the distraction to another room. You reach the door to freedom'
let node11112 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option11112 = new GClasses.StoryOption("make a distraction", node11112, function (player) { return GClasses.checkItem(player, ID_ITEM_KNIFE) }, function (player) { GClasses.remouveItem(player, ID_ITEM_KNIFE) })

str = 'You go on for the corridor and behind a corner you find another children straped to a bed, he doesn\'t seem complitly consious of his surraunding. The wall on his right has a wide window, behind that dindow is a wide open area with two doctors descuting on how to take his organs. On the opposite corner of the room there is a security door.'
let node1111 = new GClasses.StoryNode("start_image.jpeg", str, [option11111, option11112])
let option1111 = new GClasses.StoryOption("continue", node1111, null, null)

str = 'You hear the person getting close as you prepare to stab him, luckily for you he take a turn and goes away.'
let node111 = new GClasses.StoryNode("start_image.jpeg", str, [option1111])
let option111 = new GClasses.StoryOption("prepate to defend yourself", node111, null, null)

str = 'The first door you try to open do so but as soon as you enter someone throw you in the back of the room and exit cloosing the door behind. there is no way out.'
let node112 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option112 = new GClasses.StoryOption("hide", node112, null, null)

str = 'You enter the kintchen, it is smaller than what you thout. You see an exit witch you take, it leads you to a reticle of Hallways, after a bit of walking you start hearing a voice coming thoward you.'
let node11 = new GClasses.StoryNode("start_image.jpeg", str, [option111, option112])
let option11 = new GClasses.StoryOption("go to the Kitchen", node11, null, null)

str = 'You find yourself circomnavigating the room. at the last corner you find what seems to be security guards; unfortunatly they see you too and start rushing thowords you. You are captured never to see the light again.'
let node121 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option121 = new GClasses.StoryOption("surgery dapartment", node121, null, null)

str = 'You proceed to inspect the reception table, nothing but a bounch of papers and pens tho, in the half dark, a light is coming from behind a corner, it is an elevator witch wirdly enough it seem to still work. You use it to reach floor zero, from there you wonder around unbothered for some minuts before finally finding the exit to a parking loot.'
let node122 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option122 = new GClasses.StoryOption("reception", node122, null, null)

str = 'You reach into a room full of bodies covered with blankets. You pass by them untill a figure enter the room. He notice you and rush to the allarm button while you run back from where you came, but the door won\'t open. You turn right to see the fist of the doctor that will knock you out.'
let node123 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option123 = new GClasses.StoryOption("pediatrics dapartment", node123, null, null)

str = 'you go through the wall witch lead you to a big empty room. You can reach various areas from there.'
let node12 = new GClasses.StoryNode("start_image.jpeg", str, [option121, option122, option123])
let option12 = new GClasses.StoryOption("enter the hole", node12, null, null)

str = 'The adrenaline wake you up complitely and you start stabbing the chest of the old man. He had a key in his hand witch you take before running away. You reach the end of the allway then you use the key to open the door and then to shout it behind you. You find yourself in a room with three exits, one of them is blocked by a mountain of hospital beds, the other goes to the kitchen and the third is basically a hole in the wall.'
let node1 = new GClasses.StoryNode("start_image.jpeg", str, [option11, option12])
let option1 = new GClasses.StoryOption("stab him", node1, function (player) { return GClasses.checkItem(player, ID_ITEM_KNIFE) }, function (player) { GClasses.remouveItem(player, ID_ITEM_KNIFE) })

//get you to option 1111
let option21 = new GClasses.StoryOption("continue through the Hallway", node1111, null, null)

str = 'You decide to follow the stairs one round until floor zero. Right before you can open the door someone esle do it, you run again down the stairs while the other man scream you to stop. One of your fees slips and you fall for the lasts 15-20 steps into your death.'
let node22 = new GClasses.StoryNode("start_image.jpeg", str, [])
let option22 = new GClasses.StoryOption("take the stairs", node22, null, null)

str = 'You instintivly start running, the old man can\'t keep up, the door at the end of the hallway is locked so you turn left and then enter another door witch luckily have a latch to shut it.'
let node2 = new GClasses.StoryNode("start_image.jpeg", str, [option21, option22])
let option2 = new GClasses.StoryOption("run", node2, null, null)

str = 'While you are regaining your consciousness you notice a bisturi dropped by one of the doctors, you can just reach for it and you use it to free yourself before exiting through a third door. You can make just some steps before someone grab your shoulder asking you: "what are you doing there?".'
let node0 = new GClasses.StoryNode("start_image.jpeg", str, [option1, option2])
let option0 = new GClasses.StoryOption("wake up", node0, null, function (player) { GClasses.addItem(player, ID_ITEM_KNIFE) })


str = 'You wake up surrounded by medical equipment, blinding lights are piercing your eyes when a figure burst into the room; You then notice other doctors fidgeting with some equpment, they all storm on to the child and take him into another room, everifing then became silent.'
story.startNode = new GClasses.StoryNode("start_image.jpeg", str, [option0])
story.currNode = story.startNode