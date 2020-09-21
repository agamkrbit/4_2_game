# Connect 4 in one line game backend

this library provides backed for "Connect 4 in one line" (written in node express) 

## Demo Link

[LINK for demo](http://ec2-13-127-99-193.ap-south-1.compute.amazonaws.com:5000)

[api collection (postman link)](https://www.getpostman.com/collections/21f39d653caff5a039b4)

## Api Detail

### start game POST http:\/\/<domain>\/game\/start
#### request body : empty
#### response :
```json
{
    "data": <userId>,
    "message": "successfull",
    "success": true
}
```
### start game GET http:\/\/<domain>\/game\/<userId>\/game
#### response :
```json
{
    "data": {
        "game": [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1]
        ],
        "activePlayer": 0,
        "playerWon": ""
    },
    "message": "successfull",
    "success": true
}
```
##### "-1" denotes empty box "0" mean "yellow" and "1" mean "blue"
##### activePlayer : tells about whose chance it is to play
##### playerWon : tells about which player won the game (empty mean not has won yet)

### start game POST http:\/\/<domain>\/game\/<userId>\/reset
#### request body : empty
#### response :
```json
{
    "data": {
        "game": [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1]
        ],
        "activePlayer": 0,
        "playerWon": ""
    },
    "message": "successfull",
    "success": true
}
```

### start game POST http:\/\/<domain>\/game\/<userId>\/add
#### request body :
```json
{
	"col" : <column number>
}
```
#### response :
```json
{
    "data": {
        "game": [
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1]
        ],
        "activePlayer": 0,
        "playerWon": ""
    },
    "message": "successfull",
    "success": true
}
```

##### in case of invalid request success will be false and if any player won the game playerWon will be (0 or 1) depending upon the player who won

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)