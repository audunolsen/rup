# Ditching the bundler // SWC over Rollup

We do not need bundling — esm is the de facto module standard. It is the consuming environents responsibility to optimize deps if necessary,just as vite does. Bundling just to support commonJS adds a ton of headaches that are simply not worth the tradeoff.

This package uses SWC to compile. SWC is used over ESbuild for its ability to include just a directory which it recreates in a distribution-folder. ESbuild needs explicit inputs and outputs glob patterns in a flat manner. Neither SWC nor ESbuild generates declaration files. This will as of now still need to be produced by tsc. SWC will eventually support this through STC (Speedy type checker).
