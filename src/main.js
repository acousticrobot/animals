import Phaser from 'phaser'

// this game will have only 1 state
const GameState = {

  // load the game assets before the game starts
  preload() {
    this.load.image('background', 'assets/images/background.png')
    this.load.image('arrow', 'assets/images/arrow.png')
    this.load.image('chicken', 'assets/images/chicken.png')
    this.load.image('pig', 'assets/images/pig.png')
    this.load.image('sheep', 'assets/images/sheep.png')
  },

  // executed after everything is loaded
  create() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true


    this.background = this.game.add.sprite(0, 0, 'background')

    this.sheep = this.game.add.sprite(this.game.world.centerX, 230, 'sheep')
    this.sheep.anchor.setTo(0.5)

    // left arrow
    this.leftArrow = this.game.add.sprite(80, 120, 'arrow')
    this.leftArrow.anchor.setTo(0.5)
    this.leftArrow.scale.x = -1
    this.leftArrow.customParams = { direction: -1 }

    // left arrow allow user input
    this.leftArrow.inputEnabled = true
    this.leftArrow.input.pixelPerfectClick = true
    this.leftArrow.events.onInputDown.add(this.switchAnimal, this)

    // right arrow
    this.rightArrow = this.game.add.sprite(560, 120, 'arrow')
    this.rightArrow.anchor.setTo(0.5)
    this.rightArrow.customParams = { direction: 1 }

    // right arrow user input
    this.rightArrow.inputEnabled = true
    this.rightArrow.input.pixelPerfectClick = true
    this.rightArrow.events.onInputDown.add(this.switchAnimal, this)
  },

  // this is executed multiple times per second
  update() {
  },

  eventSwitchAnimal() {
    // console.log('move animal')
  }

  // animateAnimal(sprite, event) {
  //   console.log('animate animal')
  // }
}

// initiate the Phaser framework
const game = new Phaser.Game(640, 360, Phaser.AUTO)

game.state.add('GameState', GameState)
game.state.start('GameState')
