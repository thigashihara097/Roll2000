/* List of things to do:
    Add a list of characters on the board (in the backend)
    Be able to take the characters off the board
    When you right-click on a cell it pulls up a pop up

*/

addEventListener("DOMContentLoaded", main);

function main() {
    // Submit button listener
    document.querySelector("#create").addEventListener("click", createBoard);


    // Create a new board
    function createBoard() {
        // Check if there is already a table and remove if so
        if(document.querySelector("table") != null) {
            let t = document.querySelector("table");
            t.parentNode.removeChild(t);
        }

        // Get the input values and create a board
        let w = document.querySelector("#width").value;
        let h = document.querySelector("#height").value;
        let b = new Board(w, h);
        console.log(b);

        // Add characters to sidebar
        let a = ["abra", "cadabra", "alakazam"]     // Temp demo variable before integration :)
        displayCharacters(a);
    }
    
    /*
    *   DOM manipulation function - Display list of characters that can be placed on the board
    *
    *   @param array of character objects 
    */
    function displayCharacters(characters) {
        // Check if this is the first time, if not remove previous list, if so set up event listeners for the list div
        let pre = document.querySelector("main").querySelectorAll("div")[1].querySelectorAll("p");
        if(pre.length != 0) {
            for(let p of pre) {
                p.parentNode.removeChild(p);
            }
        } else {
            let d = document.querySelector("#character");
            console.log(d)
            d.addEventListener("dragover", dragOver);
            d.addEventListener("drop", drop);
        }

        // Go through the passed in array and create a p for each
        for(let character of characters) {
            let c = document.createElement("p");
            document.querySelector("main").querySelectorAll("div")[1].appendChild(c);
            c.textContent = character;

            // Make each character moveable
            c.setAttribute("draggable", "true");
            c.addEventListener("dragstart", dragStart);
            c.addEventListener("dragend", dragEnd);
        }
    }


    // Board object
    function Board(w, h) {
        if(Number.isNaN(w) || Number.isNaN(h)) {
            throw console.error("NaN detected");
        }

        // Variables
        this.width = w;
        this.height = h;

        // Create a blank table to display the board later
        addTable();

        // Populate tiles array
        for(let i = 0; i < w; i++) {
            addRow();
            for(let j = 0; j < h; j++) {
                addCell(i, null);
            }
        }
    }


    // DOM manipulation function - Add a table to the page
    function addTable() {
        let t = document.createElement("table");
        document.body.querySelector("main").querySelector("div").appendChild(t);

        // Add an event listener for changing cells to walls
        t.addEventListener("click", wallVisual);
    }

    // DOM manipulation function - Add rows to the table
    function addRow() {
        let t = document.querySelector("table");
        let r = document.createElement("tr");
        t.appendChild(r);
    } 

    // DOM manipulation function - Add cells to the table
    function addCell(row, content) {
        let t = document.querySelectorAll("tr")[row];
        let c = document.createElement("td");
        t.appendChild(c);
        let p = document.createElement("p");
        c.appendChild(p);
        p.textContent = content;

        c.addEventListener("dragover", dragOver);
        c.addEventListener("drop", drop);
    }

    // DOM manipulation function - Changes the visual appearance of wall tiles
    function wallVisual(event) {
        let c = event.target;
        if(!c.classList.contains("wall")) {
            c.classList.add("wall");
        } else {
            c.classList.remove("wall");
        }
    }


    // When a drag starts
    function dragStart(event) {
        event.dataTransfer.setData("text/html", event.target.innerHTML);
        console.log("start")
    }

    // Preparing table cells for dropping
    function dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        console.log("over")
    }

    // Actually dropping
    function drop(event) {
        event.preventDefault();
        let character = event.dataTransfer.getData("text/html");
        let p = document.createElement("p");
        event.target.appendChild(p);
        p.innerHTML = character;

        // Make it movable itself
        p.setAttribute("draggable", "true");
        p.addEventListener("dragstart", dragStart);
        p.addEventListener("dragend", dragEnd);

        console.log("boop")
    }

    // After a drop is complete
    function dragEnd(event) {
        if(event.dataTransfer.dropEffect !== "none") {
            event.target.remove();
        }
        console.log("done")
    }
}