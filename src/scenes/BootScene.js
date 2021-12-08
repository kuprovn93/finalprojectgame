import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('bootLogo', '/static/GALAXY_ADVENTURES_Logo.png');
    this.load.image('bootCopyright', '/static/DEVELOP_LOGO.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
