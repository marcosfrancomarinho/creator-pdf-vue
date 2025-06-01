//@ts-check

export class DocumentRequestDTO {
  title;
  content;
  /**
   * @param {string} title
   * @param {string} content
   */
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
}
