

/*  Add Items in the list */
var itemNumber=0;
function addItem() {

    var tableRef = document.getElementById('itemList').getElementsByTagName('tbody')[0];
    var newRow   = tableRef.insertRow();
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);

    newCell2.className = "close";
    newCell2.innerHTML = "\u00D7";
    
    var newItem = document.getElementById("inputItem").value;
    var tnode = document.createTextNode(newItem);


    
    if(newItem != '') {
        newCell1.appendChild(tnode);
    }

    var close = document.getElementsByClassName("close");

    close[itemNumber].onclick = function(){
        var currTr = this.parentElement;
        document.getElementById("itemList").deleteRow(currTr.rowIndex);
        itemNumber--;
    }


    itemNumber++;
}


document.getElementById("inputItem").addEventListener("keyup",function() {
    if(event.keyCode=='13'){
        addItem();
    }
});
