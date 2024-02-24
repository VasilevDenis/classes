import Character from '../character';

describe('Character Constructor Test', () => {
    it('should create a new Character with correct properties', () => {
        const testCharacter = new Character('TestName', 'Bowman', 20, 30);

        expect(testCharacter.name).toBe('TestName');
        expect(testCharacter.type).toBe('Bowman');
        expect(testCharacter.health).toBe(100);
        expect(testCharacter.level).toBe(1);
        expect(testCharacter.attack).toBe(20);
        expect(testCharacter.defence).toBe(30);
    });

    it('should throw an error with invalid name length', () => {
        expect(() => new Character('a', 'Bowman', 20, 30)).toThrow('Name must be between 2 and 10 characters long');
    });

    it('should throw an error with invalid type', () => {
        expect(() => new Character('TestName', 'InvalidType', 20, 30)).toThrow('Invalid character type');
    });
});
