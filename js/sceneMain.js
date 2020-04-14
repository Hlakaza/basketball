class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
      // this.load.spritesheet('hoop', 'images/hoopsprite.png', {frameWidth: 265, frameHeight: 194})	
    }
    create() {
        console.log("Ready!");
        // this.face = this.add.sprite(400/2, 640/2, "hoop");
        // this.anims.create({
        //         key: 'walk',
        //         frames: [
        //             { key: 'hoop',frame:0 },
        //             { key: 'hoop',frame:1 },
        //             { key: 'hoop',frame:2 },
        //             { key: 'hoop',frame:3 },
        //         ],
        //         frameRate: 20,
        //         repeat: 0
        //     });
        //     this.face.play('walk');

    }
    update() {}
}