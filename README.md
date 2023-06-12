# Instructions

## Setup

1. Install the dependencies using `npm install` or `yarn install`.
2. Populate the `.env` file with relevant values. See `.env.example` for more information.

## Running the app

1. Run the app using `npm run start:dev` or `yarn start:dev`.

## Sending the payload

1. Create a POST request to the endpoint `http://{base_url}/` with the following payload:

```json
{
  "email": "<Your Email>"
}
```

## How to verify

1. You will receive an email.
