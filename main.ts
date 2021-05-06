scene.setBackgroundColor(7)
let normalMonkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
let happyMonkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . . f f f f f e e e e e f . f f 
    . . f d b f e e f f e e f . e f 
    . f f d d f e f f e e e f . e f 
    . f f f f f f e b b f e f f e f 
    . f d d f e e e d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
normalMonkey.setPosition(50, 50)
happyMonkey.setPosition(120, 80)
happyMonkey.say("Hi, I'm happy!", 1000)
animation.runMovementAnimation(
happyMonkey,
animation.animationPresets(animation.bobbing),
2000,
true
)
pause(2000)
happyMonkey.say("How are you doing?", 2000)
pause(2000)
normalMonkey.say("I'm doing ok", 1000)
pause(2000)
normalMonkey.say("What makes you so happy today?", 2000)
pause(2000)
happyMonkey.say("I found a forest full of bananas!!!", 2000)
pause(2000)
normalMonkey.say("Can I have some?", 1000)
pause(2000)
happyMonkey.say("Will it make you happy?", 1500)
pause(2000)
normalMonkey.say("Yes!", 1000)
pause(2000)
happyMonkey.say("Ok, take some.", 1000)
pause(2000)
normalMonkey.say("Thank you!!!", 1000)
let banana = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f . . . . . . . . . . . . . 
    . . f 5 5 . . . . . . . . . . . 
    . . 5 5 5 5 5 . . . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 5 5 5 . . . 
    . . . . . . . . . 5 5 5 5 5 . . 
    . . . . . . . . . . 5 5 5 5 . . 
    . . . . . . . . . . . . 5 f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
banana.setPosition(60, 60)
normalMonkey.destroy()
let happyMonkey2 = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d e e f . . . . 
    . . f f f d d f f d e f f . . . 
    . c d d e e d d d d e d d f . . 
    . c c d d d d c d d e d f f f . 
    . c d c c c c d d d e d f b d f 
    . . c d d d d d d e e f f d d f 
    . . . c d d d d e e f f e f f f 
    . . . . f f f e e f e e e f . . 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f e e f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
animation.runMovementAnimation(
happyMonkey2,
animation.animationPresets(animation.shake),
2000,
true
)
happyMonkey2.setPosition(50, 50)
happyMonkey2.say(":DDD", 5000)
