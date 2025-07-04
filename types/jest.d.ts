// Type definitions for Jest global functions
declare global {
  const describe: (name: string, fn: () => void) => void;
  const it: (name: string, fn: () => void | Promise<void>) => void;
  const expect: any;
  const beforeEach: (fn: () => void | Promise<void>) => void;
  const afterEach: (fn: () => void | Promise<void>) => void;
  const beforeAll: (fn: () => void | Promise<void>) => void;
  const afterAll: (fn: () => void | Promise<void>) => void;
  const test: typeof it;
  namespace jest {
    function fn(): any;
    function mock(moduleName: string): any;
    function spyOn(object: any, method: string): any;
    function setTimeout(timeout: number): void;
  }
}

export {};
