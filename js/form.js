class Form{

    constructor(){

    }
    display(){
        var title=createElement("h2")
        title.html("car racing Game")
        title.position(130,0);

        var input=createInput("name")
        input.position(130,160)

        var button=createButton("play")
        button.position(250,200)

        var greting=createElement("h3") 
        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name= input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greting.html("hello"+name)
            greting.position(130,160);
            
        })

    }
}