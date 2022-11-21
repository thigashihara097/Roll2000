addEventListener("DOMContentLoaded", main);

function main() {
    // Submit button listener
    document.querySelector("button").addEventListener("click", createBoard);

    // Create a new board
    function createBoard() {
        let w = document.querySelector("#width").value;
        let h = document.querySelector("#height").value;
        let b = new Board(w, h);
        console.log(b);
    }

    // Board object
    function Board(w, h) {
        if(Number.isNaN(w) || Number.isNaN(h)) {
            throw console.error("NaN detected");
        }

        // Variables
        this.width = w;
        this.height = h;
        this.tiles = [];

        // Create a blank table to display the board later
        addTable();

        // Populate tiles array
        for(let i = 0; i < w; i++) {
            this.tiles[i] = [];
            addRow();
            for(let j = 0; j < h; j++) {
                this.tiles[i][j] = Tile("(" + i + ", " + j + ")");
                addCell(i);
            }
        }
        console.log(this.tiles)
    }

    // DOM manipulation function - Add a table to the page
    function addTable() {
        let t = document.createElement("table");
        document.body.appendChild(t);
    }

    // DOM manipulation function - Add rows to the table
    function addRow() {
        let t = document.querySelector("table");
        let r = document.createElement("tr");
        t.appendChild(r);
    } 

    // DOM manipulation function - Add cells to the table
    function addCell(row) {
        let t = document.querySelectorAll("tr")[row];
        let c = document.createElement("td");
        t.appendChild(c);
    }

    // Tile object
    function Tile(contents) {
        // Variables
        this.wall = false;
        this.contents = contents;
    }

    // Make wall Tile method
    Tile.prototype.setWall = function() {
        this.wall = true;
    }

    // Change tile contents Tile method
    Tile.prototype.changeContents = function() {
        this.contents = "a friend";
    }
}
