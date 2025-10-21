# ASCII Art Generator

This is a command-line interface (CLI) application that takes a string (which can be a word, a phrase, or a sentence) as an argument and prints it in a large ASCII art format. The output is scaled to fill the width of the terminal screen and is displayed in green blocks.

## Prerequisites

- Python 3

## Setup and Installation

1.  **Clone the repository or download the files.**

2.  **Create a virtual environment:**

    ```bash
    python3 -m venv venv
    ```

3.  **Activate the virtual environment:**

    ```bash
    source venv/bin/activate
    ```

4.  **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

## Usage

Once the dependencies are installed, you can run the script with the following command:

```bash
python ascii_art.py "Your text here"
```

Replace `"Your text here"` with the desired text. For example:

```bash
python ascii_art.py "Hello Gemini"
```

This will print the ASCII art to your terminal, scaled to fit the screen width and displayed in green blocks.
