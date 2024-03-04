# ABCD2.1 workshop

This project is a simple web application that fetches data from a JSON file and displays it as cards on the webpage.
This is created to show how Pull request and merge request works

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Even updating in github directly is fine

### Prerequisites

What things you need to install the software and how to install them:

- A modern web-browser (Chrome, Firefox, Safari, Edge)
- A text editor to edit HTML, CSS, and JavaScript files (VS Code, Sublime Text, Atom)

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser.

## Contributing

We welcome contributions from everyone. Here is how you can contribute:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Navigate to the project directory.
4. Open the `data.json` file and add your details in the following format:

    ```json
    {
      "name": "Your Name",
      "email": "your-email@example.com",
      "comment": "Your comment here."
    },
    ```

5. Save the `data.json` file.
6. Commit your changes with a meaningful commit message.
7. Push your changes to your forked repository.
8. Create a new Pull Request from your forked repository to the original repository.
## Creating a Pull Request

If you're new to GitHub, follow these steps to create a Pull Request:

1. Fork the repository: Navigate to the original repository you want to contribute to. Click on the 'Fork' button in the upper right corner of the repository page. This will create a copy of the repository in your GitHub account.

2. Clone the forked repository: Go to your GitHub account, open the forked repository, click on the 'Code' button and then click the 'copy to clipboard' icon to get the URL. Open a terminal on your computer, navigate to the directory where you want to clone the repository and run `git clone <URL>`.

3. Create a new branch: Navigate to the directory of the cloned repository on your computer and run `git checkout -b <branch-name>`. Replace `<branch-name>` with a name that describes the changes you're going to make.

4. Make your changes: Open the `data.json` file, add your details, and save the file.

5. Commit your changes: Run `git add .` to stage your changes, then run `git commit -m "<commit-message>"`. Replace `<commit-message>` with a brief description of the changes you made.

6. Push your changes: Run `git push origin <branch-name>` to push your changes to your forked repository on GitHub.

7. Create the Pull Request: Go to your GitHub account, open your forked repository, click on 'Pull request' and then click on 'New pull request'. Select the branch you created from the 'compare' dropdown. Review your changes and then click on 'Create pull request'.

8. Wait for your changes to be reviewed: Once you've created the Pull Request, maintainers of the original repository will review your changes. If your changes are approved, they will be merged into the main codebase. If there are any issues with your changes, the maintainers will let you know.
