export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super("CreditsScene");
  }

  preload() {
    this.load.image("CreditsPNG", "/assets/images/CreditsIMG.png");
    this.load.image("backButton", "/assets/buttons/Back.png");
  }

  create() {
    // Background Image
    let bg = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Mainbg"
      );
      bg.setScale(3);

    // Credits Image
    let CreditsPNG = this.add.image(
        this.cameras.main.centerX,
        250,
        "CreditsPNG"
      );
      CreditsPNG.setScale(1);

    // Back Button
    let backButton = this.add.image(
        70,
        40,
        "backButton"
      );
    backButton.setScale(0.4);
    backButton.setInteractive({ useHandCursor: true });
    backButton.on("pointerover", () => {
        this.sound.play("buttonHover");
    });
    backButton.on("pointerdown", () => {
      this.scene.start("TitleScene");
      this.sound.play("buttonClick");
    });
  }
}