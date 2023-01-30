# From Three.js Journey maked by Bruno Simon

Demo [here](https://sparkling-pastelito-df786f.netlify.app/)

## Distance & decay

Decay is the quantity of light attenuation with the distance

Low level -> less light across far object
0 -> No decay so every object is lighted by the same intensity

Distance = 0 -> no decay & all object in the scene is under the same light intensity.

Need to use Decay with Distance > 0, otherwise distance is useless.
With Distance > 0 & Decay > 0, we can set the among of intensity of light across object depending on the distance and decay power

## Penumbra vs Decay

Penumbra is the blur light.
Decay is linked to the light level on the element depending on the distance.

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
