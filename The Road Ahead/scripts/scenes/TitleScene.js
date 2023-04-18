export default class TitleScene extends Phaser.Scene {
    constructor() {
      super("TitleScene");
    }
  
    preload() {
      this.load.image("bg", "/assets/background/1.png");
      this.load.image("bg2", "/assets/background/2.png");
      this.load.image("bg3", "/assets/background/3.png");
      this.load.image("bg4", "/assets/background/4.png");
      this.load.image("bg5", "/assets/background/5.png");
      this.load.image("bg6", "/assets/background/6.png");
      this.load.image("Mainbg", "/assets/background/mainbg.png");
      this.load.image("logo", "/assets/images/GameLogo.png");
      this.load.image("playButton", "/assets/buttons/Play.png");
      this.load.image("instructionsButton", "/assets/buttons/Guide.png");
      this.load.image("creditsButton", "/assets/buttons/Credits.png");
      this.load.image("quitButton", "/assets/buttons/Quit.png");
      this.load.audio("introBGM", "/assets/audio/MenuBGM.mp3");
      this.load.audio("buttonHover", "/assets/audio/HoverButtonSFX.mp3");
      this.load.audio("buttonClick", "/assets/audio/ClickButtonSFX.mp3");
    }
  
    create() {
      //Background
      let bg = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Mainbg"
      );
      bg.setScale(3);
  
      //Logo
      let logo = this.add.image(
        this.cameras.main.centerX,
        100,
        "logo"
      );
      logo.setScale(1);
  
    // Play Button Coiny Font
    let playButton = this.add.image(
        this.cameras.main.centerX,
        200,
        "playButton"
    );
    playButton.setScale(0.4);
    playButton.setInteractive({ useHandCursor: true });
    playButton.on("pointerover", () => {
        this.sound.play("buttonHover");
    });
    playButton.on("pointerdown", () => {
        this.sound.play("buttonClick");
        this.play();
    });
  
      // Instructions Button
      let instructionsButton = this.add.image(
        this.cameras.main.centerX,
        270,
        "instructionsButton"
      );
      instructionsButton.setScale(0.4);
      instructionsButton.setInteractive({ useHandCursor: true });
      instructionsButton.on("pointerover", () => {
        this.sound.play("buttonHover");
      });
      instructionsButton.on("pointerdown", () => this.instructions());
  
      // Credits Button
      let creditsButton = this.add.image(
        this.cameras.main.centerX,
        340,
        "creditsButton"
      );
      creditsButton.setScale(0.4);
      creditsButton.setInteractive({ useHandCursor: true });
      creditsButton.on("pointerover", () => {
        this.sound.play("buttonHover");
      });
      creditsButton.on("pointerdown", () => this.credits());
  
      // Quit Button
      let quitButton = this.add.image(
        this.cameras.main.centerX,
        410,
        "quitButton"
      );
      quitButton.setScale(0.4);
      quitButton.setInteractive({ useHandCursor: true });
      quitButton.on("pointerover", () => {
        this.sound.play("buttonHover");
      });
      quitButton.on("pointerdown", () => this.quit())


    // IntroBGM
    if (!this.sound.get("introBGM")) {
      this.introBGM = this.sound.add("introBGM", { loop: true });
      this.introBGM.play();
      this.introBGM.volume = 0.3
    } else if (!this.sound.get("introBGM").isPlaying) {
      this.sound.get("introBGM").play();
    }

    //Hover Button SFX
    let buttonHover = this.sound.add("buttonHover");
    buttonHover.volume = 0.1;

    //Click Button SFX
    let buttonClick = this.sound.add("buttonClick");
    buttonClick.volume = 1;

    }
  
    play() {
      this.scene.start("GameScene");
      this.sound.stopAll();
    }
  
    instructions() {
      this.scene.start("InstructionScene");
      this.sound.play("buttonClick");
    }
  
    credits() {
      this.scene.start("CreditsScene");
      this.sound.play("buttonClick");
    }
  
    quit() {
        if (confirm("Are you sure you want to quit?")) {
          var newWindow = window.open("", "_self");
          window.close();
          newWindow.close();
        }
      }
  }