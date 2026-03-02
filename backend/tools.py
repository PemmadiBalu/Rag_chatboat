

from langchain.tools import tool

@tool
def calculator(expression: str) -> str:
    """
    Evaluate mathematical expressions.
    Example: 25 * 12 + 5
    """
    try:
        result = eval(expression)
        return str(result)
    except Exception:
        return "Invalid mathematical expression"