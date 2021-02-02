// Write your code here!

//after index.js is processed
    //  1) no longer has DOM node 'main#main' => NODE ELEMENT REMOVED
    document.querySelector('main#main').remove()


    // 2 & 3) has a 'newHeader' variable that points to node 'h1#victory'=> NEW ELEMENT CREATRD AND ASSIGNED TO VARIABLE NEWHEADER
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory'
    

    //  4) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
    newHeader.innerHTML = "Diana is the champion!";
    