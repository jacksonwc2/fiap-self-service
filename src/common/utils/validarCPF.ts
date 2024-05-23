import { HttpException, HttpStatus } from "@nestjs/common";
import { removerCaracteresAlfanumericos } from "./removerCaracteresAlfanumericos";

const validarCpf = require("validar-cpf");

/**
 * Valida se o CPF informado é valido.
 * Se o CPF for inválido uma HttpStatus.BAD_REQUEST é lançada.
 * Retorna o CPF sem caracteres especiais.
 * 
 * @param valor 
 * @returns string
 */
export function validarCPF(valor: string): string {
  
  const cpf = removerCaracteresAlfanumericos(valor);

  if (!validarCpf(cpf)) {
    throw new HttpException(
      "Informe um CPF válido e tente novamente.",
      HttpStatus.BAD_REQUEST
    );
  }

  return cpf;
}
