

from langchain_groq import ChatGroq
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain.prompts import ChatPromptTemplate
from dotenv import load_dotenv
import os
from tools import calculator

load_dotenv()

def create_agent():
    llm = ChatGroq(
        groq_api_key=os.getenv("GROQ_API_KEY"),
        model_name="llama-3.1-8b-instant",
        temperature=0
    )

    tools = [calculator]

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", 
         "You are a helpful AI assistant. "
         "You can only use the tools provided to you. "
         "If no tool is relevant, answer normally."),
        ("human", "{input}"),
        ("placeholder", "{agent_scratchpad}"),
        
        ]
    )

    agent = create_tool_calling_agent(llm, tools, prompt)

    agent_executor = AgentExecutor(
        agent=agent,
        tools=tools,
        verbose=True
    )

    return agent_executor