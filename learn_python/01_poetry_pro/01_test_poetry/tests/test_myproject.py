from  01_test_poetry import main.py 


def test_function1():
    r: str = main.my_first_function()
    assert r == "Hello World"

def test_function1():
    r: str = main.my_first_function()
    assert r != "pakistan"
