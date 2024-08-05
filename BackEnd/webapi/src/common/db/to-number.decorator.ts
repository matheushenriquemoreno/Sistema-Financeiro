import { addAttributeOptions } from 'sequelize-typescript';


// Decorator personalizado, para trabalhar com sequelize
export function ToNumber(target: any, propertyKey: string): any {
  addAttributeOptions(target, propertyKey, {
    get(): any {
      return +this.getDataValue(propertyKey);
    },
  });
}