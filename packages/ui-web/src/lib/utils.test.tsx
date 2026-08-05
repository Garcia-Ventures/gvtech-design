import { describe, expect, it } from 'vitest';
import { cn, slugify } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('merges tailwind classes correctly', () => {
      expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
      expect(cn('p-4', 'p-2', 'bg-white')).toBe('p-2 bg-white');
    });

    it('handles conditional classes', () => {
      expect(cn('bg-red-500', false && 'bg-blue-500', 'text-white')).toBe('bg-red-500 text-white');
      expect(cn('bg-red-500', true && 'bg-blue-500')).toBe('bg-blue-500');
    });

    it('handles array and object inputs', () => {
      expect(cn(['bg-red-500', 'text-white'])).toBe('bg-red-500 text-white');
      expect(cn({ 'bg-red-500': true, 'text-black': false })).toBe('bg-red-500');
    });
  });

  describe('slugify', () => {
    it('converts basic string to lowercase and replaces spaces with hyphens', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('trims leading and trailing whitespace', () => {
      expect(slugify('   hello world   ')).toBe('hello-world');
    });

    it('collapses multiple consecutive spaces into a single hyphen', () => {
      expect(slugify('hello     world')).toBe('hello-world');
    });

    it('removes non-word characters except hyphens and underscores', () => {
      expect(slugify('hello! @world#')).toBe('hello-world');
      expect(slugify('hello_world-123')).toBe('hello_world-123');
    });

    it('collapses multiple consecutive hyphens into a single hyphen', () => {
      expect(slugify('hello--world')).toBe('hello-world');
      expect(slugify('hello - world')).toBe('hello-world');
      expect(slugify('hello---world')).toBe('hello-world');
    });

    it('handles strings that result in an empty string', () => {
      expect(slugify('!!!')).toBe('');
      expect(slugify('')).toBe('');
    });

    it('handles mixed special cases comprehensively', () => {
      expect(slugify('  My Awesome@Project!!!   --  Version 2.0  ')).toBe('my-awesomeproject-version-20');
    });
  });
});
