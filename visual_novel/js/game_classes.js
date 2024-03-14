
export class Player {
    constructor() {
        this.inventory = new Array()
    }

}
export class Story {
    /**
 * @param {string} name
 * @param {string} folder
 * @param {StoryNode} startNode
 */
    constructor(name, folder, startNode) {
        this.player = new Player()
        this.folder = folder
        this.name = name
        this.startNode = startNode
        this.currNode = startNode
    }

}
export class StoryNode {
    /**
 * @param {string} imageName
 * @param {string} text
 * @param {Array<StoryOption>} options
 */
    constructor(imageName, text, options) {
        this.image = imageName
        this.text = text
        this.options = options
        if (this.options == null) {
            options = []
        }
    }
}
export class StoryOption {
    /**
 * @param {string} text
 * @param {StoryNode} pointedNode
 * @param {Function} isAllowedFunction
 * @param {Function} executeFunction
 */
    constructor(text, pointedNode, isAllowedFunction, executeFunction) {
        this.text = text
        this.pointedNode = pointedNode
        this.isAllowed
        this.execute
        if (isAllowedFunction == null) {
            this.isAllowed = function (player) {
                return true
            }
        } else {
            this.isAllowed = isAllowedFunction
        }
        if (executeFunction == null) {
            this.execute = function (player) {
                return null
            }
        } else {
            this.execute = executeFunction
        }
    }
}



/**
* @param {Player} player
* @param {BigInteger} item
*/
export function addItem(player, item) {
    player.inventory.push(item)
}

/**
* @param {Player} player
* @param {BigInteger} item
*/
export function remouveItem(player, item) {
    player.inventory.pop(item)
}

/**
* @param {Player} player
* @param {BigInteger} item
*/
export function checkItem(player, item) {
    console.log(typeof (player))
    console.log(player.inventory == null)
    for (let i = 0; i < player.inventory.length; i++) {
        if (player.inventory[i] == item) {
            return true
        }
    }
    return false
}







