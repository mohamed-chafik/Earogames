let menu = document.querySelector('.menu-icons');
let navbar = document.querySelector('.menu');
menu.onclick = () =>{
    navbar.classList.toggle('active')
    menu.classList.toggle('move');

}
// notification
let notification = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () => {
    notification.classList.toggle('active');
  }

// swipper script
var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        dissableOnInterection: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });


// categorize--------------------------------------------------------

 


const showsction = document.getElementById('action');
const item = document.querySelectorAll('#Adventure,#Puzzle,#Racing,#Simulation,#Fps,#Rpg,#Sports,.trending,.home,.heading');
const others = document.querySelectorAll("#Action");

// Add a click event listener to the button
showsction.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others.forEach(item => {
        item.style.display = 'block';
        
        
    });
})



const showadventure = document.getElementById('adventure');
const item1 = document.querySelectorAll('#Action,#Puzzle,#Racing,#Simulation,#Fps,#Rpg,#Sports,.trending,.home,.heading');
const others1 = document.querySelectorAll("#Adventure");

// Add a click event listener to the button
showadventure.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item1.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others1.forEach(item => {
        item.style.display = 'block';
        
        
    });
})
 


const showpuzzle = document.getElementById('puzzle');
const item2 = document.querySelectorAll('#Action,#Adventure,#Racing,#Simulation,#Fps,#Rpg,#Sports,.trending,.home,.heading');
const others2 = document.querySelectorAll("#Puzzle");

// Add a click event listener to the button
showpuzzle.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item2.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others2.forEach(item => {
        item.style.display = 'block';
        
        
    });
})
 


const showrecing = document.getElementById('racing');
const item3 = document.querySelectorAll('#Action,#Adventure,#Puzzle,#Simulation,#Fps,#Rpg,#Sports,.trending,.home,.heading');
const others3 = document.querySelectorAll("#Racing");

// Add a click event listener to the button
showrecing.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item3.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others3.forEach(item => {
        item.style.display = 'block';
        
        
    });
})
 


const showsimulation = document.getElementById('simulation');
const item4 = document.querySelectorAll('#Action,#Adventure,#Puzzle,#Racing,#Fps,#Rpg,#Sports,.trending,.home,.heading');
const others4 = document.querySelectorAll("#Simulation");

// Add a click event listener to the button
showsimulation.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item4.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others4.forEach(item => {
        item.style.display = 'block';
        
        
    });
})


const showfps = document.getElementById('fps');
const item5 = document.querySelectorAll('#Action,#Adventure,#Puzzle,#Racing,#Simulation,#Rpg,#Sports,.trending,.home,.heading');
const others5 = document.querySelectorAll("#Fps");

// Add a click event listener to the button
showfps.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item5.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others5.forEach(item => {
        item.style.display = 'block';
        
        
    });
})




const showrpg = document.getElementById('rpg');
const item6 = document.querySelectorAll('#Action,#Adventure,#Puzzle,#Racing,#Simulation,#Fps,#Sports,.trending,.home,.heading');
const others6 = document.querySelectorAll("#Rpg");

// Add a click event listener to the button
showrpg.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item6.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others6.forEach(item => {
        item.style.display = 'block';
        
        
    });
})


const showsports = document.getElementById('sports');
const item7 = document.querySelectorAll('#Action,#Adventure,#Puzzle,#Racing,#Simulation,#Fps,#Rpg,.trending,.home,.heading');
const others7 = document.querySelectorAll("#Sports");

// Add a click event listener to the button
showsports.addEventListener('click', () => {
    // Loop through each item and apply the CSS change
    item7.forEach(item => {
        item.style.display = 'none';
        
        
    });
    others7.forEach(item => {
        item.style.display = 'block';
        
        
    });
})






