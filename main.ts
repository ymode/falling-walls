// Falling Walls v0.5
let game_state = true
let game_speed = 1500
let score_disp = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
let x = 2
let y = 4
let opening = randint(0, 4)
let player_score = 0
function player_one(x: number) {
    led.plot(x, 4)
}

function clear_leds() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            led.unplot(i, j)
        }
    }
}

function wall(level: number) {
    for (let i = 0; i < 5; i++) {
        if (i != opening) {
            led.plot(i, level)
        }
        
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (x > 0) {
        x -= 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (x < 4) {
        x += 1
    }
    
})
while (game_state) {
    opening = randint(0, 4)
    for (let j = 0; j < 5; j++) {
        clear_leds()
        player_one(x)
        wall(j)
        if (j == 4) {
            if (x == opening) {
                player_score += 5
                score_disp.show(player_score)
                game_speed -= player_score
                
            } else {
                game_state = false
            }
            
        }
        
        basic.pause(game_speed)
    }
}
