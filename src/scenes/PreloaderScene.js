import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.cameras.main.fadeIn(800, 0, 0, 0);
    this.add.image(400, 330, 'bootLogo');
    this.add.image(400, 760, 'bootCopyright');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x00FF00, 0.8); // fillStyle( , alpha=1.0)
    progressBox.fillRect(240, 490, 320, 30); // fillRect(x, y, width, height)

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2 - 15,
      y: height / 2 + 105,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 500, 300 * value, 10);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);

    this.load.crossOrigin = 'Anonymous';
    this.load.image('titleScreen', '/static/titleLogo.png');
    this.load.image('playButton', '/static/Play.png');
    this.load.image('playButtonFocus', '/static/PlayFocus.png');
    this.load.image('optionsButton', '/static/Options.png');
    this.load.image('optionsButtonFocus', '/static/OptionsFocus.png');
    this.load.image('creditsButton', '/static/Credits.png');
    this.load.image('creditsButtonFocus', '/static/CreditsFocus.png');
    this.load.image('checkbox', '/static/checkbox.png');
    this.load.image('checkboxChecked', '/static/checkboxChecked.png');
    this.load.image('menuButton', '/static/menuButton.png');
    this.load.image('menuButtonFocus', '/static/menuButtonFocus.png');
    this.load.image('gameOverTitle', '/static/GameOver.png');
    this.load.image('restartButton', '/static/Restart.png');
    this.load.image('restartButtonFocus', '/static/restartButtonFocus.png');
    this.load.image('skipButton', '/static/skipButton.png');
    this.load.image('skipButtonFocus', '/static/skipButtonFocus.png');
    this.load.image('confirmButton', '/static/CONFIRM.png');
    this.load.image('confirmButtonFocus', '/static/CONFIRM_FOCUS.png');
    this.load.image('nextButton', '/static/nextButton.png');
    this.load.image('nextButtonFocus', '/static/nextButtonFocus.png');
    this.load.image('highscoresButton', '/static/Highscore.png');
    this.load.image('highscoresButtonFocus', '/static/HighscoreFocus.png');
    this.load.image('mainMenuButton', '/static/MainMenu.png');
    this.load.image('mainMenuButtonFocus', '/static/mainMenuButtonFocus.png');

    // GAME SCENE ASSETS
    this.load.image('background0', '/static/bkgd_0.png');
    this.load.image('background1', '/static/bkgd_1.png');
    this.load.image('background2', '/static/bkgd_2.png');
    this.load.image('background3', '/static/bkgd_3.png');
    this.load.image('background4', '/static/bkgd_4.png');
    this.load.image('background5', '/static/bkgd_5.png');
    this.load.image('background6', '/static/bkgd_6.png');
    this.load.image('background7', '/static/bkgd_7.png');

    // Explosion spritesheets
    this.load.spritesheet('explosion1', '/static/explosion1.png', {
      frameWidth: 96,
      frameHeight: 96,
    });
    this.load.spritesheet('explosion2', '/static/explosion2.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('explosion3', '/static/explosion3.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet('explosion4', '/static/explosion4.png', {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.load.spritesheet('explosion5', '/static/explosion5.png', {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.load.spritesheet('explosion6', '/static/explosion6.png', {
      frameWidth: 256,
      frameHeight: 256,
    });

    // NPC Assets
    this.load.image('starfleetCaptain', '/static/SecurityOfficer.png');

    // Enemy Ships & Lasers
    // Ninja Ship
    this.load.spritesheet('ninja', '/static/Ninja.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Ninja Laser
    this.load.image('ninjaLaser1', '/static/1.png');

    // UFO Ship
    this.load.spritesheet('ufo', '/static/UFO.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // UFO Lasers
    this.load.image('ufoLasers1', '/static/1.png');

    // Paranoid Ship
    this.load.spritesheet('paranoid', '/static/Paranoid.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Paranoid Lasers
    this.load.image('paranoidLasers5', '/static/5.png');

    // Saboteur Ship
    this.load.spritesheet('saboteur', '/static/Saboteur.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Saboteur Lasers
    this.load.image('saboteurLasers4', '/static/4.png');

    // Lightning Ship
    this.load.spritesheet('lightning', '/static/Lightning.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Lightning Lasers
    this.load.image('lightningLasers5', '/static/5.png');

    // // Player Ship
    //this.load.image('player', '/static/player.png');
    this.load.spritesheet('player', '/static/player.png', {
      frameWidth: 58,
      frameHeight: 57,
    });

    // Player lasers
    this.load.image('playerLaser3', '/static/3.png');

    // SFX
    this.load.audio('laser2', '/static/Laser_01.mp3');
    this.load.audio('laser4', '/static/Laser_03.mp3');
    this.load.audio('laser7', '/static/Laser_06.mp3');

    this.load.audio('explosion1', '/static/explosion01.wav');
    this.load.audio('explosion2', '/static/explosion02.wav');
    this.load.audio('explosion3', '/static/explosion03.wav');
    this.load.audio('explosion4', '/static/explosion04.wav');
    this.load.audio('explosion5', '/static/explosion05.wav');
    this.load.audio('explosion6', '/static/explosion06.wav');
    this.load.audio('explosion7', '/static/explosion07.wav');
    this.load.audio('explosion8', '/static/explosion08.wav');
    this.load.audio('explosion9', '/static/explosion09.wav');

    this.load.audio('buttonHover', '/static/buttonHover.ogg');
    this.load.audio('buttonSelect', '/static/buttonSelect.ogg');
    this.load.audio('gameStart', '/static/gameStart.mp3');

    // Game Music
    this.load.audio('titleMusic', ['/static/titleMusic.ogg']);
    this.load.audio('gameMusic', '/static/gameMusic.mp3');
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.cameras.main.fadeOut(500, 0, 0, 0);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.time.delayedCall(2000, () => {
          this.scene.start('PlayerNameScene');
        });
      });
    }
  }
}
