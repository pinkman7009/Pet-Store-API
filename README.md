[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
[![GitHub forks](https://img.shields.io/github/forks/saswatamcode/the_shoppies?style=social)](https://GitHub.com/pinkman7009/Pet-Store-API/network/)
[![GitHub stars](https://img.shields.io/github/stars/saswatamcode/the_shoppies?style=social)](https://GitHub.com/pinkman7009/Pet-Store-API/stargazers/)
[![GitHub issues](https://img.shields.io/github/issues/saswatamcode/the_shoppies.svg)](https://GitHub.com/pinkman7009/Pet-Store-API/issues/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Pet Store API

> Backend API for a Pet store

## Routes

### Pets

- GET `/api/v1/pets` : Fetches all pets
- GET `/api/v1/pets/:id` : Fetches a single pet by ID
- POST `/api/v1/pets` : Creates a pet
- PUT `/api/v1/pets/:id` : Updates a pet
- DELETE `/api/v1/pets/:id` : Deletes a pet
- GET `/api/v1/owners/:ownerId/pets` : Fetches the pets of an owner
- GET `/api/v1/pets/:petId/owner` : Fetches the owner of a pet

### Owners

- GET `/api/v1/owners` : Fetches all owners
- GET `/api/v1/owners/:id` : Fetches a single owner by ID

### Authentication

- POST `/api/v1/auth/register` : Register a user
- POST `/api/v1/auth/login` : Log in a user
- GET `/api/v1/auth/me` : Get logged in user
- GET `/api/v1/auth/logout` : Log out a user

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values to your own

## To Run

1. Clone into repo
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the server

## Documentation

Detailed documentation with examples available at : https://documenter.getpostman.com/view/11590162/TWDZJbqb
