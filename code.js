
function runPlugin() {
    let selectedElements = figma.currentPage.selection.legth
    let score = 0
    let artboardCount = 0
 
 
    console.log(selectedElements)  
 
    // Puntos por preparación mental antes de arrancar el flujo
    score += 4;

    // Puntos por interacciones
    function hasSameName(node) {

            // Buttons
            if (node.name == "Default") {
                score += 1
                return true
            } else if (node.name == "Single") {
                score += 1
                return true
            } else if (node.name == "Fixed") {
                score += 1
                return true
            } else if (node.name == "Floating") {
                score += 1
                return true
            } else if (node.name == "Stacked") {
                score += 2
                return true

            // Radio button
            } else if (node.name == "Radio button") {
                score += 1
                return true
            } else if (node.name == "Selection controls") {
                score += 1
                return true

            // Checkbox
             } else if (node.name == "Checkbox") {
                score += 1
                return true

            // Dropdown
            } else if (node.name == "Dropdown") {
                score += 3
                return true
            } else if (node.name == "Dropdown Prefix") {
                score += 6
                return true
            
            // Switch
            } else if (node.name == "Switch") {
                score += 1
                return true
            
            // Slider
            } else if (node.name == "Slider") {
                score += 2
                return true
            
            // Toggle
            } else if (node.name == "Toggle") {
            score += 2
            return true

            // Text Field
            } else if (node.name == "Text Field") {
                score += 3
                return true
            } else if (node.name == "Text Field V2") {
                score += 3
                return true
            } else if (node.name == "Search") {
                score += 3
                return true
            } else if (node.name == "Sufix") {
                score += 3
                return true
            } else if (node.name == "Prefix") {
                score += 3
                return true

            // Calendar
            } else if (node.name == "_Calendar") {
                score += 5
                return true
            } else if (node.name == "_Horario") {
                score += 3
                return true

            // Chips
            } else if (node.name == "Chips") {
                score += 2
                return true

            // Upload 
            } else if (node.name == "Card / Upload element") {
                score += 6
                return true
            
            // List 
            } else if (node.name == "Single Line") {
                score += 3
                return true
            } else if (node.name == "Double Line / Emphasis") {
                score += 3
                return true
            } else if (node.name == "Double Line / Image + Icon") {
                score += 3
                return true

            // Points Of Interaction
            } else if (node.name == "1poi") {
                score += 1
                return true
            } else if (node.name == "2poi") {
                score += 2
                return true
            } else if (node.name == "3poi") {
                score += 3
                return true
            } else if (node.name == "4poi") {
                score += 4
                return true
            } else if (node.name == "5poi") {
                score += 5
                return true
            } else if (node.name == "6poi") {
                score += 6
                return true
            }
            
             
             
     
         return false
    }
 
     // Puntos por Scroll de la pantalla
     figma.currentPage.children.forEach(node => {
         if (node.type === "FRAME" && node.height > 640) {
             artboardCount += 1
             score += 3
         }
         if (node.type === "FRAME" && node.height > 1280) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 1920) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 2560) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 3200) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 3840) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 4480) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 5120) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 5760) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 6400) {
            artboardCount += 1
            score += 3
        }
        if (node.type === "FRAME" && node.height > 7040) {
            artboardCount += 1
            score += 3
        }
     })
  


     console.log(artboardCount) // Imprime el número de artboards con alto mayor a 640
 
   
    // Agarrar todos los elementos con el nombre con los nombres de componenetes del DS
    let withSameName = figma.currentPage.findAll(hasSameName)
  
    // Agarrar todos los elementos con los nombres de componenetes del DS
    figma.currentPage.selection = withSameName
 

    // Resultados 
    if (score <= 10) {
        figma.closePlugin(score + ' Interaction points 😎 | 🟩⬛⬛⬛⬛⬛⬛⬛⬛⬛')
     }
    if (score <= 20) {
       figma.closePlugin(score + ' Interaction points 😎 | 🟩🟩⬛⬛⬛⬛⬛⬛⬛⬛')
    }
     if (score <= 30) {
        figma.closePlugin(score + ' Interaction points 😎 | 🟩🟩🟩⬛⬛⬛⬛⬛⬛⬛')
     }
     if (score <= 40) {
        figma.closePlugin(score + ' Interaction points 😎 | 🟩🟩🟩🟩⬛⬛⬛⬛⬛⬛')
     }
     if (score <= 50) {
        figma.closePlugin(score + ' Interaction points 😎 | 🟩🟩🟩🟩🟩⬛⬛⬛⬛⬛')
     }
     if (score <= 60) {
        figma.closePlugin(score + ' Interaction points 😎 | 🟩🟩🟩🟩🟩🟩⬛⬛⬛⬛')
     }
     if (score <= 70) {
        figma.closePlugin(score + ' Interaction points 😐 | 🟧🟧🟧🟧🟧🟧🟧⬛⬛⬛')
     }
     if (score <= 80) {
        figma.closePlugin(score + ' Interaction points 😐 | 🟧🟧🟧🟧🟧🟧🟧🟧⬛⬛')
     }
     if (score <= 90) {
        figma.closePlugin(score + ' Interaction points 🚨 | 🟥🟥🟥🟥🟥🟥🟥🟥🟥⬛')
     }
     if (score <= 100) {
        figma.closePlugin(score + ' Interaction points 🚨 | 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥')
     }
     if (score > 100) {
        figma.closePlugin(score + ' Interaction points 🫠 | 💥💥💥💥💥💥💥💥💥💥')
    }
     if (score == 0) {
     figma.closePlugin('No hay ningun componente interactivo o no tienen nombres reconocibles por el plugin')
     }
    return
  
 }
  
 runPlugin()
  
 
 