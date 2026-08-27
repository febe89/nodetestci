const add = require('./math');

describe('Math Functions', () => {
  
  test('should add two positive numbers correctly', () => {
    // Arrange & Act
    const result = add(2, 3);
    
    // Assert
    expect(result).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

});
