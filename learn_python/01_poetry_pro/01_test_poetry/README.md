
# Step-By-Step guide to installing Poetry on Windows:
Open Windows Powershell: Navigate to your Start menu, type "Powershell", and select "Windows Powershell" from the search results.

Run Installation Command: In the Powershell window, paste the following command and press Enter:

# Note: If you've installed Python through the Microsoft Store, replace py with python in the command below.
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -

Wait for Installation to Complete: The installation process may take some time depending on your internet connection speed. Let it run until completion.

Copy Installation Path: Once the installation is complete, it will provide you with a path. Copy this path as you'll need to add it to your user environment variables.

# Add Path to Environment Variables:

Right-click on the Start button and select "System".
In the System window, click on "Advanced system settings" on the left sidebar.
In the System Properties window, click on the "Environment Variables..." button.
In the Environment Variables window, under "User variables for [YourUsername]", find the "Path" variable and select it.
Click on the "Edit..." button.
In the Edit Environment Variable window, click on "New" and paste the path you copied from the installation process.
Click "OK" on all open windows to save your changes.
Close and Reopen Powershell: Close the Powershell window and open a new one.

Verify Installation: In the new Powershell window, type poetry --version and press Enter. If Poetry has been successfully installed, you should see its version number printed in the terminal.

You have now successfully installed Poetry on your Windows system. You can start using it for managing your Python projects.




# youtube live session
poetry --version
poetry new 01_test-poetry
cd 01_test poetry
poetry run python --version (created virtual Enviornment and shows the python version)
poetry run python ./01_test_poetry/main.py


poetry run pytest (First in tomal file install pytest poetry add pytest)
poetry add pytest



E:\desktop\playground\Web 3.0\Batch-47-Web-3.0\learn_python\01_poetry_pro>poetry new 01_test_poetry
Created package 01_test_poetry in 01_test_poetry

E:\desktop\playground\Web 3.0\Batch-47-Web-3.0\learn_python\01_poetry_pro>cd 01_test_poetry


E:\desktop\playground\Web 3.0\Batch-47-Web-3.0\learn_python\01_poetry_pro\01_test_poetry>poetry run python --version
Creating virtualenv 01-test-poetry-JmhfCxXC-py3.12 in C:\Users\Muhammad Yousaf\AppData\Local\pypoetry\Cache\virtualenvs
Python 3.12.2

E:\desktop\playground\Web 3.0\Batch-47-Web-3.0\learn_python\01_poetry_pro\01_test_poetry>poetry env list
01-test-poetry-JmhfCxXC-py3.12 (Activated)

make a file in subfolder (main.py)
select env (click on vscode status bar in terminal and select enviornment)
poetry env list 
poetry add requests (package install)


E:\desktop\playground\Web 3.0\Batch-47-Web-3.0\learn_python\01_poetry_pro\01_test_poetry>poetry run python ./01_test_poetry/main.py
Hello world

# realpython.com/dependency-management-python-poetry/
