//@ts-check
export class DocumentResponseDTO {
  name;
  message;
  /**
   * @param {string} name
   * @param {string} message
   */
  constructor(name, message) {
    this.message = message;
    this.name = name;
  }
}
