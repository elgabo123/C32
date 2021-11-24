

class Bird extends BaseClass{
    constructor(x,y){
         //super: transfiere todas las propiedades 
        super(x,y,50,50); //ponemos 50,50 por que es el tamaño fijo
        //se carga también la imagen que le corresponde
        this.image=loadImage("sprites/bird.png");
        this.image2=loadImage("sprites/smoke.png");
        this.trayectory=[]
    }
    display(){
        
        super.display();
        var position=[this.body.position.x,this.body.position.y];
        this.trayectory.push(position);
        if(this.body.velocity.x>10&&this.body.position.x>200){
       
        for(var i=0;i<this.trayectory.length; i++){
        image(this.image2,this.trayectory[i][0],this.trayectory[i][1]);
        }
    }
    }
};