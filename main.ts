controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . . . . . 
        . . . . . 1 1 7 1 . . . . . . . 
        . . . . . 1 1 7 7 7 . . . . . . 
        . . . . . 1 1 7 1 . . . . . . . 
        . . . . 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, my_sprite2, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let projectile: Sprite = null
let my_sprite2: Sprite = null
my_sprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 . . . . . . . . . . . 
    . . . . 7 7 . . . 8 8 8 8 . . . 
    . . . . 7 7 7 . 8 8 8 8 8 8 . . 
    . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
    . . . . . f 7 7 1 1 1 1 1 7 7 7 
    . . . . . f f 7 1 1 1 1 7 7 7 . 
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
my_sprite2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(my_sprite2, 200, 200)
effects.starField.startScreenEffect()
forever(function () {
    music.playMelody("C5 E A A B D G A ", 120)
})
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . a a a . . . . . 
        . . . . . . . . . a a a . . . . 
        . . . . . . . . f f a a a . . . 
        . . . . . . . . . . . a a a a . 
        . . . . . a a a a a a a a 2 . . 
        . . . . 8 8 a a a a a a a 2 . . 
        . . . . 8 8 a a a a a a a 2 . . 
        . . . . . a a a a a a a a 2 . . 
        . . . . . . . . . . . a a a a . 
        . . . . . . . . f f a a a . . . 
        . . . . . . . . . a a a . . . . 
        . . . . . . . . a a a . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.left = scene.screenWidth()
    Bogey.y = randint(0, scene.screenHeight())
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
