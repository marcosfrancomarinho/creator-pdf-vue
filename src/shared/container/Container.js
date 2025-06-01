//@ts-check
import { CreatorPdfHandler } from '../../application/usecase/CreatorPdfHandler.js';
import { Html2pdfRepository } from '../../infrastructure/pdf/Html2pdfRepository.js';

export class Container {
  static dependencies() {
    const pdfRepository = new Html2pdfRepository();
    const creatorPdfHandler = new CreatorPdfHandler(pdfRepository);
    return { creatorPdfHandler };
  }
}
