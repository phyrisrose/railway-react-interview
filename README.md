# react-interview

Welcome to the Runway frontend exercise! We really appreciate you taking time to show us your
frontend development skills.

This repository is configured with a bunch of widely-used tools that are part of our
frontend engineering stack at Runway: React, NextJS, TypeScript, and more. It also includes
[Chakra UI](https://chakra-ui.com/docs/getting-started), a flexible component library that contains
handy building blocks for creating React apps.

Along with the tooling, you'll find a few components to help get you up and running on the
exercise. Our goal with the repo is to save you time creating a modern development
environment and writing boilerplate code. You're welcome to use some,
all, or none of what's included here. If you prefer to start with something like
[create-react-app](https://github.com/facebook/create-react-app) and to
borrow selectively from this repo, please feel free to do so.

## Installation

You can install dependencies using `yarn install` and run the app using `yarn dev`.

## Features implemented

- Highlighted the row / column headings bold.
  Known issue: the width of the cells in the header row is off, so the header cells don't align with their underlying columns
- Formatted the numeric cell values.
  A couple of rough edges:
  - It would be better if on focus, the raw number was displayed. Entry is a little funky right now
  - At the moment, the number formatter rounds up the currency to two decimal places. It's not a good UX when the cent numbers are rounded up or down on the spot; makes it appear as if what you are entering is not being registered correctly
- Added an arrow key press handler to move the cell value up, down, left, or right.
  An improvement: there is a LOT of code in the onMove handler within Spreadsheet right now. Ideally, it would be moved out somewhere, so the component code is easier to read.
