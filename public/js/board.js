// Board object
let board = {
    // Variables
    width: 0,
    height: 0,
    tiles: [],
    
    // Initialization of new board
    // Board coords are (width, height)
    initializeBoard: function() {
        if(Number.isNaN(width) || Number.isNaN(height)) {
             throw console.error("NaN detected");
        }
        for(let i = 0; i < w; i++) {
            tiles[i] = [];
            for(let j = 0; j < h; i++) {
                console.log("hello (" + i + ", " + j + ")");
                tiles[i][j] = "(" + i + ", " + j + ")";
                
            }
        }
        console.log(tiles)
    }
};


// Tile object
let tile = {
    // Variables
    wall: false,
    contents: 0,

    // Make wall method
    setWall: function() {
        wall = true;
    },

    // Change tile contents method
    changeContents: function() {
        contents = "a friend";
    }
}