import html2pdf from 'html2pdf.js';
import Document from '../../domain/entities/Document.js';

export class Html2pdfRepository {
  /**
   * @param {Document} document
   * @returns {Promise<void>}
   */
  async create(document) {
    const options = {
      margin: 0.5,
      filename: document.getNamePDF(),
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
    };
    const html = this.#createHtmlFromString(document);
    await html2pdf().set(options).from(html).save();
  }

  /**
   * @param {Document} document
   * @returns {HTMLElement}
   */
  #createHtmlFromString(document) {
    const domParser = new DOMParser();
    const container = domParser.parseFromString(document.getHtmlDataToSave(), 'text/html');
    const html = container.querySelector('html');
    return html;
  }
}
