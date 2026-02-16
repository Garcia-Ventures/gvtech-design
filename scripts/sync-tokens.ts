import fs from 'fs';
import path from 'path';
// We use a dynamic import or relative require because we are running with tsx
// and want to avoid complex tsconfig path issues for a simple script.
import { palette, theme } from '../src/theme/tokens';

const GLOBALS_CSS_PATH = path.join(process.cwd(), 'src/globals.css');

/** Strips hsl() wrapper and commas to match Tailwind/shadcn expectation of "H S L" */
function formatTokenValue(value: string) {
  if (value.includes('hsl')) {
    return value.replace(/hsl\((.*)\)/, '$1').replace(/,/g, '');
  }
  return value;
}

/** Converts camelCase to kebab-case */
function toKebabCase(str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function generateCssVariables() {
  let css = '  :root {\n';

  // Light theme
  for (const [key, value] of Object.entries(theme.light)) {
    const cssVarName = `--${toKebabCase(key)}`;
    css += `    ${cssVarName}: ${formatTokenValue(value as string)};\n`;
  }

  css += '\n    /* Brand Tokens */\n';
  for (const [category, tokens] of Object.entries(palette)) {
    for (const [key, value] of Object.entries(tokens)) {
      const cssVarName = `--${toKebabCase(category)}-${toKebabCase(key)}`;
      css += `    ${cssVarName}: ${formatTokenValue(value as string)};\n`;
    }
  }

  css += '  }\n\n  .dark {\n';

  // Dark theme
  for (const [key, value] of Object.entries(theme.dark)) {
    const cssVarName = `--${toKebabCase(key)}`;
    css += `    ${cssVarName}: ${formatTokenValue(value as string)};\n`;
  }

  css += '  }';
  return css;
}

function syncTokens() {
  try {
    const globalsContent = fs.readFileSync(GLOBALS_CSS_PATH, 'utf8');
    const variables = generateCssVariables();

    const tokenRegex = /\/\* @tokens-start \*\/[\s\S]*\/\* @tokens-end \*\//;

    if (!tokenRegex.test(globalsContent)) {
      console.error('❌ Error: Could not find @tokens markers in src/globals.css');
      process.exit(1);
    }

    const updatedContent = globalsContent.replace(tokenRegex, `/* @tokens-start */\n${variables}\n  /* @tokens-end */`);

    fs.writeFileSync(GLOBALS_CSS_PATH, updatedContent);
    console.log('✅ Tokens synchronized successfully');
  } catch (error) {
    console.error('❌ Error synchronizing tokens:', error);
    process.exit(1);
  }
}

syncTokens();
