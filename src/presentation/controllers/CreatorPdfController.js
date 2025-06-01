import { DocumentRequestDTO } from '../../application/DTOs/DocumentRequestDTO.js';
import { CreatorPdfHandler } from '../../application/usecase/CreatorPdfHandler.js';

//@ts-check
export class CreatorPdfController {
  #creatorPdfHandler;
  /** @param {CreatorPdfHandler} creatorPdfHandler  */
  constructor(creatorPdfHandler) {
    this.#creatorPdfHandler = creatorPdfHandler;
  }

  async save({ title, content }) {
    const input = new DocumentRequestDTO(title, content);
    await this.#creatorPdfHandler.save(input);
  }
}
