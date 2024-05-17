/**
 * Remove caracteres alfanumericos
 * 
 * @param valor
 * @returns string
 */
export function removerCaracteresAlfanumericos(valor: string): string {
  return valor.replace(/[^0-9]/g,'');
}
