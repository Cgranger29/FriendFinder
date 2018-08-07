//create friends constructor

function friends (name,image,scores){
    var counter =0;
    this.name = name;
    this.image = image;
    this.scores = scores;
    this.displayStats = function (){
        console.log(name);
        console.log(image);
        console.log(scores);
    };
    this.addScores = function(){
        for(i=0;i < scores.length;i++){
            counter+= scores[i];
        }
        return counter;
    }
}
//array to store newly created friends object
const friendArr = [];

var a = new friends("Meghan", "image goes here", [5,4,3,2,1,2,3,4,5,4]);
friendArr.push(a);
console.log(friendArr);



