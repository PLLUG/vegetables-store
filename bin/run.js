#!/usr/bin/env node

const {app} = require("../src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`App run on http://localhost:${PORT}`));