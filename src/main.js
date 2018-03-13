import Phaser from 'phaser'

// this game will have only 1 state
const GameState = {

  // load the game assets before the game starts
  preload() {
    this.load.image('background', 'assets/images/background.png')
    this.load.image('arrow', 'assets/images/arrow.png')

    this.load.spritesheet('rooster', 'assets/images/rooster_spritesheet.png', 128, 128, 4)
    this.load.spritesheet('pig', 'assets/images/pig_spritesheet.png', 128, 128, 4)
    this.load.spritesheet('sheep', 'assets/images/sheep_spritesheet.png', 128, 128, 4)
  },

  // executed after everything is loaded
  create() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true


    this.background = this.game.add.sprite(0, 0, 'background')

    const animalData = [
      { key: 'rooster', text: 'ROOSTER' },
      { key: 'pig', text: 'PIG' },
      { key: 'sheep', text: 'SHEEP' }
    ]
    this.animals = this.game.add.group()

    let animal
    // prepare each animal
    animalData.forEach((element) => {
      animal = this.animals.create(-1000, 230, element.key)
      animal.customParams = { text: element.text }
      animal.anchor.setTo(0.5)
      animal.inputEnabled = true
      animal.input.pixelPerfectClick = true
      animal.animations.add('animate', [0, 1, 2, 2, 3, 0, 1, 2, 2, 3, 0], 10, false)
      animal.events.onInputDown.add(this.eventAnimateAnimal, this)
    })

    //  place current animal in the middle
    this.currentAnimal = this.animals.next()
    this.currentAnimal.position.set(this.game.world.centerX, 230)

    // left arrow
    this.leftArrow = this.game.add.sprite(80, 120, 'arrow')
    this.leftArrow.anchor.setTo(0.5)
    this.leftArrow.scale.x = -1
    this.leftArrow.customParams = { direction: -1 }

    // left arrow allow user input
    this.leftArrow.inputEnabled = true
    this.leftArrow.input.pixelPerfectClick = true
    this.leftArrow.events.onInputDown.add(this.eventSwitchAnimal, this)

    // right arrow
    this.rightArrow = this.game.add.sprite(560, 120, 'arrow')
    this.rightArrow.anchor.setTo(0.5)
    this.rightArrow.customParams = { direction: 1 }

    // right arrow user input
    this.rightArrow.inputEnabled = true
    this.rightArrow.input.pixelPerfectClick = true
    this.rightArrow.events.onInputDown.add(this.eventSwitchAnimal, this)
  },

  // this is executed multiple times per second
  update() {
  },

  eventSwitchAnimal(sprite) {
    let newAnimal

    if (sprite.customParams.direction > 0) {
      newAnimal = this.animals.next()
    } else {
      newAnimal = this.animals.previous()
    }

    this.currentAnimal.x = -1000
    newAnimal.x = this.game.world.centerX
    this.currentAnimal = newAnimal
  },

  eventAnimateAnimal(sprite) {
    sprite.play('animate')
  }
}

// initiate the Phaser framework
const game = new Phaser.Game(640, 360, Phaser.AUTO)

game.state.add('GameState', GameState)
game.state.start('GameState')
