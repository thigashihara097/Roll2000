/* List of things to do:
    When you double click on a cell it pulls up a pop up
    Get board to persist between page swaps
*/

addEventListener("DOMContentLoaded", main);

function main() {
    // Submit button listener
    document.querySelector("#create").addEventListener("click", createBoard);


    // Global variables
    let dragEl;         // Element being dragged
    let charList = [];  // List of characters on the board


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

        // Create popover menu
        makePopover(c, "Cell Actions", "I'm a popover");

        // Drag and drop events
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

    // DOM manipulation function - Creates a popover menu for the passed in element
    function makePopover(elem, head, text) {
        elem.setAttribute("data-bs-toggle", "popover");
        elem.setAttribute("title", head);
        elem.setAttribute("data-bs-content", text);
        elem.setAttribute("data-bs-placement", "bottom");

        // Popover enabling
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    }


    // When a drag starts
    function dragStart(event) {
        event.dataTransfer.setData("text/html", event.target.innerHTML);
        dragEl = event.target;
    }

    // Preparing table cells for dropping
    function dragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }

    // Actually dropping
    function drop(event) {
        event.preventDefault();

        // Prepare variables
        let c = this.querySelector("p");        // The inside element of the cell
        let t = c.cloneNode(true);              // A copy of the element in the cell
        let dr = dragEl.cloneNode(true);        // A copy of the element being dragged

        // Check if the character is being moved to the board from the list or vice versa
        if(dragEl.parentNode.nodeName == "DIV" && c.parentNode.nodeName == "TD") {       // If the element came from the list
            charList.push(dragEl.innerHTML);
            if(c.textContent.length != 0) {
                let i = charList.findIndex((n) => n == c.innerHTML)
                charList.splice(i, 1);
            }
        }
        if(dragEl.parentNode.nodeName == "TD" && c.parentNode.nodeName == "DIV") {      // If the element is leaving the table
            let i = charList.findIndex((n) => n == dr.innerHTML)
            charList.splice(i, 1);
            
            if(c.textContent.length != 0) {
                charList.push(c.innerHTML);
            }
        }
        
        console.log("char on board: " + charList)

        // Swap the elements
        c.replaceWith(dr);
        dragEl.replaceWith(t)

        // If a blank p was swapped don't give it draggability
        if(t.textContent.length == 0) {
            // Make new element in the old place movable
            t.setAttribute("draggable", "true");
            t.addEventListener("dragstart", dragStart);
            t.addEventListener("dragend", dragEnd);
        }

        // Make the created element movable itself
        dr.setAttribute("draggable", "true");
        dr.addEventListener("dragstart", dragStart);
        dr.addEventListener("dragend", dragEnd);
    }

    // After a drop is complete
    function dragEnd(event) {
        if(event.dataTransfer.dropEffect !== "none") {
            event.target.remove();
        }
    }
}