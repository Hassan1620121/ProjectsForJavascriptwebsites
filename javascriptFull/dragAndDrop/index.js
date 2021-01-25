console.log('This is a drage and top utility');
const imgBox = document.querySelector('.imgBox');

const whiteBoxes = document.getElementsByClassName('whiteBox');
//Event Listeners for draggalbe box imgBox
imgBox.addEventListener('dragstart',(e)=>{
    //Chora tab kiya
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className ='hide';
    }, 0);
    
    
});
imgBox.addEventListener('dragend',(e)=>{
    //Pakra tab kya
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';

    
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('DragOver has been triggered');
        
    });

    whiteBox.addEventListener('dragenter',(e)=>{
        console.log('Dragenter has been triggered');
        e.target.className += ' dashed';

    })

    whiteBox.addEventListener('dragleave',(e)=>{
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox';

    })
    
    whiteBox.addEventListener('drop',(e)=>{
        console.log('Drop has been triggered');
        e.target.append(imgBox);


    })
};

