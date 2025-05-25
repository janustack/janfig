# @janfig/tsconfig

## Installation

```bash
# Bun
bun add -d @janfig/tsconfig

# Deno
deno add -D @janfig/tsconfig
```

## Usage

Add an extends to your `tsconfig.json`:

```json
{
	"extends": "@janfig/tsconfig/react",
	"compilerOptions": {
    	// Your overrides and additional options here
  	}
}
```