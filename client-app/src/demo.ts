export interface Icar {
    color: string;
    model: string;
    topSpeed?: number
}

const car1: Icar = {
color: "blue", model: "BMW"
}
const car2: Icar = {
color: "red", model: "audi", topSpeed: 200
}

const multiply = (x: number, y: number) => {
    x*y
}

export const cars = [car1, car2];