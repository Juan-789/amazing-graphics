input.onButtonPressed(Button.A, function () {
    while (_var == 1) {
        while (true) {
            basic.showIcon(IconNames.Duck)
            basic.pause(100)
            basic.showIcon(IconNames.Tortoise)
            basic.pause(100)
            basic.showIcon(IconNames.Butterfly)
            basic.pause(100)
            basic.showIcon(IconNames.StickFigure)
            basic.pause(100)
            basic.showIcon(IconNames.Triangle)
            basic.pause(100)
        }
    }
})
let _var = 0
_var = 1
