# Raven React App

## Prerequisites

- Node version `YOUR_NODE_VERSION`
- NPM version `YOUR_NPM_VERSION`

## Setup Instructions

1. **Install Dependencies:**

    ```bash
    cd reactapp
    npm ci
    # If package-lock.json is not available, use the following command instead:
    # npm install
    ```

2. **Environment Variables:**
    - For Local (our local machines for development), use `.env.development` 
    - For production, use `.env.production`.

3. **Run Locally for Local (Our local machines for dev) env:** 

    ```bash
    npm run start:dev
    ```

4. **Run Locally for Remote (the terminal server) env:**
    ```bash
    npm run start:remote
    ```

## Dev (the actual dev server instance)

```bash
npm run dev
```

# TestNew (The QA server where RavenQA gets deployed)

```bash
npm run testnew 
```

## Build (Production)

```bash
npm run prod
```

- To serve locally, make sure you have installed the `serve` package globally. If not, install it with `npm install -g serve` and run:

    ```bash
    serve -s build
    ```

## Styling/Linting Instructions

If you are making changes to the UI in the `reactapp` directory, follow these styling instructions before committing:

1. **Pre-commit Check:**

    ```bash
    npm run pre-commit
    ```

2. **Styling Issue Resolution:**

    ```bash
    npm run pre-commit:fix
    ```

    If the above command doesn't work, use:

    ```bash
    npm run prettier:fix
    ```

    This command ensures consistent code styling in your project.