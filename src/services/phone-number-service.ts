import { HelperService } from "./helper-service";

export class PhoneNumberHelper {

    static generate(formattted: boolean = false) {

        const digits = HelperService.randomNumber({ min: 0, max: 9, total: 10 });

        if (digits[0] === 0 || digits[0] === 1) {
            const retry = HelperService.randomNumber({ min: 1, max: 9, total: 1 });
            digits[0] = retry[0]!;
        }


        return (!formattted) ?
            `${digits[0]}${digits[1]}${digits[2]}${digits[3]}${digits[4]}${digits[5]}${digits[6]}${digits[7]}${digits[8]}${digits[9]}` :
            `(${digits[0]}${digits[1]}${digits[2]}) ${digits[3]}${digits[4]}${digits[5]}-${digits[6]}${digits[7]}${digits[8]}${digits[9]}`;
    };
}
