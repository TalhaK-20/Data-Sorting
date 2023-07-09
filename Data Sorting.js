 
    function bubble_sort_Ascending_A_TO_Z(array){
        for(let i=0; i<(array.length); i++){
            for(let j=i; j<(array.length); j++){
                if(array[i]>array[j]){
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }
        }    
    }

    function display_data_A_TO_Z(array){
        console.log("\n   Displaying the Elements/Names from A to Z alphabetically \n")
        for(let t=0; t<array.length; t++){
            console.log(`At index ${t} = ${array[t]}`)
        }     
    }






    function bubble_sort_Descending_Z_TO_A(array){
        for(let i=0; i<(array.length); i++){
            for(let j=i; j<(array.length); j++){
                if(array[i]<array[j]){
                    let temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }
        }    
    }

    function display_data_Z_TO_A(array){
        console.log("\n   Displaying the Elements/Names from Z to A alphabetically \n")
        for(let t=0; t<array.length; t++){
            console.log(`At index ${t} = ${array[t]}`)
        }     
    }






function repeat(){

    let option

    console.log("Please first enter the details of your DATA :")                      
    var array = []
    const prompt = require("prompt-sync")({ sigint: true })
    var size = prompt("Enter the size of an array = ")
    for(let i = 0; i < size; i++){
        array[i] = prompt("Enter the names in an array = ")
    }

     
    do{
        console.log("\n\n  Welcome to the Data Sorting Software")
        console.log("       Developed by Talha Khalid\n\n")
        console.log("Which function should I perform :)\n")
        console.log("1. Sorting data from A to Z")
        console.log("2. Sorting data from Z to A")
        console.log("3. Wants to utilize both options '1' and '2'")
        console.log("4. Want to quit/exit :( ? \n")
 
        const prompt = require("prompt-sync")({ sigint: true })

        option = parseInt(prompt("Please enter the option = "))
            
        switch(option){
            case 1:
            bubble_sort_Ascending_A_TO_Z(array)
            display_data_A_TO_Z(array)
            break;
    
            


            case 2:
            bubble_sort_Descending_Z_TO_A(array)
            display_data_Z_TO_A(array)
            break;




            case 3:
            bubble_sort_Ascending_A_TO_Z(array)
            display_data_A_TO_Z(array)
  
            console.log("\n")
  
            bubble_sort_Descending_Z_TO_A(array)
            display_data_Z_TO_A(array)
            break;
         

    

            case 4:
                console.log("Thanks for using me :) ")
            break;
            
            


            default:
                console.log("Please select/enter a valid option :)")
            break;
        }
    } 

    while(option != 4)
}

repeat();



