interface Util{
    seedStr:string
    random_generated_number:number
    getNewRandomNumber() : number
}


class ServerConPoint implements Util{
    seedStr: string;
    random_generated_number: number;
    getNewRandomNumber(): number {
        return Math.random()
    }

}

let newControlPoint = new ServerConPoint();
console.log(newControlPoint.getNewRandomNumber())