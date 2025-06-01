//@ts-check
import Document from '../../domain/entities/Document.js';
import { Html2pdfRepository } from '../../infrastructure/pdf/Html2pdfRepository.js';
import { DocumentRequestDTO } from '../DTOs/DocumentRequestDTO.js';
import { DocumentResponseDTO } from '../DTOs/DocumentResponseDTO.js';

//@ts-check
export class CreatorPdfHandler {
  #pdfRepository;
  /**@param {Html2pdfRepository} pdfRepository */
  constructor(pdfRepository) {
    this.#pdfRepository = pdfRepository;
  }

  /**
   * @param {DocumentRequestDTO} input
   * @returns {Promise<DocumentResponseDTO>}
   */
  async save(input) {
    const document = Document.create(input.title, input.content);
    await this.#pdfRepository.create(document);
    return new DocumentResponseDTO(document.getNamePDF(), 'pdf genereted whit sucess.');
  }
}
