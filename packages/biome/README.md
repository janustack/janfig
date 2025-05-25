# @janfig/biome

> Shared Biome configuration for all Janustack projects

## Installation

```bash
# Bun
bun add -d @janfig/biome
```

## Usage

Add an extends to your `biome.json`:

```json
{
	"$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
	"extends": ["@janfig/biome"]
    // Your overrides and additional options here
}
```