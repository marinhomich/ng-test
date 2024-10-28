import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

  let service: UniqueIdService;
  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app')
    expect(id.startsWith('app-')).toBe(true)
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate ids when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    
    expect(ids.size).toBe(50);
  })

  it(`#${UniqueIdService.prototype.getNumberofGeneratedUniqueIds.name} should return the number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');

    expect(service.getNumberofGeneratedUniqueIds()).toBe(2)
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called empty`, () => {

    const emptyValues = ["", null, undefined];

    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue as any)).withContext(`Empty Value: ${emptyValue}`).toThrow();
    })

  })

  

})