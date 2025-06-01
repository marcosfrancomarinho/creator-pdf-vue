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
    };
    const container = window.document.createElement('div');
    container.innerHTML = document.getHtmlDataToSave();
    await html2pdf().set(options).from(container).save();
  }
}
