const btn = document.querySelectorAll('.spot');
const player1_score = document.getElementById('player1');
const player2_score = document.getElementById('player2');
const Draws = document.getElementById('tie');
const text = document.getElementById('Turn');
const results = document.getElementById('results');
const restart = document.getElementById('restart');
// const carryon = document.getElementById('continue');
const thewinner = document.getElementById('The_winner');
const goback = document.getElementById('text'); 
const Xbtn = document.getElementById('X'); 
const Obtn = document.getElementById('O'); 
const startscreen = document.getElementById('startscreen'); 

const player2 = document.getElementById('player2_opps'); 
const CPU = document.getElementById('CPU'); 
const chooseopponent_display = document.getElementById('chooseopponent'); 

const showresults= document.getElementById('P_results'); 

let isit_x_turn;
let V_num_of_itr=3;
let H_num_of_itr=3;
let D_num_of_itr=2;

let PL1_score=0;
let PL2_score=0;
let pl1_raws_counter=[];
let pl2_raws_counter=0;
let tie;
let opponent;
let cpu_uc;
let cpu_bc;
let winner;
//let draw_num=0;
let check_if_draw;


let n=[];
let m=[];
let children=[];
let H_positions = [ 
        [0,1,2], 
        [3,4,5],
        [6,7,8]
    ];

let V_positions = [ 
        [0,3,6], 
        [1,4,7],
        [2,5,8]
    ];    
    
let D_positions = [
    [0,4,8],
    [2,4,6]
]

let CPU_positions = [0,1,2,3,4,5,6,7,8];
let length_cpu_array=CPU_positions.length;

Player_1=[];
Player_2=[];
cpu_1=[];
H_copy_array_p1=[[],[],[]];
V_copy_array_p1=[[],[],[]];
D_copy_array_p1=[[],[],[]];          
H_copy_array_p2=[[],[],[]];
V_copy_array_p2=[[],[],[]];
D_copy_array_p2=[[],[],[]]; 
H_copy_array_cpu=[[],[],[]];
V_copy_array_cpu=[[],[],[]];
D_copy_array_cpu=[[],[],[]]; 

// let did_player_win=0;
    
function update_game(){
    H_copy_array_p1=[[],[],[]];
    V_copy_array_p1=[[],[],[]];
    D_copy_array_p1=[[],[],[]];          
    H_copy_array_p2=[[],[],[]];
    V_copy_array_p2=[[],[],[]];
    D_copy_array_p2=[[],[],[]]; 
    H_copy_array_cpu=[[],[],[]];
    V_copy_array_cpu=[[],[],[]];
    D_copy_array_cpu=[[],[],[]]; 
    check_if_draw='false';
    CPU_positions = [0,1,2,3,4,5,6,7,8];
 
     //length_cpu_array=9;
}

function  displayresults(){
    results.style.display='block';
    thewinner.textContent='THE WINNER IS: '+text.textContent ;
   
    if(check_if_draw==true){
        thewinner.textContent=  'IT IS A DRAW!' ;
    }
   
}

function Restart(){
    // for(let i=0; i<btn.length; i++){
    //     btn[i].innerHTML = '';
    //     btn[i].classList.remove('green_base');
    //     btn[i].classList.remove('yellow_base');
        
    // }
    // PL1_score=0;
    // PL2_score=0;
    // player1_score.textContent=PL1_score;
    // player2_score.textContent=PL2_score;
    // n=[];
   // console.log('should be 0',draw_num);
   location.reload();
}
function Continue(){
    for(let i=0; i<btn.length; i++){
        btn[i].innerHTML = '';
        btn[i].classList.remove('green_base');
        btn[i].classList.remove('yellow_base');
        n=[];

}


}            
    
// function Goback(){
//     btn[n.slice(-1)].innerHTML = '';  
//     btn[n.slice(-1)].classList.remove('green_base');
//     btn[n.slice(-1)].classList.remove('yellow_base');
//     n.pop(n.slice(-1));
//     CPU_positions.push(n.slice(-1));
//     text.textContent = 'Turn';

//     if(isit_x_turn){
    
//     isit_x_turn = false;
//     }
//    else{ isit_x_turn = true;}
// }
function chooseopponent(){
   
    chooseopponent_display.style.display='block'; 
}
function displaystartscreen(){
    setTimeout(() => {  startscreen.style.display='block'; }, 9);
    
}




function game_rules(positions,copy_array,num_of_itr,Player){
    positions.forEach((rows)=>{
      
        rows.forEach((rows_el)=>{
if(Player.includes(rows_el)){
    

   let position_index= positions.findIndex(F_position_index)
   let rows_index=   rows.findIndex(F_rows_index)



   copy_array[position_index][rows_index]=Player[0];

  win_condition(positions,copy_array,num_of_itr,Player);
   
function F_rows_index(ele){
  return  ele==Player;
}
function F_position_index(rowss){
    return  rowss==rows;
    
}
}
        })
        })        
}


    
function win_condition(array,copy_array_r,num_of_itr,Player){


    array.forEach((rows)=>{
        for(let i=0; i<num_of_itr; i++){
    if(JSON.stringify(rows)==JSON.stringify(copy_array_r[i]) &Player===Player_1) {
       
        text.textContent='X';
        PL1_score++;
        // player1_score.textContent='player1:' + PL1_score;

        update_game();
        displayresults();        

            }
    if(JSON.stringify(rows)==JSON.stringify(copy_array_r[i]) &Player===Player_2) {
        
                 text.textContent='O';
                 PL2_score++;
                // player2_score.textContent=' player2:' + PL2_score;
                update_game();
                displayresults();
            
       
}  
if(JSON.stringify(rows)==JSON.stringify(copy_array_r[i]) &Player===cpu_1) {
     text.textContent='CPU';

    // player2_score.textContent=' player2:' + PL2_score;
    update_game();
    displayresults();


}   
}    
})
}

