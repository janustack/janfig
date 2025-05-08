# `@janudocs/tsconfig`

A base TypeScript configuration for Janudocs.

---

## Installation

Add the package to your "devDependencies":

```bash
# Using Bun
bun add -d @janfig/react

# Using NPM
npm i -D @janfig/solid
```

---

## Usage

Add an extends to your `tsconfig.json`:

```bash
{
	"extends": "@janudocs/tsconfig/react",
	"compilerOptions": {
    	# Your overides and additional options
  	}
}
```

---

## Configuration

Below is the complete `tsconfig.json` that this package supplies:

```bash
{
	"$schema": "https://json.schemastore.org/tsconfig",
	"compilerOptions": {
		"module": "ESNext",
		"lib": ["DOM", "DOM.Iterable", "ESNext"],
		"target": "ESNext",
		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"allowSyntheticDefaultImports": true,
		"verbatimModuleSyntax": true,
		"noEmit": true,
		"skipLibCheck": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"isolatedModules": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true,
		"noUncheckedSideEffectImports": true,
	}
}
```