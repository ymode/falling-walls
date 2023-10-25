#Falling Walls v0.5

game_state = True
game_speed = 1500
x = 2
y = 4
opening = randint(0, 4)
player_score = 0


def player_one(x):
    led.plot(x,4)

def clear_leds():
    for i in range(5):
        for j in range(5):
            led.unplot(i, j)

def wall(level):
    for i in range(5):
        if i != opening:
            led.plot(i,level)

def on_button_pressed_a():
    global x
    if x > 0:
        x -= 1

def on_button_pressed_b():
    global x
    if x < 4:
        x += 1       

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)  

while game_state:
    opening = randint(0, 4)
    for j in range(5):
        clear_leds()
        player_one(x)
        wall(j)
        if j == 4:
            if x == opening:
                player_score += 5
                game_speed -= player_score
                pass
            else: 
                game_state = False
        basic.pause(game_speed)
    



        