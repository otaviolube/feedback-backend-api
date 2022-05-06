const soma2 = (a: number, b: number): number => a+b;

describe("Testando algo ...", () => {
    test("Teste de soma", () => expect(soma2(10,20)).toBe(30));
});