# Node.js Server Crash with Large JSON Response

This repository demonstrates a common issue in Node.js applications where sending large JSON responses can lead to server crashes or performance degradation.  The `server.js` file contains the problematic code, and `serverSolution.js` provides a solution using streaming and the `JSONStream` library.

## Problem

When sending very large JSON objects as responses, Node.js's default behavior might be insufficient.  The entire object is loaded into memory before being sent, which can overwhelm the server's resources for large payloads.