const core = require('@actions/core'); // Import the GitHub Actions Core library

try {
  // Get the 'name' input from the action.yml file
  const name = core.getInput('name');

  // Create a greeting message
  const greeting = `Hello, ${name}!`;

  // Print the greeting to the console
  console.log(greeting);

  // Set the greeting as an output so it can be used in the workflow
  core.setOutput('greeting', greeting);
} catch (error) {
  // If something goes wrong, mark the action as failed and log the error message
  core.setFailed(error.message);
}
