/**
 * This class represents pieces of food in the simulation.
 */
 class Food extends SimulatedObject{

    static color: string = 'orange'
    static radius: number = 4



    /**
     * @constructor
     * The position of the food is randomly generated.
     */
    constructor(){
        super()
        this.positionX =  Math.floor(Math.random() * mainCanvas.width)
        this.positionY = Math.floor(Math.random() * mainCanvas.height)
    }

}