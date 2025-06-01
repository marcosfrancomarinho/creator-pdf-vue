//@ts-check

export default class Document {
  #title;
  #content;
  /**
   * @param {string} title
   * @param {string} content
   */
  constructor(title, content) {
    this.#content = content;
    this.#title = title;
  }

  /**
   * @param {string} title
   * @param {string} content
   * @returns {Document}
   */
  static create(title, content) {
    this.validate(title, content);
    return new Document(title.trim(), content.trim());
  }

  /**
   * @param {string} title
   * @param {string} content
   * @returns {void}
   */
  static validate(title, content) {
    if (!title || title.trim().length === 0 || typeof title !== 'string') throw new Error('title invalid');
    if (!content || content.trim().length === 0 || typeof content !== 'string') throw new Error('content invalid');
  }

  /**@returns {string} */
  getNamePDF() {
    return this.#title.trim().replace(' ', '_').concat('.pdf');
  }

  /**@return{string} */
  getHtmlDataToSave() {
    return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 15px;
        background: white;
      }
        
      h1 {
        color: #0055aa;
        font-size: 24px;
        border-bottom: 1px solid #0055aa;
        margin-bottom: 20px;
        padding: 10px;
        overflow-wrap: break-word;
        word-break: break-word;
      }

      p {
        font-size: 16px;
        line-height: 1.6;
        overflow-wrap: break-word;
        word-break: break-word;
        margin-top: 10px;
        text-align:justify;
      }
    </style>
  </head>
  <body>
    <h1>${this.#title}</h1>
    <p>${this.#content}</p>
  </body>
</html>
`;
  }
}