function play(){
 
    
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',()=> {
       
         
        switch( isit_x_turn){

case true:
 
      if (btn[i].childNodes.length===0){
    btn[i].innerHTML = "&#x58;"; // x uc //
    btn[i].classList.add('green_base');
    n.push(i); 
    Player_1.push(i);
    
    game_rules(H_positions,H_copy_array_p1,H_num_of_itr,Player_1)
    game_rules(V_positions,V_copy_array_p1,V_num_of_itr,Player_1)
    game_rules(D_positions,D_copy_array_p1,D_num_of_itr,Player_1)
   
   
    const iindex = CPU_positions.indexOf(Player_1[0]);

    CPU_positions.splice(iindex, 1);

  
    if(CPU_positions.length==0){check_if_draw=true; Draw()}
    console.log('x:',CPU_positions);

     Player_1.shift();
     text.textContent = 'O Turn';
     isit_x_turn=false;
    
      }  
      if(opponent=='cpu'){
        cpu_2();
      }
     
       break;



case false:

        text.textContent = 'X Turn';
          if(btn[i].childNodes.length===0){
        btn[i].innerHTML = "&#x4f;"; // o uc //
        btn[i].classList.add('yellow_base');
        n.push(i);
        Player_2.push(i);

        game_rules(H_positions,H_copy_array_p2,H_num_of_itr,Player_2)
        game_rules(V_positions,V_copy_array_p2,V_num_of_itr,Player_2)
        game_rules(D_positions,D_copy_array_p2,D_num_of_itr,Player_2)
       
        const iindex = CPU_positions.indexOf(Player_2[0]);

        CPU_positions.splice(iindex, 1);
        if(CPU_positions.length==0){check_if_draw=true; Draw()}  

        console.log('o:',CPU_positions)
        Player_2.shift();
        isit_x_turn=true;
    }
    if(opponent=='cpu'){
        cpu_2();
      }

  break;

  default:
    isit_x_turn=true;
    
        
}
}) 
} 

}

function cpu_2(){
   
   length_cpu_array=CPU_positions.length;
   let cpu_index = Math.floor(Math.random() * length_cpu_array);

   let R_indix=  CPU_positions[cpu_index];
        if( length_cpu_array!=0){
        if(btn[R_indix].childNodes.length===0){
            btn[R_indix].innerHTML = cpu_uc; // o uc //
            btn[R_indix].classList.add(cpu_bc);
            n.push(R_indix);
            cpu_1.push(R_indix);
    
            game_rules(H_positions,H_copy_array_cpu,H_num_of_itr,cpu_1)
            game_rules(V_positions,V_copy_array_cpu,V_num_of_itr,cpu_1)
            game_rules(D_positions,D_copy_array_cpu,D_num_of_itr,cpu_1)
           
            cpu_1.shift();
            text.textContent = 'X Turn';
 
    } 
}


if(!check_if_draw){
    const iindex = CPU_positions.indexOf(R_indix);

    CPU_positions.splice(iindex, 1);

    length_cpu_array=CPU_positions.length;
   
}if(length_cpu_array==0){check_if_draw=true; Draw()}
console.log('CPU:',CPU_positions)
    
            if(isit_x_turn){
            isit_x_turn=false;
            }else{isit_x_turn=true;}
            return R_indix;
        // })
}
function Draw(){
    
   
     
    displayresults();  
    update_game(); 
}



restart.addEventListener('click',()=>{
    update_game(); 
  //  play();
    results.style.display='none';
    Restart();
})
// carryon.addEventListener('click',()=>{
//     update_game(); 
//  //   play();
//     results.style.display='none';
//     Continue()
// })

// goback.addEventListener('click',()=>{
//     if(n.length>0){
//     Goback();
//     }
// })
Xbtn.addEventListener('click',()=>{
     isit_x_turn=true;
     startscreen.style.display='none'
     cpu_uc= "&#x4f;";
     cpu_bc='yellow_base';
     
})
Obtn.addEventListener('click',()=>{
    isit_x_turn=false;
    startscreen.style.display='none'
    cpu_uc= "&#x58;";
    cpu_bc='green_base';
})

CPU.addEventListener('click',()=>{
    opponent='cpu';
    chooseopponent_display.style.display='none'
    displaystartscreen();
   

})

player2.addEventListener('click',()=>{
    opponent='player2';
    chooseopponent_display.style.display='none';
    displaystartscreen();

})

chooseopponent();



play();
