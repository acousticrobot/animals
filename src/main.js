import Phaser from 'phaser'

// this game will have only 1 state
const GameState = {

  // load the game assets before the game starts
  preload() {
    this.load.image('background', 'assets/images/background.png')
  },

  // executed after everything is loaded
  create() {
  },

  // this is executed multiple times per second
  update() {
  }
}

// initiate the Phaser framework
const game = new Phaser.Game(640, 360, Phaser.AUTO)

game.state.add('GameState', GameState)
game.state.start('GameState')
