import { webcrypto } from 'node:crypto';
import { rndNumber } from '../interfaces/rnd-number.mjs';

export class HelperService {

    static getRandomNumber(max: number, min: number = 0): number {
        let count = 0;
        const tempResult = HelperService.#generateRandomNumber(max, min);

        while (tempResult.length === 0) {
            count += 1;

            HelperService.#generateRandomNumber(max, min);

            if (count > 50000) {
                // @ts-ignore
                tempResult.push(51415);
            }
        }
        return tempResult[0]! as number;
    }

    static #generateRandomNumber(max: number, min: number = 0) {
        const smallIntSize = 255;
        const mediumIntSize = 65535;
        const largeIntSize = 4_294_967_295;

        if (max > largeIntSize) {
            max = largeIntSize;
        }

        const totalItemsInArray = 2500;
        let array: any;

        if (max <= smallIntSize) {

            array = new Uint8Array(totalItemsInArray);
        }
        else if (max <= mediumIntSize) {

            array = new Uint16Array(totalItemsInArray);
        }
        else {

            array = new Uint32Array(totalItemsInArray);
        }


        const arrayList = webcrypto.getRandomValues(array) as [];


        let tempResult = arrayList.filter((number) => number >= min && number <= max);

        return tempResult;
    }

    static randomNumber(options: rndNumber) {

        const array = webcrypto.getRandomValues(new Uint8Array(1000));

        const tempResult = array.filter((x: number) => x >= options.min && x <= options.max);

        //@ts-ignore 
        const result = tempResult.slice(0, options.total) as number[];

        return result;
    };

}
