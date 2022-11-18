addEventListener("DOMContentLoaded", main);

function main() {
    console.log("loaded");
    // Submit button listener
    document.querySelector("button").addEventListener("click", createBoard);

    // Create a new board
    function createBoard() {
        console.log("click");
        let w = document.querySelector("#width").value;
        let h = document.querySelector("#height").value;
        let b = new Board(w, h);
        console.log(b);
    }

    // Board object
    function Board(w, h) {
        console.log("Initializing...");
        console.log("width: " + w + ", height: " + h);

        if(Number.isNaN(w) || Number.isNaN(h)) {
            throw console.error("NaN detected");
        }

        // Variables
        this.width = w;
        this.height = h;
        this.tiles = [];

        for(let i = 0; i < w; i++) {
            console.log("i: " + i)
            this.tiles[i] = [];
            for(let j = 0; j < h; j++) {
                console.log("hello (" + i + ", " + j + ")");
                this.tiles[i][j] = "(" + i + ", " + j + ")";
                
            }
        }
        console.log(this.tiles)
    }


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
}
