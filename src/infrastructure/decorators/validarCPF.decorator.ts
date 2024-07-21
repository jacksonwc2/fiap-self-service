import { registerDecorator, ValidationOptions } from "class-validator";
import { validarCPF } from "../../common/validarCPF";

/**
 * Decorator utilizado em classes para validar atributo CPF 
 * 
 * @param validationOptions 
 */
export function ValidarCPF(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'ValidarCPF',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(valor: string) {
          validarCPF(valor);
          return true;
        }
      }
    });
  };
}
