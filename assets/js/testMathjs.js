import { create, all, tan } from 'mathjs';


const config = {};
const math = create(all, config);

console.log(math.sqrt(math.tan(math.pi)));